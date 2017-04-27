import {Component} from '@angular/core';
import {AppService} from '../shared/app.service';


@Component({
    selector:'card-field',
    templateUrl:'app/card-action/card-field.component.html',
    styleUrls:['app/card-action/card-field.component.css'],
})


export class CardField{
    cards=[];
    newPlayer:any;
    constructor(private appServise:AppService){}
    ngOnInit(){
        this.appServise.initialization();
        this.cards=this.appServise.cards;
    }

    saveNewRezult(event){
        event.preventDefault();
        let score = this.appServise.counterStep;
        let saveNewPlayer = {
            name: this.newPlayer,
            score: score
        };
        this.appServise.addPlayer(saveNewPlayer)
            .subscribe(player => {});
        this.appServise.delete(this.appServise.winnerPlayer[9]._id).subscribe(data => {})
        this.appServise.rezult();

    }

}