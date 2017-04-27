import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Cards} from '../cards';

@Injectable()
export class AppService{
    savePlayer:boolean=false;
    lvl:number;
    modal:any=1;
    cards:Cards[]=[];
    item=[];
    counterStep:number=0;
    countWin:number=0;
    winnerPlayer:any;
    constructor(private http:Http){}
    getCards(){
        return this.http.get('http://localhost:3000/api/tasks')
            .map(res => res.json())
    }
    initialization(){
        this.lvl=1;
        this.getCards()
            .subscribe(tasks=>{
                let cardsList= tasks[0].lvl1;
                for(let index in cardsList){
                    let card=cardsList[index];
                    this.cards.push({card:card.card, flipped:false});
                    this.cards = this.cards.sort(function() {
                        return 0.5 - Math.random()
                    });
                } console.log(this.cards)
            });
    }
    initializationLvl2(){
        this.cards.length=0;
        this.getCards()
            .subscribe(tasks=>{
                let cardsList= tasks[0].lvl2;
                for(let index in cardsList){
                    let card=cardsList[index];
                    this.cards.push({card:card.card, flipped:false});
                    this.cards = this.cards.sort(function() {
                        return 0.5 - Math.random()
                    });
                } console.log(this.cards)
            });
        this.countWin=0;
    }
    cardDetected(item, numberEl){
        if(item.flipped == false){
            this.item.push(item);
            if(this.item.length == 2){
                this.counterStep++;
                if(this.item[0].card == this.item[1].card){
                    this.item=[];
                    this.countWin=this.countWin + 2;
                }
                else{
                    setTimeout(() => {
                        this.item[0].flipped=false;
                        this.item[1].flipped=false;
                        this.item=[];
                    }, 300);
                }
            }
            item.flipped=true;
            if(this.countWin == this.cards.length){
                this.modal=++this.lvl;
                if(this.lvl==3){
                    this.rezult();


                }
            }
        }
    }
    modalClose(){
        this.initializationLvl2();
        this.modal=false;
    }
    rezult(){
        this.http.get('http://localhost:3000/api/players')
            .map(res => res.json())
            .subscribe(players=>{
                console.log(players)
                this.winnerPlayer = players;
                for(let i = 0; i< this.winnerPlayer.length; i++){
                    if(this.counterStep < this.winnerPlayer[9].score){
                        this.savePlayer=true;

                    }
                }console.log(this.winnerPlayer[9]._id)

            });
    }
    delete(id){
        console.log('delete')
        return this.http.delete('/api/player/'+id)
            .map(res => res.json());
    }
    createNewGame(){
        this.cards.length=0;
        this.countWin=0;
        this.initialization();
        this.modal=false;
        this.item=[];
        this.counterStep=0;
    }
    addPlayer(newPlayer){
        this.savePlayer=false;
        this.delete(this.winnerPlayer[9]._id)
        var headers = new Headers();
        console.log(newPlayer)
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/player', JSON.stringify(newPlayer), {headers:headers})
             .map(res => res.json());
    }
}