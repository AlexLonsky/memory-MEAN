"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.savePlayer = false;
        this.modal = 1;
        this.cards = [];
        this.item = [];
        this.counterStep = 0;
        this.countWin = 0;
    }
    AppService.prototype.getCards = function () {
        return this.http.get('http://localhost:3000/api/tasks')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.initialization = function () {
        var _this = this;
        this.lvl = 1;
        this.getCards()
            .subscribe(function (tasks) {
            var cardsList = tasks[0].lvl1;
            for (var index in cardsList) {
                var card = cardsList[index];
                _this.cards.push({ card: card.card, flipped: false });
                _this.cards = _this.cards.sort(function () {
                    return 0.5 - Math.random();
                });
            }
            console.log(_this.cards);
        });
    };
    AppService.prototype.initializationLvl2 = function () {
        var _this = this;
        this.cards.length = 0;
        this.getCards()
            .subscribe(function (tasks) {
            var cardsList = tasks[0].lvl2;
            for (var index in cardsList) {
                var card = cardsList[index];
                _this.cards.push({ card: card.card, flipped: false });
                _this.cards = _this.cards.sort(function () {
                    return 0.5 - Math.random();
                });
            }
            console.log(_this.cards);
        });
        this.countWin = 0;
    };
    AppService.prototype.cardDetected = function (item, numberEl) {
        var _this = this;
        if (item.flipped == false) {
            this.item.push(item);
            if (this.item.length == 2) {
                this.counterStep++;
                if (this.item[0].card == this.item[1].card) {
                    this.item = [];
                    this.countWin = this.countWin + 2;
                }
                else {
                    setTimeout(function () {
                        _this.item[0].flipped = false;
                        _this.item[1].flipped = false;
                        _this.item = [];
                    }, 300);
                }
            }
            item.flipped = true;
            if (this.countWin == this.cards.length) {
                this.modal = ++this.lvl;
                if (this.lvl == 3) {
                    this.rezult();
                }
            }
        }
    };
    AppService.prototype.modalClose = function () {
        this.initializationLvl2();
        this.modal = false;
    };
    AppService.prototype.rezult = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/players')
            .map(function (res) { return res.json(); })
            .subscribe(function (players) {
            console.log(players);
            _this.winnerPlayer = players;
            for (var i = 0; i < _this.winnerPlayer.length; i++) {
                if (_this.counterStep < _this.winnerPlayer[9].score) {
                    _this.savePlayer = true;
                }
            }
            console.log(_this.winnerPlayer[9]._id);
        });
    };
    AppService.prototype.delete = function (id) {
        console.log('delete');
        return this.http.delete('/api/player/' + id)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.createNewGame = function () {
        this.cards.length = 0;
        this.countWin = 0;
        this.initialization();
        this.modal = false;
        this.item = [];
        this.counterStep = 0;
    };
    AppService.prototype.addPlayer = function (newPlayer) {
        this.savePlayer = false;
        this.delete(this.winnerPlayer[9]._id);
        var headers = new http_1.Headers();
        console.log(newPlayer);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/player', JSON.stringify(newPlayer), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map