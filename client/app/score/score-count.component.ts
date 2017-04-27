import {Component } from '@angular/core'
import {AppService} from '../shared/app.service';



@Component({
    selector:'score-item',
    templateUrl:'app/score/score-count.component.html',
    styleUrls:['app/score/score-count.component.css']
})


export class ScoreCount{
    constructor(private appServise:AppService){

    }
}