webpackJsonp([8],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TranslationSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_enums_language__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslationSet = (function () {
    function TranslationSet() {
        this.values = {};
    }
    return TranslationSet;
}());

var TranslationsProvider = (function () {
    function TranslationsProvider() {
        this.languages = ['swe', 'eng'];
        this.language = __WEBPACK_IMPORTED_MODULE_1__assets_enums_language__["a" /* Languages */].swe;
        this.dictionary = {
            'swe': {
                language: 'swe',
                values: {
                    'ANSWER': 'Svar',
                    'AUDIO': 'Ljud',
                    'BODY': 'Kroppen',
                    'ENGLISH': 'Engelska',
                    'FREE_TEXT': 'Fri text',
                    'HOME': 'Hem',
                    'KIDS': 'Barn',
                    'LANGUAGE': 'Språk',
                    'NEEDS': 'Behov',
                    'SETTINGS': 'Inställningar',
                    'SWEDISH': 'Svenska',
                    'WANT_TO_KNOW': 'Vill veta',
                    'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS': 'Med hjälp av denna sida kan du svara på frågor'
                }
            },
            'eng': {
                language: 'eng',
                values: {
                    'ANSWER': 'Answer',
                    'AUDIO': 'Audio',
                    'BODY': 'Body',
                    'ENGLISH': 'English',
                    'FREE_TEXT': 'Free text',
                    'HOME': 'Home',
                    'KIDS': 'Kids',
                    'LANGUAGE': 'Language',
                    'NEEDS': 'Needs',
                    'SETTINGS': 'Settings',
                    'SWEDISH': 'Swedish',
                    'WANT_TO_KNOW': 'Want to know',
                    'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS': 'With the help of this page you can answer questions'
                }
            }
        };
        console.log(this.language);
    }
    TranslationsProvider.prototype.translate = function (value) {
        if (this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[value];
        }
    };
    TranslationsProvider.prototype.switchLanguage = function (language) {
        this.language = language;
    };
    TranslationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TranslationsProvider);
    return TranslationsProvider;
}());

//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sound_or_not_sound_or_not__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswerviewPage = (function () {
    function AnswerviewPage(navCtrl, navParams, alarmSound, nativeAudio, SoundOrNotProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.nativeAudio = nativeAudio;
        this.SoundOrNotProvider = SoundOrNotProvider;
        this.playingAnswerSound = false;
        this.nativeAudio.preloadSimple('yesSound', 'assets/audio/answerSounds/JA.mp3').then(function () { return console.log(); }, function (e) { return console.log(e); });
        this.nativeAudio.preloadSimple('noSound', 'assets/audio/answerSounds/NEJ.mp3').then(function () { return console.log(); }, function (e) { return console.log(e); });
        this.nativeAudio.preloadSimple('maybeSound', 'assets/audio/answerSounds/KANSKE.mp3').then(function () { return console.log(); }, function (e) { return console.log(e); });
        this.nativeAudio.preloadSimple('okSound', 'assets/audio/answerSounds/OKEJ.mp3').then(function () { return console.log(); }, function (e) { return console.log(e); });
    }
    AnswerviewPage.prototype.answer = function (inputAnswer) {
        if (this.SoundOrNotProvider.GetSoundOnOff() == true) {
            switch (inputAnswer) {
                case "yes":
                    this.playsound('yesSound');
                    break;
                case "no":
                    this.playsound('noSound');
                    break;
                case "maybe":
                    this.playsound('maybeSound');
                    break;
                case "ok":
                    this.playsound('okSound');
                    break;
                default:
                    console.log("no answer pressed");
                    break;
            }
        }
    };
    AnswerviewPage.prototype.playsound = function (soundInput) {
        var _this = this;
        if (this.playingAnswerSound === false) {
            this.nativeAudio.play(soundInput);
            this.playingAnswerSound = true;
            //The timeout is set to three seconds so that you cannot call this function all the time
            setTimeout(function () {
                _this.playingAnswerSound = false;
            }, 3000);
        }
    };
    AnswerviewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    AnswerviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-answerview',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/answerview/answerview.html"*/`<ion-header no-border>\n    <ion-navbar transparent padding>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <span>Svara</span>\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="this.callHelp()">\n         <span><ion-icon name="megaphone"></ion-icon></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="card-background-page">\n    <h1 class="infoText">{{\'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS\' | translate}}</h1>\n    <hr class="whiteLine">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card (click)="answer(\'yes\')">\n          <img class="img-set" src="./assets/imgs/yes.png"/>\n          <div class="card-title">Ja</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card (click)="answer(\'no\')">\n          <img class="img-set" src="./assets/imgs/no.png"/>\n          <div class="card-title">Nej</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card (click)="answer(\'maybe\')">\n          <img class="img-set" src="./assets/imgs/maybe.png"/>\n          <div class="card-title">Kanske</div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card (click)="answer(\'ok\')">\n          <img class="img-set" src="./assets/imgs/ok.png"/>\n          <div class="card-title">Okej</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--<button ion-button secondary menuToggle>Toggle Menu</button>-->\n</ion-content>\n`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/answerview/answerview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__providers_sound_or_not_sound_or_not__["a" /* SoundOrNotProvider */]])
    ], AnswerviewPage);
    return AnswerviewPage;
}());

//# sourceMappingURL=answerview.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pain_view_pain_view__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_list_item_show_list_item__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BodyviewPage = (function () {
    function BodyviewPage(navCtrl, navParams, alarmSound, categoryItem) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.images = [
            {
                imageSource: './assets/imgs/answerPicture.jpg'
            }
        ];
        this.selectedItem = navParams.get('itemnames');
        this.pageTitle = navParams.get('itemname');
        if (navParams.get('itemnames') == undefined) {
            this.itemnames = ["Andningsproblem", "Hunger och törst", "Hygien", "Känslor", "Smärta", "Sängläge", "Toalett"];
        }
        else {
            this.itemnames = navParams.get('itemnames');
        }
        this.items = categoryItem.fillListView(this.itemnames);
    }
    BodyviewPage_1 = BodyviewPage;
    BodyviewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    BodyviewPage.prototype.pushPageWithInfo = function (itemList, itemName) {
        this.navCtrl.push(BodyviewPage_1, {
            itemnames: itemList,
            itemname: itemName
        });
    };
    BodyviewPage.prototype.pushToShowText = function (chosenItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__show_list_item_show_list_item__["a" /* ShowListItemPage */], {
            itemToDisplay: chosenItem
        });
    };
    BodyviewPage.prototype.itemTapped = function (event, item) {
        switch (item.title) {
            case "Andningsproblem":
                this.pushPageWithInfo(['Jag har svårt att andas', 'Jag har slem i halsen', 'Det gör ont när jag andas'], "Andningsproblem");
                break;
            case 'Hunger och törst':
                this.pushPageWithInfo(['Jag vill dricka', 'Jag är hungrig', 'Jag är törstig', 'Jag vill äta'], "Hunger och törst");
                break;
            case 'Hygien':
                this.pushPageWithInfo(['Jag vill duscha', 'Jag vill borsta tänderna', 'Jag vill tvätta håret', 'Jag vill kamma håret', 'Jag vill tvätta händerna', 'Jag vill byta kläder'], "Hygien");
                break;
            case 'Känslor':
                this.pushPageWithInfo(['Jag mår bra', 'Jag mår dåligt', 'Jag är nervös', 'Jag har ångest', 'Jag känner mig trött', 'Jag känner mig orolig'], "Känslor");
                break;
            case "Smärta":
                this.pushPageWithInfo(['Insidan av kroppen', 'Utsidan av kroppen'], "Smärta");
                break;
            case 'Sängläge':
                this.pushPageWithInfo(['Jag vill höja min huvudända', 'Jag vill sänka min huvudända', 'Jag vill ligga i sidoläge', 'Jag vill sitta upp på sängkanten', 'Jag vill sitta upp i stol', 'Jag vill sitta i rullstol'], "Sängläge");
                break;
            case 'Toalett':
                this.pushPageWithInfo(['Jag behöver att kissa', 'Jag behöver att bajsa'], "Toalett");
                break;
            case 'Insidan av kroppen':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pain_view_pain_view__["a" /* PainViewPage */], {
                    painSection: "Insidan",
                    imageSource: "assets/imgs/answerPicture.jpg"
                });
                break;
            case 'Utsidan av kroppen':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pain_view_pain_view__["a" /* PainViewPage */], {
                    painSection: "Utsidan",
                    imageSource: "./assets/imgs/answerPicture.jpg"
                });
                break;
            default:
                this.pushToShowText(item.title);
                break;
        }
    };
    BodyviewPage = BodyviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bodyview',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/bodyview/bodyview.html"*/`<ion-header no-border>\n    <ion-navbar transparent padding>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <span>Kroppen</span>\n        <div *ngIf="selectedItem">\n          <span id="subCategory">{{pageTitle}}</span>\n        </div>\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="this.callHelp()">\n         <span><ion-icon name="megaphone"></ion-icon></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="backgroundSetter">\n    <hr class="whiteLine">\n  <ion-list class="listClass">\n    <button ion-item *ngFor="let item of items" id="categoryItem" (press)="itemTapped($event, item)" (click)="itemTapped($event, item)">\n      <h2>{{item.title}}</h2>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" >\n      <button id="menuButton" ion-button secondary menuToggle>Meny</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/bodyview/bodyview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__["a" /* CategoryItemsProvider */]])
    ], BodyviewPage);
    return BodyviewPage;
    var BodyviewPage_1;
}());

//# sourceMappingURL=bodyview.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PainViewPage = (function () {
    function PainViewPage(navCtrl, navParams, alarmSound) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.painSection = "";
        this.picturePath = "";
        this.painSection = navParams.get('painSection');
        if (this.painSection == "Insidan") {
            this.picturePath = "./assets/imgs/inside-body.png";
        }
        else {
            this.picturePath = "./assets/imgs/painpic.png";
        }
    }
    PainViewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    PainViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pain-view',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/pain-view/pain-view.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Smärta</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n        <span>\n          <ion-icon name="megaphone"></ion-icon>\n        </span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundSetter">\n  <h1 class="infoText">Vart har du ont?</h1>\n  <hr class="whiteLine">\n  <img class="painImage" src="{{picturePath}}"></ion-content>`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/pain-view/pain-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */]])
    ], PainViewPage);
    return PainViewPage;
}());

//# sourceMappingURL=pain-view.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_list_item_show_list_item__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KidsViewPage = (function () {
    function KidsViewPage(navCtrl, navParams, alarmSound, categoryItem) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.images = [
            {
                imageSource: './assets/imgs/answerPicture.jpg'
            }
        ];
        this.selectedItem = navParams.get('itemnames');
        this.pageTitle = navParams.get('itemname');
        if (navParams.get('itemnames') == undefined) {
            this.itemnames = ["Leksaker", "Mjukdjur", "Spel", "Ipad"];
        }
        else {
            this.itemnames = navParams.get('itemnames');
        }
        this.items = categoryItem.fillListView(this.itemnames);
    }
    KidsViewPage_1 = KidsViewPage;
    KidsViewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    KidsViewPage.prototype.pushPageWithInfo = function (itemList, itemName) {
        this.navCtrl.push(KidsViewPage_1, {
            itemnames: itemList,
            itemname: itemName
        });
    };
    KidsViewPage.prototype.pushToShowText = function (chosenItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_list_item_show_list_item__["a" /* ShowListItemPage */], {
            itemToDisplay: chosenItem
        });
    };
    KidsViewPage.prototype.itemTapped = function (event, item) {
        switch (item.title) {
            case "Leksaker":
                this.pushPageWithInfo(['Jag vill ha en leksak'], 'Leksaker');
                break;
            case 'Mjukdjur':
                this.pushPageWithInfo(['Jag vill ha ett mjukdjur'], "Mjukdjur");
                break;
            case 'Spel':
                this.pushPageWithInfo(['Jag vill spela ett spel'], "Spel");
                break;
            case 'Ipad':
                this.pushPageWithInfo(['Jag vill använda en ipad'], "Ipad");
                break;
            default:
                this.pushToShowText(item.title);
                break;
        }
    };
    KidsViewPage = KidsViewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kids-view',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/kids-view/kids-view.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Barn</span>\n      <div *ngIf="selectedItem">\n        <span id="subCategory">{{pageTitle}}</span>\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n       <span><ion-icon name="megaphone"></ion-icon></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="backgroundSetter">\n  <h1 class="infoText">Här kan du välja det du vill ha</h1>\n  <hr class="whiteLine">\n<ion-list class="listClass">\n  <button ion-item *ngFor="let item of items" id="categoryItem" (press)="itemTapped($event, item)" (click)="itemTapped($event, item)">\n    <h2>{{item.title}}</h2>\n  </button>\n</ion-list>\n<div *ngIf="selectedItem" >\n    <button id="menuButton" ion-button secondary menuToggle>Meny</button>\n</div>\n</ion-content>\n`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/kids-view/kids-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__["a" /* CategoryItemsProvider */]])
    ], KidsViewPage);
    return KidsViewPage;
    var KidsViewPage_1;
}());

//# sourceMappingURL=kids-view.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_list_item_show_list_item__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NeedViewPage = (function () {
    function NeedViewPage(navCtrl, navParams, alarmSound, categoryItem) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.buttonColor = "black";
        this.images = [
            {
                imageSource: './assets/imgs/answerPicture.jpg'
            }
        ];
        this.selectedItem = navParams.get('itemnames');
        this.pageTitle = navParams.get('itemname');
        if (navParams.get('itemnames') == undefined) {
            this.itemnames = ["Kosmetik", "Lyssna", "Läsa", "Mobil", "TV"];
        }
        else {
            this.itemnames = navParams.get('itemnames');
        }
        this.items = categoryItem.fillListView(this.itemnames);
    }
    NeedViewPage_1 = NeedViewPage;
    NeedViewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    NeedViewPage.prototype.pushPageWithInfo = function (itemList, itemName) {
        this.navCtrl.push(NeedViewPage_1, {
            itemnames: itemList,
            itemname: itemName
        });
    };
    NeedViewPage.prototype.pushToShowText = function (chosenItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_list_item_show_list_item__["a" /* ShowListItemPage */], {
            itemToDisplay: chosenItem
        });
    };
    NeedViewPage.prototype.itemTapped = function (event, item) {
        //console.log(item.title);
        switch (item.title) {
            case "Kosmetik":
                this.pushPageWithInfo(['Jag vill ha mina glasögon', 'Jag vill ha min hörapparat', 'Jag vill ha mina löständer'], "Kosmetik");
                break;
            case "TV":
                this.pushPageWithInfo(['Kan du starta TV-apparaten?', 'Kan du stänga av TV-apparaten?', 'Kan du växla en kanal upp?', 'Kan du växla en kanal ned?', 'Kan du höja volymen?', 'Kan du sänka volymen?'], "TV");
                break;
            case 'Lyssna':
                this.pushPageWithInfo(['Jag vill ha mina hörlurar', 'Jag vill lyssna på ljudbok', 'Jag vill lyssna på musik', 'Jag vill lyssna på podcast', 'Jag vill lyssna på radio', 'Jag vill ha tystnad'], "Lyssna");
                break;
            case 'Mobil':
                this.pushPageWithInfo(['Jag vill ha min mobil', 'Jag vill ringa ett samtal', 'Jag vill skicka ett meddelande', 'Jag vill spela mobilspel', 'Har någon ringt min telefon?', 'Jag vill ladda min telefon'], "Mobil");
                break;
            case 'Läsa':
                this.pushPageWithInfo(['Jag vill läsa en bok', 'Jag vill läsa en tidning', 'Jag vill läsa en serietidning'], "Läsa");
                break;
            default:
                this.pushToShowText(item.title);
                break;
        }
    };
    NeedViewPage = NeedViewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-need-view',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/need-view/need-view.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Behov</span>\n      <div *ngIf="selectedItem">\n        <span id="subCategory">{{pageTitle}}</span>\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n        <span>\n          <ion-icon name="megaphone"></ion-icon>\n        </span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundSetter">\n  <h1 class="infoText">Här kan du förmedla dina behov och önskemål</h1>\n  <hr class="whiteLine">\n  <ion-list class="listClass">\n    <button [style.color]="buttonColor" ion-item *ngFor="let item of items" id="categoryItem" (press)="itemTapped($event, item)" (click)="itemTapped($event, item)">\n      <h2>{{item.title}}</h2>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem">\n    <button id="menuButton" ion-button secondary menuToggle>Meny</button>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/need-view/need-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__["a" /* CategoryItemsProvider */]])
    ], NeedViewPage);
    return NeedViewPage;
    var NeedViewPage_1;
}());

//# sourceMappingURL=need-view.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantToKnowViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__write_own_text_write_own_text__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_list_item_show_list_item__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WantToKnowViewPage = (function () {
    function WantToKnowViewPage(navCtrl, navParams, alarmSound, categoryItem) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.images = [
            {
                imageSource: './assets/imgs/answerPicture.jpg'
            }
        ];
        this.selectedItem = navParams.get('itemnames');
        this.pageTitle = navParams.get('itemname');
        if (navParams.get('itemnames') == undefined) {
            this.itemnames = ["Barnen", "Föräldrar", "Hemmet", "Kommunikation", "Kusiner", "Läkemedel"];
        }
        else {
            this.itemnames = navParams.get('itemnames');
        }
        this.items = categoryItem.fillListView(this.itemnames);
    }
    WantToKnowViewPage_1 = WantToKnowViewPage;
    WantToKnowViewPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    WantToKnowViewPage.prototype.pushPageWithInfo = function (itemList, itemName) {
        this.navCtrl.push(WantToKnowViewPage_1, {
            itemnames: itemList,
            itemname: itemName
        });
    };
    WantToKnowViewPage.prototype.pushToShowText = function (chosenItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__show_list_item_show_list_item__["a" /* ShowListItemPage */], {
            itemToDisplay: chosenItem
        });
    };
    WantToKnowViewPage.prototype.itemTapped = function (event, item) {
        //console.log(item.title);
        switch (item.title) {
            case "Läkemedel":
                this.pushPageWithInfo(['Mediciner', 'Infusioner', 'Injektioner', 'Sugkateter', 'Sond', 'Sondmat', 'Undersökning', 'Röntgen', 'Operation', 'Provsvar'], "Läkemedel");
                break;
            case "Kusiner":
                this.pushPageWithInfo(['Hur mår mina kusiner?', 'Vart är mina kusiner?', 'Vem passar mina barn?'], "Kusiner");
                break;
            case "Föräldrar":
                this.pushPageWithInfo(['Hur mår mina barn?', 'Vart är mina barn?', 'Vem passar mina barn?', 'Hur mår mina husdjur?', 'Hur mår mina föräldrar?', 'Hur mår mina kusiner?'], "Familjen");
                break;
            case "Barnen":
                this.pushPageWithInfo(['Hur mår mina barn?', 'Vart är mina barn?', 'Vem passar mina barn?'], "Barnen");
                break;
            case 'Hemmet':
                this.pushPageWithInfo(['Vem hämtar min post?', 'Vem betalar mina räkningar?', 'Vart är min bil?', 'Vem tar hand om min trädgård?', 'Vem tar hand om huset?'], "Hemmet");
                break;
            case 'Kommunikation':
                this.pushPageWithInfo(['Jag vill tala med en läkare', 'Jag vill tala med en sjuksköterska', 'Jag vill tala med en präst', 'Jag vill tala med en kurator'], "Kommunikation");
                break;
            case 'Läkare':
            case 'Sjuksköterska':
            case 'Präst':
            case 'Kurator':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__write_own_text_write_own_text__["a" /* WriteOwnTextPage */]);
                break;
            default:
                this.pushToShowText(item.title);
                break;
        }
    };
    WantToKnowViewPage = WantToKnowViewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-want-to-know-view',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/want-to-know-view/want-to-know-view.html"*/`<ion-header no-border>\n    <ion-navbar transparent padding>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <span>Vill veta</span>\n        <div *ngIf="selectedItem">\n          <span id="subCategory">{{pageTitle}}</span>\n        </div>\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="this.callHelp()">\n         <span><ion-icon name="megaphone"></ion-icon></span>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="backgroundSetter">\n    <h1 class="infoText">Här kan du ställa dina frågor och funderingar</h1>\n    <hr class="whiteLine">\n  <ion-list class="listClass">\n    <button ion-item *ngFor="let item of items" id="categoryItem" (press)="itemTapped($event, item)" (click)="itemTapped($event, item)">\n      <h2>{{item.title}}</h2>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" >\n      <button id="menuButton" ion-button secondary menuToggle>Meny</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/want-to-know-view/want-to-know-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_category_items_category_items__["a" /* CategoryItemsProvider */]])
    ], WantToKnowViewPage);
    return WantToKnowViewPage;
    var WantToKnowViewPage_1;
}());

//# sourceMappingURL=want-to-know-view.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/answerview/answerview.module": [
		287,
		7
	],
	"../pages/bodyview/bodyview.module": [
		288,
		6
	],
	"../pages/kids-view/kids-view.module": [
		289,
		5
	],
	"../pages/need-view/need-view.module": [
		290,
		4
	],
	"../pages/pain-view/pain-view.module": [
		291,
		3
	],
	"../pages/show-list-item/show-list-item.module": [
		292,
		2
	],
	"../pages/want-to-know-view/want-to-know-view.module": [
		293,
		1
	],
	"../pages/write-own-text/write-own-text.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmSoundProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_or_not_sound_or_not__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmSoundProvider = (function () {
    function AlarmSoundProvider(nativeAudio, SoundOrNotProvider, alertCtrl) {
        this.nativeAudio = nativeAudio;
        this.SoundOrNotProvider = SoundOrNotProvider;
        this.alertCtrl = alertCtrl;
        this.playingHelpSound = false;
        this.nativeAudio.preloadSimple('helpSound', 'assets/audio/alarm2.mp3').then(function () { return console.log(); }, function (e) { return console.log(e); });
    }
    AlarmSoundProvider.prototype.callHelp = function () {
        var _this = this;
        if (this.SoundOrNotProvider.GetSoundOnOff() == true) {
            if (this.playingHelpSound === false) {
                this.nativeAudio.play('helpSound');
                this.playingHelpSound = true;
                //The timeout is set to five seconds so that you cannot call this function all the time
                setTimeout(function () {
                    _this.playingHelpSound = false;
                }, 5000);
            }
        }
    };
    //Method used to check if there is some error on a tablet. 
    AlarmSoundProvider.prototype.presentAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AlarmSoundProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_2__sound_or_not_sound_or_not__["a" /* SoundOrNotProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], AlarmSoundProvider);
    return AlarmSoundProvider;
}());

//# sourceMappingURL=alarm-sound.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, alarmSound) {
        this.navCtrl = navCtrl;
        this.alarmSound = alarmSound;
        this.hospitalPics = [
            './assets/imgs/hospital_slide5.jpg',
            './assets/imgs/hospital_slide1.jpg',
            './assets/imgs/hospital_slide2.jpg',
            './assets/imgs/hospital_slide3.jpg',
            './assets/imgs/hospital_slide4.jpg'
        ];
    }
    HomePage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/home/home.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon class="bigger" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Hem</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n       <span><ion-icon name="megaphone"></ion-icon></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home-background-page">\n  <ion-slides pager="false" autoplay="6000" loop="true" speed="1400" effect="fade">\n    <ion-slide class="home-background swiper-no-swiping" *ngFor="let picture of hospitalPics" [ngStyle]="{\'background-image\': \'url(\' + picture +\')\'}">\n    </ion-slide>\n  </ion-slides>\n  <h1 class="intro-header">Välkommen till Hospitality App!</h1>\n\n  <!-- Kommentera ut härifrån till -->\n\n  <h2 class="intro-subtitle">Vad är Hospitality?</h2>\n  <h4 class="intro-text">Hospitality är en applikation där du med talnedsättning<br>kan uttrycka vad du känner, tycker och behöver hjälp med.</h4>\n  <h2 class="intro-subtitle-2">Hur fungerar det?</h2>\n  <h4 class="intro-text-2">Genom att navigera dig med hjälp av sido-menyn kan du<br>välja olika kategorier beroende på vad du vill säga. </h4>\n\n  <!-- Hit -->\n\n  <img class="hospital-logo" src="./assets/imgs/hospitality.png" />\n\n</ion-content>`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Languages; });
var Languages;
(function (Languages) {
    Languages["swe"] = "swe";
    Languages["eng"] = "eng";
})(Languages || (Languages = {}));
//# sourceMappingURL=language.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_write_own_text_write_own_text__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pain_view_pain_view__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_answerview_answerview__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bodyview_bodyview__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_need_view_need_view__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_want_to_know_view_want_to_know_view__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_show_list_item_show_list_item__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_kids_view_kids_view__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_category_items_category_items__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_sound_or_not_sound_or_not__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_translations_translations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_pipes_module__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_write_own_text_write_own_text__["a" /* WriteOwnTextPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pain_view_pain_view__["a" /* PainViewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_answerview_answerview__["a" /* AnswerviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bodyview_bodyview__["a" /* BodyviewPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_need_view_need_view__["a" /* NeedViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_want_to_know_view_want_to_know_view__["a" /* WantToKnowViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_show_list_item_show_list_item__["a" /* ShowListItemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_kids_view_kids_view__["a" /* KidsViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/answerview/answerview.module#AnswerviewPageModule', name: 'AnswerviewPage', segment: 'answerview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bodyview/bodyview.module#BodyviewPageModule', name: 'BodyviewPage', segment: 'bodyview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kids-view/kids-view.module#KidsViewPageModule', name: 'KidsViewPage', segment: 'kids-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/need-view/need-view.module#NeedViewPageModule', name: 'NeedViewPage', segment: 'need-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pain-view/pain-view.module#PainViewPageModule', name: 'PainViewPage', segment: 'pain-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-list-item/show-list-item.module#ShowListItemPageModule', name: 'ShowListItemPage', segment: 'show-list-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/want-to-know-view/want-to-know-view.module#WantToKnowViewPageModule', name: 'WantToKnowViewPage', segment: 'want-to-know-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/write-own-text/write-own-text.module#WriteOwnTextPageModule', name: 'WriteOwnTextPage', segment: 'write-own-text', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_write_own_text_write_own_text__["a" /* WriteOwnTextPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pain_view_pain_view__["a" /* PainViewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_answerview_answerview__["a" /* AnswerviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bodyview_bodyview__["a" /* BodyviewPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_need_view_need_view__["a" /* NeedViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_want_to_know_view_want_to_know_view__["a" /* WantToKnowViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_show_list_item_show_list_item__["a" /* ShowListItemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_kids_view_kids_view__["a" /* KidsViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_16__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_category_items_category_items__["a" /* CategoryItemsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pain_view_pain_view__["a" /* PainViewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_answerview_answerview__["a" /* AnswerviewPage */],
                __WEBPACK_IMPORTED_MODULE_18__providers_sound_or_not_sound_or_not__["a" /* SoundOrNotProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_translations_translations__["a" /* TranslationsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_write_own_text_write_own_text__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bodyview_bodyview__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_answerview_answerview__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_need_view_need_view__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_want_to_know_view_want_to_know_view__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_kids_view_kids_view__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sound_or_not_sound_or_not__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_translations_translations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_enums_language__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, SoundOrNotProvider, translationProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.SoundOrNotProvider = SoundOrNotProvider;
        this.translationProvider = translationProvider;
        this.soundOrNotVar = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.activePage = new __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__["Subject"]();
        this.Languages = __WEBPACK_IMPORTED_MODULE_14__assets_enums_language__["a" /* Languages */];
        this.languageSelector = __WEBPACK_IMPORTED_MODULE_14__assets_enums_language__["a" /* Languages */];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.activePageSubScriber = this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home', active: true },
            { title: 'ANSWER', component: __WEBPACK_IMPORTED_MODULE_7__pages_answerview_answerview__["a" /* AnswerviewPage */], icon: 'chatbubbles', active: false },
            { title: 'BODY', component: __WEBPACK_IMPORTED_MODULE_6__pages_bodyview_bodyview__["a" /* BodyviewPage */], icon: 'clipboard', active: false },
            { title: 'NEEDS', component: __WEBPACK_IMPORTED_MODULE_8__pages_need_view_need_view__["a" /* NeedViewPage */], icon: 'hand', active: false },
            { title: 'WANT_TO_KNOW', component: __WEBPACK_IMPORTED_MODULE_9__pages_want_to_know_view_want_to_know_view__["a" /* WantToKnowViewPage */], icon: 'school', active: false },
            { title: "KIDS", component: __WEBPACK_IMPORTED_MODULE_10__pages_kids_view_kids_view__["a" /* KidsViewPage */], icon: 'football', active: false },
            { title: 'FREE_TEXT', component: __WEBPACK_IMPORTED_MODULE_5__pages_write_own_text_write_own_text__["a" /* WriteOwnTextPage */], icon: 'brush', active: false }
        ];
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.activePageSubScriber.unsubscribe();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    MyApp.prototype.soundOrNot = function () {
        this.SoundOrNotProvider.SetSoundOnOff(this.soundOrNotVar);
    };
    MyApp.prototype.switchLanguage = function (language) {
        this.translationProvider.switchLanguage(language);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="darker-green">\n      <ion-title>\n        <h3 class="angleHeader">\n          <ion-icon name="medkit"></ion-icon>&nbsp;Hospitality\n          <ion-icon name="pulse"></ion-icon>\n        </h3>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose class="biggerButtonClass" [class.highlight]="p.active" ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title | translate}}\n      </button>\n      <hr id="settingMenuLine">\n    </ion-list>\n    <div class="settings">\n      <h4 id="settingsLabel">{{\'SETTINGS\' | translate}}</h4>\n      <ion-item>\n        <ion-label>{{\'AUDIO\' | translate}}</ion-label>\n        <ion-toggle checked="true" [(ngModel)]="soundOrNotVar" (click)="soundOrNot()"></ion-toggle>\n      </ion-item>\n      <h4 id="settingsLabel">{{\'LANGUAGE\' | translate}}</h4>  \n      <ion-item>\n        <button ion-button (click)="switchLanguage(languageSelector.swe)">{{\'SWEDISH\' | translate}}</button>\n        <button ion-button (click)="switchLanguage(languageSelector.eng)">{{\'ENGLISH\' | translate}}</button>\n      </ion-item>\n    </div>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__providers_sound_or_not_sound_or_not__["a" /* SoundOrNotProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_translations_translations__["a" /* TranslationsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_translate__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__translate_translate__["a" /* TranslatePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__translate_translate__["a" /* TranslatePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_translations_translations__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = (function () {
    function TranslatePipe(translationService) {
        this.translationService = translationService;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        return this.translationService.translate(value);
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_translations_translations__["a" /* TranslationsProvider */]])
    ], TranslatePipe);
    return TranslatePipe;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowListItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowListItemPage = (function () {
    function ShowListItemPage(navCtrl, navParams, alarmSound) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        this.displayListItem = "";
        this.displayListItem = navParams.get("itemToDisplay");
    }
    ShowListItemPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    ShowListItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-list-item',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/show-list-item/show-list-item.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Detta vill jag</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n       <span><ion-icon name="megaphone"></ion-icon></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="backgroundSetter">\n  <h1>{{displayListItem}}</h1>\n</ion-content>\n`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/show-list-item/show-list-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */]])
    ], ShowListItemPage);
    return ShowListItemPage;
}());

//# sourceMappingURL=show-list-item.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItemsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryItemsProvider = (function () {
    function CategoryItemsProvider() {
    }
    CategoryItemsProvider.prototype.fillListView = function (iconNames) {
        this.items = [];
        for (var i = 0; i < iconNames.length; i++) {
            this.items.push({
                title: iconNames[i]
            });
        }
        return this.items;
    };
    CategoryItemsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CategoryItemsProvider);
    return CategoryItemsProvider;
}());

//# sourceMappingURL=category-items.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundOrNotProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundOrNotProvider = (function () {
    function SoundOrNotProvider() {
        this.soundOrNot = true;
    }
    SoundOrNotProvider.prototype.SetSoundOnOff = function (onOff) {
        this.soundOrNot = onOff;
    };
    SoundOrNotProvider.prototype.GetSoundOnOff = function () {
        return this.soundOrNot;
    };
    SoundOrNotProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SoundOrNotProvider);
    return SoundOrNotProvider;
}());

//# sourceMappingURL=sound-or-not.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteOwnTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WriteOwnTextPage = (function () {
    function WriteOwnTextPage(navCtrl, navParams, alarmSound) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alarmSound = alarmSound;
        //timeStamp: string;
        this.messageArray = [];
        //this.timeStamp = new Date().toISOString();
    }
    WriteOwnTextPage.prototype.callHelp = function () {
        this.alarmSound.callHelp();
    };
    WriteOwnTextPage.prototype.deleteMessages = function (item) {
        var index = this.messageArray.indexOf(item);
        if (index !== -1) {
            this.messageArray.splice(index, 1);
        }
    };
    WriteOwnTextPage.prototype.sendMessage = function () {
        //this.timeStamp += " " + this.messageToArray;
        if (this.messageToArray != null && this.messageToArray != "") {
            this.messageArray.push(this.messageToArray);
        }
        if (this.messageArray.length > 5) {
            this.messageArray = [];
            this.messageArray.push(this.messageToArray);
        }
        this.messageToArray = "";
    };
    WriteOwnTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-write-own-text',template:/*ion-inline-start:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/write-own-text/write-own-text.html"*/`<ion-header no-border>\n  <ion-navbar transparent padding>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Fritext</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="this.callHelp()">\n        <span>\n          <ion-icon name="megaphone"></ion-icon>\n        </span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundSetter">\n  <h1 class="infoText">Förmedla det du vill få sagt genom fritext</h1>\n  <hr class="whiteLine">\n  <ion-list *ngFor="let item of messageArray.slice().reverse()">\n    <div *ngIf="messageArray.length > 0">\n      <button ion-button icon-only (click)="deleteMessages(item)" class="emptyButton" color="danger">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </div>\n    <ion-item class="messageClass" text-wrap>\n      <h2 class="messageText">{{item}}</h2>\n    </ion-item>\n  </ion-list>\n  <ion-grid bottom>\n    <ion-row class="textInputAndSendButton">\n      <ion-col col-10>\n        <ion-item class="inputField">\n          <ion-input type="text" [(ngModel)]="messageToArray" placeholder="Skriv text..."></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button round (click)="this.sendMessage()" id="sendButton">Skicka</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/nicholasflod/Documents/Programmering/Hospitality/src/pages/write-own-text/write-own-text.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alarm_sound_alarm_sound__["a" /* AlarmSoundProvider */]])
    ], WriteOwnTextPage);
    return WriteOwnTextPage;
}());

//# sourceMappingURL=write-own-text.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map