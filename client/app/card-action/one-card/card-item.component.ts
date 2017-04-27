import {Component, Input} from '@angular/core';
import {AppService} from '../../shared/app.service';



@Component({
    selector:'card-item',
    templateUrl:'app/card-action/one-card/card-item.component.html',
    styleUrls:['app/card-action/one-card/card-item.component.css'],


})


export class CardItem {
    constructor(private appServise:AppService){}
    @Input() item:any;
    @Input() numberEl:any;
    cardClick(){
        this.appServise.cardDetected(this.item, this.numberEl)
    }
}