import {Component} from '@angular/core';
import {AppService} from '../shared/app.service';

@Component({
    selector:'new-game',
    templateUrl:'app/new-game/new-game.component.html',
    styleUrls:['app/new-game/new-game.component.css']
})

export class NewGame{
    constructor(private appServise:AppService){}
    newGame(){
        this.appServise.createNewGame();
    }
}