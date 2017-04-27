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
var app_service_1 = require('../shared/app.service');
var CardField = (function () {
    function CardField(appServise) {
        this.appServise = appServise;
        this.cards = [];
    }
    CardField.prototype.ngOnInit = function () {
        this.appServise.initialization();
        this.cards = this.appServise.cards;
    };
    CardField.prototype.saveNewRezult = function (event) {
        event.preventDefault();
        var score = this.appServise.counterStep;
        var saveNewPlayer = {
            name: this.newPlayer,
            score: score
        };
        this.appServise.addPlayer(saveNewPlayer)
            .subscribe(function (player) { });
        this.appServise.delete(this.appServise.winnerPlayer[9]._id).subscribe(function (data) { });
        this.appServise.rezult();
    };
    CardField = __decorate([
        core_1.Component({
            selector: 'card-field',
            templateUrl: 'app/card-action/card-field.component.html',
            styleUrls: ['app/card-action/card-field.component.css'],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], CardField);
    return CardField;
}());
exports.CardField = CardField;
//# sourceMappingURL=card-field.component.js.map