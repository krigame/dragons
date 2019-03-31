import {Component, OnInit} from '@angular/core';
import { State } from './models/state-enum';
import { Quests } from './models/quests';
import { Shop } from './models/shop';
import { ApiService } from './services/api.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  {

    state: State = State.init;
    playerName = '';
    nameError = false;
    gameId: string;
    lives: number;
    gold: number;
    level: number;
    score: number;
    highScore: number;
    turn: number;
    reputation_people: number;
    reputation_state: number;
    reputation_underworld: number;
    questSuccess: boolean;
    questFeedback: string;
    allQuests: Array<Quests> = [];
    shopItems: Array<Shop> = [];
    shoppingSuccess: boolean;


    constructor(public api: ApiService) { }

    ngOnInit() {
    }


    submitName( $event) {
        console.log('Name submitted');
        $event.preventDefault();
        if (this.playerName === '') { // no name is entered
            this.nameError = true;
        } else {
            this.nameError = false; // Name is present, good to go
            console.log(this.playerName);

            this.api.startGame().subscribe((result) => {
                this.gameId = result.gameId;
                this.lives = result.lives;
                this.gold = result.gold;
                this.level = result.level;
                this.score = result.score;
                this.highScore = result.highScore;
                this.turn = result.turn;
                this.state = State.default;
            }, (err) => {
                console.log(err);
            });

        }
    }

    pickQuest(forced) {
        console.log('Quest clicked');
        // Check if no quests are fetched or currently fetched quests are expired
        // If no condition met, try to fetch a new set of quests
        if (this.allQuests.length === 0 || this.allQuests[0].expiresIn === 0) {

            this.api.pickQuest(this.gameId).subscribe((result) => {
                this.allQuests = result;
                this.state = State.quests;
            }, (err) => {
                console.log(err);
            });

        } else if (forced) {
            // Attempts forced update of the quests list
            // Tries to possible overcome the issue, where after levelling up, the quests are no longer valid
            this.api.pickQuest(this.gameId).subscribe((result) => {
                this.allQuests = result;
                this.state = State.quests;
            }, (err) => {
                console.log(err);
            });

        } else {
            // If quests are present and not expired, simply change the state
            this.state = State.quests;
        }


    }

    questPicked(questId) {
        console.log('Questi ID: ', questId);
        this.api.solveQuest(this.gameId, questId).subscribe((result) => {

            // Update stats based on the result of the quest
            this.questSuccess = result.success;
            this.lives = result.lives;
            this.gold = result.gold;
            this.score = result.score;
            this.highScore = result.highScore;
            this.turn = result.turn;
            this.questFeedback = result.message;
            this.state = State.quest_done;

            // Change the expiredIn data in the list of quests
            this.allQuests.forEach((item) => {
                item.expiresIn--;
            });

            // Remove the recently selected quest from the list
            this.allQuests = this.allQuests.filter(item => item.adId !== questId);

            // Remove expired quests from the list
            this.allQuests = this.allQuests.filter(item => item.expiresIn === 0);
        }, (err) => {
            console.log(err);
            this.pickQuest(1);
        });
    }

    investigate() {
        console.log('Investigation clicked');

        this.api.investigate(this.gameId).subscribe((result) => {
            this.reputation_people = result.people;
            this.reputation_underworld = result.underworld;
            this.reputation_state = result.state;
            this.state = State.status;
        }, (err) => {
            console.log(err);
        });

    }

    shopping() {
        console.log('Shopping clicked');

        this.api.shopping(this.gameId).subscribe((result) => {
            this.shopItems = result;
            this.state = State.shop;
        }, (err) => {
            console.log(err);
        });
    }

    itemPurchased(itemId) {
        this.api.purchaseItem(this.gameId, itemId).subscribe((result) => {

            this.shoppingSuccess = result.shoppingSuccess;
            this.lives = result.lives;
            this.gold = result.gold;
            this.turn = result.turn;
            this.level = result.level;

        }, (err) => {
            console.log(err);
        });
    }

    changeState(state) {
        this.state = state;
    }


}
