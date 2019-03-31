import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { QuestsComponent } from './views/quests/quests.component';
import { StatsComponent } from './views/stats/stats.component';

import { ApiService } from './services/api.service';
import { DefaultComponent } from './views/default/default.component';
import { QuestDoneComponent } from './views/quest-done/quest-done.component';
import { ShopComponent } from './views/shop/shop.component';
import { InvestigateComponent } from './views/investigate/investigate.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestsComponent,
        StatsComponent,
        DefaultComponent,
        QuestDoneComponent,
        ShopComponent,
        InvestigateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        FormsModule,
        NgScrollbarModule,
    ],
    providers: [
        ApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
