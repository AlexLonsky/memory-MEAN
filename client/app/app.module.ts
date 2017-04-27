import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NewGame} from './new-game/new-game.component';
import {CardField} from './card-action/card-field.component';
import {CardItem} from './card-action/one-card/card-item.component';
import {ScoreCount} from './score/score-count.component';
import {AppService} from './shared/app.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, NewGame,CardField,CardItem,ScoreCount ],
    providers:[AppService],
    bootstrap: [AppComponent],

})
export class AppModule{

}