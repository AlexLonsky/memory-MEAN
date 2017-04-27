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
var app_service_1 = require('../../shared/app.service');
var CardItem = (function () {
    function CardItem(appServise) {
        this.appServise = appServise;
    }
    CardItem.prototype.cardClick = function () {
        this.appServise.cardDetected(this.item, this.numberEl);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardItem.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardItem.prototype, "numberEl", void 0);
    CardItem = __decorate([
        core_1.Component({
            selector: 'card-item',
            templateUrl: 'app/card-action/one-card/card-item.component.html',
            styleUrls: ['app/card-action/one-card/card-item.component.css'],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], CardItem);
    return CardItem;
}());
exports.CardItem = CardItem;
//# sourceMappingURL=card-item.component.js.map