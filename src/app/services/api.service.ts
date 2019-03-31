import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { subscribeOn } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    endpoint = 'https://www.dragonsofmugloar.com/api/v2/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    startGame(): Observable<any> {
        console.log('Start Game - post');
        return this.http.post(this.endpoint + 'game/start', null, this.httpOptions).pipe(
            map(this.extractData));
    }

    pickQuest(gameId): Observable<any> {
        console.log('Pick a quest - get');
        return this.http.get(this.endpoint + gameId + '/messages').pipe(
            map(this.extractData));
    }

    // Mocking api call; used for development purposes
     /* pickQuest(gameId): Observable<any> {
        console.log('Pick Quest - post');
        return Observable.create((subscriber) => {
            setTimeout(() => {
                subscriber.next(allQuests);
            }, 200);
        });
    } */

    solveQuest(gameId, adId): Observable<any> {
        console.log('Solve a quest - post');
        return this.http.post(this.endpoint + gameId + '/solve/' + adId, null, this.httpOptions).pipe(
            map(this.extractData));
    }

    shopping(gameId): Observable<any> {
        console.log('List of shopping items - get');
        return this.http.get(this.endpoint + gameId + '/shop').pipe(
            map(this.extractData));
    }

    purchaseItem(gameId, itemId): Observable<any> {
        console.log('Purchase an item - post');
        return this.http.post(this.endpoint + gameId + '/shop/buy/' + itemId, null, this.httpOptions).pipe(
            map(this.extractData));
    }

    investigate(gameId): Observable<any> {
        console.log('Pick a quest - get');
        return this.http.post(this.endpoint + gameId + '/investigate/reputation', null, this.httpOptions).pipe(
            map(this.extractData));
    }
}


// Mockdata; used for development purposes
const allQuests = [
 {adId: "DHdUFeS3", message: "Help Ùna Quincey to sell an unordinary clothes on the local market", reward: 25, expiresIn: 7, probability: "Gamble"},
 {adId: "UBz3H7mF", message: "Help Trendafilka Brassington to clean their sheep", reward: 5, expiresIn: 7, probability: "Sure thing"},
 {adId: "stV6GRS2", message: "Help Fido Dickens to write their biographical novel about their difficulties with a deranged pan", reward: 27, expiresIn: 7, probability: "Hmmm...."},
 {adId: "BnB59NNM", message: "Create an advertisement campaign for Marlen Courtney to promote their chariot based business", reward: 26, expiresIn: 7, probability: "Gamble"},
 {adId: "xEDd2be6", message: "Steal wagon delivery to Ambakoum Quincey and share some of the profits with the people.", reward: 55, expiresIn: 7, probability: "Piece of cake"},
 {adId: "xNkNJmq6", message: "Help Agafya Studwick to write their biographical n…el about their difficulties with a deranged water", reward: 31, expiresIn: 7, probability: "Playing with fire"},
 {adId: "yHsqK890", message: "Escort Nephele Sowards to field in Blackburg where they can meet with their long lost sheep", reward: 75, expiresIn: 7, probability: "Playing with fire"},
 {adId: "ItQbEIzq", message: "Help Demon Harland to write their biographical novel about their difficulties with a deranged house", reward: 31, expiresIn: 7, probability: "Walk in the park"},
 {adId: "ULh82Qqo", message: "Help Alfarr Braddock to transport a magic sheep to plains in Ravenville", reward: 19, expiresIn: 7, probability: "Piece of cake"},
 {adId: "U7YFwSDs", message: "Help Eelis Winterbottom to fix their clothes", reward: 2, expiresIn: 7, probability: "Piece of cake"},
 ];