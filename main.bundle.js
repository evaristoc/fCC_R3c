webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 d-flex justify-content-center about\" style=\"padding-top:3em;background: #eee\">\n    <div class=\"col-md-6\">\n        <h2>Why use FreeCodeCamp review?</h2>\n        <p>There are million of resources available to learn to code.</p>\n        <p>\n            Save yourself some time and filter through the resources that FreeCodeCampers reviewed to figure out the best platforms for your optimum learning experience.</p>\n        <h5>About</h5>\n        <p>This project is a list of more than 1000 links mentioned in the freeCodeCamp social media, classified according to the purpose of the link (eg. tutorial? forum? etc.) and ranked according to their relevance to the subjects of the freeCodeCamp\n            curriculum (currently <a href='https://beta.freecodecamp.com/en/map'>beta</a>). The project has been led by evaristoc (Github) with invaluable contributions from sandra-dudley (Github) and other Chingu/fCC students.</p>\n        <p><b>This is a demo page</b>. Find more details about the project at the <a href='https://github.com/evaristoc/fCC_R3'>project repository</a>.</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform_component__ = __webpack_require__("../../../../../src/app/platform/platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testingservices_testingservices_component__ = __webpack_require__("../../../../../src/app/testingservices/testingservices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainbody_mainbody_component__ = __webpack_require__("../../../../../src/app/mainbody/mainbody.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__mainbody_mainbody_component__["a" /* MainbodyComponent */] },
    { path: 'platform/:selection', component: __WEBPACK_IMPORTED_MODULE_3__platform_platform_component__["a" /* PlatformComponent */] },
    { path: 'testingservices', component: __WEBPACK_IMPORTED_MODULE_4__testingservices_testingservices_component__["a" /* TestingservicesComponent */] },
    //{path: '*', component: MainbodyComponent}
    { path: '', redirectTo: '/mainbody', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n        <app-nav></app-nav>\n        <router-outlet></router-outlet>\n        <app-about></app-about>\n        <app-footer></app-footer>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__ = __webpack_require__("../../../../ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebaseserv_firebasedb_service__ = __webpack_require__("../../../../../src/app/firebaseserv/firebasedb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elasticlunrserv_elasticlunr_service__ = __webpack_require__("../../../../../src/app/elasticlunrserv/elasticlunr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_form_search_form_component__ = __webpack_require__("../../../../../src/app/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_elasticlunr__ = __webpack_require__("../../../../ngx-elasticlunr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__platform_platform_component__ = __webpack_require__("../../../../../src/app/platform/platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mainbody_mainbody_component__ = __webpack_require__("../../../../../src/app/mainbody/mainbody.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_maxlengthdoc_pipe__ = __webpack_require__("../../../../../src/app/pipes/maxlengthdoc.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__testingservices_testingservices_component__ = __webpack_require__("../../../../../src/app/testingservices/testingservices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_platsorderby_pipe__ = __webpack_require__("../../../../../src/app/pipes/platsorderby.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//setting for angularfire2: see https://github.com/angular/angularfire2
//see also:
//-- https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
//-- https://stackoverflow.com/questions/40856179/custom-authdomain-in-firebase




//-- https://www.npmjs.com/package/ng2-scroll-to


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__search_form_search_form_component__["a" /* SearchFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__platform_platform_component__["a" /* PlatformComponent */],
            __WEBPACK_IMPORTED_MODULE_20__mainbody_mainbody_component__["a" /* MainbodyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pipes_maxlengthdoc_pipe__["a" /* MaxlengthdocPipe */],
            __WEBPACK_IMPORTED_MODULE_23__testingservices_testingservices_component__["a" /* TestingservicesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_platsorderby_pipe__["a" /* PlatsOrderbyPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__["ScrollToModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ngx_elasticlunr__["a" /* NgxElasticlunrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__firebaseserv_firebasedb_service__["a" /* FirebasedbService */], __WEBPACK_IMPORTED_MODULE_11__elasticlunrserv_elasticlunr_service__["a" /* ElasticlunrService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/elasticlunrserv/elasticlunr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticlunrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElasticlunrService = (function () {
    function ElasticlunrService() {
        this.elObj = new elasticlunr(function () {
            this.addField('suburls');
            this.setRef('suburlsid');
            this.saveDocument(true);
        });
    }
    ElasticlunrService.prototype.getDocuments = function (par, i) {
        if (par !== null) {
            this.elObj.addDoc({
                'suburls': par.replace(/\W|\d/ig, ' '),
                //'suburls' : 'adfgart;logn',
                'suburlsid': i
            });
        }
    };
    ;
    ElasticlunrService.prototype.getRanking = function (filterer) {
        //let filterer ;
        var that = this;
        console.log("THIS IS filterer inside service getRanking", filterer);
        console.log("I am elObj ", this.elObj);
        //console.log(this.elObj.search);
        console.log("THIS IS THE SEARCH OF elObj in service getRanking", this.elObj.search("react", { "fields": { "suburls": { "boost": 1 } } }));
        //console.log("THIS IS THE SEARCH OF elObj", this.elObj.search("JavaScript")); 
        console.log("getRanking is Empty but ", this.elObj.documentStore, ' shows...');
        if (this.elObj.search("react", { "fields": { "suburls": { "boost": 1 } } }) == []) {
            console.log("getRanking is Empty but ", this.elObj, ' shows...');
        }
    };
    ElasticlunrService.prototype.deleteDocuments = function (platform, bla) {
        if ("params" in Object.keys(platform)) {
            console.log(platform["params"]);
            //for (let inddoc = 0; inddoc < this.platform.params.length; inddoc++){
            //  this.elObj.removeDoc(inddoc)
            //}
        }
        else {
            for (var inddoc = 0; inddoc < bla; inddoc++) {
                this.elObj.removeDoc(inddoc);
            }
        }
    };
    return ElasticlunrService;
}());
ElasticlunrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ElasticlunrService);

//# sourceMappingURL=elasticlunr.service.js.map

/***/ }),

/***/ "../../../../../src/app/firebaseserv/firebasedb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebasedbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Category} from '../models/Category';
var FirebasedbService = (function () {
    function FirebasedbService(db) {
        this.db = db;
        this.platforms = this.db.list('/platformstable', { query: { limitToFirst: 400 } }); //,{query:{limitToFirst:200}}
    }
    FirebasedbService.prototype.getCategories = function () {
        this.categories = this.db.list('/plt_categories');
        return this.categories;
    };
    ;
    FirebasedbService.prototype.getSubjects = function () {
        this.subjects = this.db.list('/fcc_subjects');
        return this.subjects;
    };
    FirebasedbService.prototype.getUserurls = function () {
        this.userslist = this.db.list('/users');
        return this.userslist;
    };
    FirebasedbService.prototype.getItem = function (id) {
        return this.db.list('/platformstable/' + id);
    };
    //getPlatforms() {
    //    var message;
    //    this.platforms.push(message); 
    //}
    //  getItemsByCategory(cat:string){
    //      console.log(cat);
    //     let selplats = [];
    //     this.platforms.forEach((plat) => {
    //       plat.forEach((platdetails) => {
    //         Object.keys(platdetails).forEach((platdetailskey) => {
    //           var platdetailsvalues = platdetails[platdetailskey]; 
    //           if(platdetailsvalues.category === cat){
    //             var relevance = 1;
    //             var prevalence = 1;
    //             var ranking = 1;
    //             if (typeof platdetails.subjects != 'undefined') {
    //               selplats.push([platdetailsvalues.origurl, platdetailsvalues.title, platdetailsvalues.category, relevance, prevalence, ranking, platdetails.$key, platdetailsvalues.category]);
    //             }
    //           }
    //         })
    //       })
    //     selplats = selplats.slice(10);
    //     selplats = selplats.sort((a,b)=> {
    //       if (a[4]<b[4]) {
    //         return 1
    //       } else if (a[4]>b[4]) {
    //         return -1
    //       } 
    //       return 0
    //     })
    //     return selplats
    //   })
    //     //this.platforms.forEach((plat)=>{for(let ix; ix < plat.length; ix++){}})
    //  }
    FirebasedbService.prototype.getTexts = function () {
        this.texts = this.db.list('/textstable');
        return this.texts;
    };
    return FirebasedbService;
}());
FirebasedbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebasedbService);

var _a;
//# sourceMappingURL=firebasedb.service.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #eee;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">\n      Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>️ for chingu\n    </span>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainbody/mainbody.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainbody/mainbody.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <!--<ul>\n    <li class=\"text\" *ngFor=\"let item of items | async\">\n        {{item.$value}}\n    </li>\n</ul>\n\n<h1>{{ (categories | async)?.categories }}</h1>-->\n\n        <app-search-form></app-search-form>\n\n"

/***/ }),

/***/ "../../../../../src/app/mainbody/mainbody.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainbodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainbodyComponent = (function () {
    function MainbodyComponent() {
    }
    MainbodyComponent.prototype.ngOnInit = function () {
    };
    return MainbodyComponent;
}());
MainbodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mainbody',
        template: __webpack_require__("../../../../../src/app/mainbody/mainbody.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainbody/mainbody.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainbodyComponent);

//# sourceMappingURL=mainbody.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav h1 {\n    font-size: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <h1>\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n        FreeCodeCamp Review\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    </h1>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/maxlengthdoc.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxlengthdocPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaxlengthdocPipe = (function () {
    function MaxlengthdocPipe() {
    }
    MaxlengthdocPipe.prototype.transform = function (doc, howMany) {
        if (doc.length >= howMany) {
            return doc.substring(0, howMany) + "...";
        }
        else {
            return doc;
        }
    };
    return MaxlengthdocPipe;
}());
MaxlengthdocPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'maxlengthdoc'
    })
], MaxlengthdocPipe);

//# sourceMappingURL=maxlengthdoc.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/platsorderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatsOrderbyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlatsOrderbyPipe = (function () {
    function PlatsOrderbyPipe() {
    }
    PlatsOrderbyPipe.prototype.transform = function (selplats, subj) {
        return selplats.sort(function (a, b) {
            //if(a[subj]*a['rf']/11 > b[subj]*b['rf']/11){
            if (a[subj] > b[subj]) {
                return -1;
            }
            else if (a[subj] < b[subj]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    return PlatsOrderbyPipe;
}());
PlatsOrderbyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'platsorderBy'
    })
], PlatsOrderbyPipe);

//# sourceMappingURL=platsorderby.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/platform/platform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\n    overflow: hidden;\n    width: 100%;\n}\n\n.slides {\n    list-style: none;\n    position: relative;\n    width: 500%;\n    /* Number of panes * 100% */\n    overflow: hidden;\n    /* Clear floats */\n    /* Slide effect Animations*/\n    -webkit-animation: carousel 30s infinite;\n    animation: carousel 30s infinite;\n}\n\n.slides>li {\n    position: relative;\n    float: left;\n    width: 20%;\n    /* 100 / number of panes */\n}\n\n.carousel img {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    height: 200px;\n}\n\n.carousel h2 {\n    /*margin-bottom: 0;*/\n    font-size: 2em;\n    padding: 0.5em 0.5em 4.5em 0.5em;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    text-align: center;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.75);\n    text-transform: uppercase;\n}\n\n.carousel p {\n    /*margin-bottom: 0;*/\n    font-size: 1em;\n    padding: 1.5em 0.5em 1.5em 0.5em;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    text-align: center;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n@-webkit-keyframes carousel {\n    0% {\n        left: -5%;\n    }\n    11% {\n        left: -5%;\n    }\n    12.5% {\n        left: -105%;\n    }\n    23.5% {\n        left: -105%;\n    }\n    25% {\n        left: -205%;\n    }\n    36% {\n        left: -205%;\n    }\n    37.5% {\n        left: -305%;\n    }\n    48.5% {\n        left: -305%;\n    }\n    50% {\n        left: -405%;\n    }\n    61% {\n        left: -405%;\n    }\n    62.5% {\n        left: -305%;\n    }\n    73.5% {\n        left: -305%;\n    }\n    75% {\n        left: -205%;\n    }\n    86% {\n        left: -205%;\n    }\n    87.5% {\n        left: -105%;\n    }\n    98.5% {\n        left: -105%;\n    }\n    100% {\n        left: -5%;\n    }\n}\n\n@keyframes carousel {\n    0% {\n        left: -5%;\n    }\n    11% {\n        left: -5%;\n    }\n    12.5% {\n        left: -105%;\n    }\n    23.5% {\n        left: -105%;\n    }\n    25% {\n        left: -205%;\n    }\n    36% {\n        left: -205%;\n    }\n    37.5% {\n        left: -305%;\n    }\n    48.5% {\n        left: -305%;\n    }\n    50% {\n        left: -405%;\n    }\n    61% {\n        left: -405%;\n    }\n    62.5% {\n        left: -305%;\n    }\n    73.5% {\n        left: -305%;\n    }\n    75% {\n        left: -205%;\n    }\n    86% {\n        left: -205%;\n    }\n    87.5% {\n        left: -105%;\n    }\n    98.5% {\n        left: -105%;\n    }\n    100% {\n        left: -5%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/platform/platform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\n    <div class=\"jumbotron\" style=\"background:#555555 !important; color:white\">\n        <div class=\"container-fluid text-left\">\n            <h1>{{platformdet.origurl}}</h1>\n            <h2>{{platformdet.title}}</h2>\n            <p>{{platformdet.description}}</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid text-left\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3>Other {{platformdet.origurl}} links about</h3>\n            <h4><b>{{selsubject.toUpperCase()}}</b></h4>\n            <h3>that might interest you</h3>\n            <!--<ul>\n            <li *ngFor=\" let obj of elObj.search(Elquery, { 'fields': { 'suburls': { 'boost': 1 } } }).slice(5) \"><a href=\"# \"> {{obj.doc.suburls}} {{ obj.doc.docurl }}</a></li>\n        </ul>-->\n            <ul *ngIf=\"elObj.search(Elquery, { 'fields': { 'suburls': { 'boost': 1 } } }).length > 0\">\n                <li *ngFor=\"let obj of elObj.search(Elquery, { 'fields': { 'suburls': { 'boost': 1 } } })\" [value]=\"Elquery\"><a href=\"# \"> {{ obj.doc.docurl }}</a></li>\n            </ul>\n            <ul *ngIf=\"elObj.search(Elquery, { 'fields': { 'suburls': { 'boost': 1 } } }).length == 0\">\n                <li><b>Sorry... our algorithm found no specific relevant match for your subject selection</b></li>\n            </ul>\n        </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n        <div class=\"card card col-md-6 col-lg-4\">\n\n            <form>\n                <div class=\"form-group\">\n                    <p><b><i>Want to filter by different subject?</i></b></p>\n                    <select name=\"subjects\" class=\"form-control\" #t (change)=\"myMethodChangingQueryParams(t.value)\">\n                            <option *ngFor=\"let subj of subjectOptions\" [value]=\"subj.subject\">{{subj.subject}}</option>\n        </select>\n                </div>\n            </form>\n        </div>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">{{platformdet.origurl}} links</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n            </div>\n            <div class=\"modal-body\">\n                <ul>\n                    <li *ngFor=\"let link of toArray(elObj.documentStore.docs); let i = index\"><a href=\"http://{{platformdet.origurl}}{{link.docurl}}\">{{link.docurl}}</a></li>\n                </ul>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n            </div>\n        </ng-template>\n\n        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">See all the links</button>\n\n        <hr>\n\n        <!--<pre>{{closeResult}}</pre>-->\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h2>See other platforms in the same category</h2>\n            <p>Here, a <b>carrousel</b> of other platforms of similar CATEGORY : {{platformdet.category}}</p>\n            <div class=\"carousel\">\n                <div class=\"container fill\">\n                    <ul class=\"slides\">\n\n                        <li class='item' *ngFor=\"let similar of similars\" style=\"text-align:center;color:green;\">\n                            <h2>{{similar}}</h2>\n                            <img class=\"first-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\">\n                            <!--<img src=\"{{image.url}}\" alt=\"\">-->\n                            <p><i></i></p>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h2>People that mentioned this link also mentioned these ones...</h2>\n            <p>Here, a <b>carrousel</b> of a (random?) selection of platforms recommended by the people who mentioned this platform</p>\n            <div class=\"carousel\">\n                <div class=\"container fill\">\n                    <ul class=\"slides\">\n\n                        <li class='item' *ngFor=\"let other of listofothers\" style=\"text-align:center;color:green;\">\n                            <h2>{{other}}</h2>\n                            <img class=\"first-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\">\n                            <!--<img src=\"{{image.url}}\" alt=\"\">-->\n                            <p><i></i></p>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/platform/platform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebaseserv_firebasedb_service__ = __webpack_require__("../../../../../src/app/firebaseserv/firebasedb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elasticlunrserv_elasticlunr_service__ = __webpack_require__("../../../../../src/app/elasticlunrserv/elasticlunr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlatformComponent = (function () {
    function PlatformComponent(route, router, db, elunr, modalService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.db = db;
        this.elunr = elunr;
        this.modalService = modalService;
        this.platarr = [];
        this.pl = [];
        this.itemsByCategory = ['Nothing to report'];
        this.subjectOptions = [{ name: "NOTHING" }];
        this.subj = '';
        //  something
        //   private getPromise ( h ){
        //      return new Promise( ( res, rej )=>{
        //        if( h ){
        //          res( h )
        //         }
        //       })
        //     }
        // bb(f, h){
        //   this.something = f(h)
        // }
        this.testData = [
            { platform: 'www.example.com', category: 'thiscategory', description: 'sum dolor sit amet, consectetur adipiscing elit, sed' },
        ];
        this.images = IMAGES;
        this.elObj = new elasticlunr(function () {
            this.addField('suburls');
            this.addField('docurl');
            this.setRef('suburlsid');
            this.saveDocument(true);
        });
        this.fireb_subjects$ = this.db.getSubjects();
        //fireb_subjects$.subscribe((subjs) => {console.log(subjs); return this.subjectOptions = subjs[0].map((subjs, i) => {return {subject:subjs[1], id:i+1}},[])});  
        //this.getItByCat = this.db.getItemsByCategory;
        this.selPlatforms = this.db.platforms;
        //console.log("selPlatforms", this.selPlatforms)
        var fireb_subjects$ = this.db.getSubjects();
        fireb_subjects$.subscribe(function (subjs) { console.log(subjs); return _this.subjectOptions = subjs[0].map(function (subjs, i) { return { subject: subjs[1], query: subjs[2].toString().replace(/,/g, " | "), id: i + 1 }; }, []); });
    }
    //https://stackoverflow.com/questions/34761224/angular2-child-property-change-not-firing-update-on-bound-property
    //https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
    //http://embed.plnkr.co/DHLVc0
    //https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-finding-and-retrieving-entries
    //http://www.advancesharp.com/blog/1211/angular-2-search-and-sort-with-ngfor-repeater-with-example
    PlatformComponent.prototype.ngOnInit = function () {
        var _this = this;
        var qparam;
        this.route.queryParams.take(1).subscribe(function (qprm) { qparam = qprm["selsubject"]; });
        //console.log(qparam)
        //console.log("subjectOptions", this.subjectOptions)
        this.selsubject = qparam;
        this.fireb_subjects$.subscribe(function (subjs) { return _this.Elquery = subjs[0].filter(function (subjs, i) { return subjs[1] === qparam; }, [])[0][2].toString().replace(/,/g, " | "); }).unsubscribe();
        this.route.params.take(1).subscribe(function (param) { _this.key = param["selection"]; });
        //key = 'addons--mozilla--org'
        this.db.getItem(this.key).forEach(function (platdetails) {
            platdetails.forEach(function (platdetobj) {
                if (platdetobj.$key !== 'subjects') {
                    //console.log(platdetobj);
                    _this.platformdet = platdetobj;
                    _this.similars = _this.platformdet.similars.map(function (sp) { return sp.replace(/--/g, '.'); });
                    _this.listofothers = _this.platformdet.listofothers.map(function (op) { return op.replace(/--/g, '.'); });
                    //this.itemsByCategory = this.gIBCClosure(platdetobj.category, this.selPlatforms);
                    //console.log("finding nemo",this.getItemsByCategory(platdetobj.category, this.selPlatforms))
                    //this.db.platforms.forEach((x)=>{x.forEach((xs,i)=>{console.log(this.itemsByCategory.push(i)); this.itemsByCategory.push(i); this.bb(this.getPromise,this.itemsByCategory.push(i))})})
                    _this.lg = platdetobj.params.length;
                    for (var ixp = 0; ixp < _this.lg; ixp++) {
                        _this.loadElList(platdetobj.params[ixp], ixp);
                    }
                }
            });
        });
        //console.log(this.item) //this.item outside the function is read before and doesn't work!
        //this.getItemsByCategory("api|package|framework|librar|stack|licens|addon|app", this.db.platforms.forEach((x)=>{console.log(x)}))  
    };
    PlatformComponent.prototype.myMethodChangingQueryParams = function (subj) {
        var _this = this;
        console.log("subject in myMethodChangingQueryParams", subj);
        // Object.assign is used as apparently 
        // you cannot add properties to snapshot query params
        var queryParams = Object.assign({}, this.route.snapshot.queryParams);
        // Do sth about the params
        queryParams['selsubject'] = subj;
        this.router.navigate(['./platform', this.key], { queryParams: queryParams });
        //let qparam: string;
        //this.route.queryParams.take(1).subscribe((qprm)=>{qparam = qprm["selsubject"]});
        this.selsubject = subj;
        this.fireb_subjects$.subscribe(function (subjs) { return _this.Elquery = subjs[0].filter(function (subjs, i) { return subjs[1] === _this.selsubject; }, [])[0][2].toString().replace(/,/g, " | "); }).unsubscribe();
    };
    PlatformComponent.prototype.elQuery = function (sq) {
        return sq.toString().replace(/,/g, " | ");
    };
    PlatformComponent.prototype.elSearch = function (sq) {
    };
    PlatformComponent.prototype.loadElList = function (par, i) {
        //console.log(this.elObj.documentStore.docs);
        if (par !== null) {
            this.elObj.addDoc({
                'suburls': par.replace(/\W|\d/ig, ' '),
                'docurl': par,
                //'suburls' : 'adfgart;logn',
                'suburlsid': i
            });
        }
    };
    PlatformComponent.prototype.toArray = function (obj) {
        return Object.keys(obj).map(function (x) { return obj[x]; });
    };
    PlatformComponent.prototype.showElList = function (filterer) {
        //let filterer ;
        console.log("THIS IS filterer inside showELlist", filterer);
        console.log(this.elObj);
        //console.log(this.elObj.search);
        console.log("THIS IS THE SEARCH OF elObj", this.elObj.search("react", { "fields": { "suburls": { "boost": 1 } } }));
        //console.log("THIS IS THE SEARCH OF elObj", this.elObj.search("JavaScript"));
    };
    PlatformComponent.prototype.deleteElList = function () {
        if ("params" in Object.keys(this.platformdet)) {
            console.log(this.platformdet["params"]);
            //for (let inddoc = 0; inddoc < this.platform.params.length; inddoc++){
            //  this.elObj.removeDoc(inddoc)
            //}
        }
        else {
            for (var inddoc = 0; inddoc < this.lg; inddoc++) {
                this.elObj.removeDoc(inddoc);
            }
        }
    };
    PlatformComponent.prototype.getItemsByCategory = function (cat, selPlatforms) {
        console.log(cat, selPlatforms);
        var selplats = [];
        selPlatforms.forEach(function (plat) {
            plat.forEach(function (platdetails) {
                Object.keys(platdetails).forEach(function (platdetailskey) {
                    var platdetailsvalues = platdetails[platdetailskey];
                    if (platdetailsvalues.category === cat) {
                        var relevance = 1;
                        var prevalence = 1;
                        var ranking = 1;
                        if (typeof platdetails.subjects != 'undefined') {
                            selplats.push([platdetailsvalues.origurl, platdetailsvalues.title, platdetailsvalues.category, relevance, prevalence, ranking, platdetails.$key, platdetailsvalues.category]);
                        }
                    }
                });
            });
            selplats = selplats.slice(10);
            selplats = selplats.sort(function (a, b) {
                if (a[4] < b[4]) {
                    return 1;
                }
                else if (a[4] > b[4]) {
                    return -1;
                }
                return 0;
            });
            return selplats;
        });
    };
    PlatformComponent.prototype.gIBCClosure = function (a, b) {
        return this.getItemsByCategory(a, b);
    };
    PlatformComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PlatformComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PlatformComponent.prototype.ngOnDestroy = function () {
        //this.plat.unsubscribe()
        //this.subscription.unsubscribe();
        this.deleteElList();
        //this.elunr.deleteDocuments(this.item, this.lg)
    };
    return PlatformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlatformComponent.prototype, "Elquery", void 0);
PlatformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-platform',
        template: __webpack_require__("../../../../../src/app/platform/platform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/platform/platform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__firebaseserv_firebasedb_service__["a" /* FirebasedbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__firebaseserv_firebasedb_service__["a" /* FirebasedbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__elasticlunrserv_elasticlunr_service__["a" /* ElasticlunrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__elasticlunrserv_elasticlunr_service__["a" /* ElasticlunrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _e || Object])
], PlatformComponent);

//IMAGES array implementing Image interface
var IMAGES = [
    { platform: 'www.example.com', category: 'thiscategory', description: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { platform: 'www.anotherexample.com', category: 'thiscategory', description: 'od tempor incididunt ut labore' },
    { platform: 'www.otherexample.com', category: 'thiscategory', description: 'natus error sit voluptatem accusantium doloremque laudantium' },
    { platform: 'www.andthenmore.com', category: 'thiscategory', description: 'quaerat voluptatem' },
    { platform: 'www.andfinallythis.com', category: 'thiscategory', description: 'cillum dolore eu fugiat nulla pariatur' },
];
var _a, _b, _c, _d, _e;
//# sourceMappingURL=platform.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".moreButton a {\n    height: 100%;\n    background: #eee;\n    color: #000;\n    display:block;\n    transition: all 0.5s ease;\n}\n.moreButton a:after {\n    content: '\\F105';\n    font-family: 'FontAwesome';\n    font-size:3em;\n}\n\n.moreButton a:hover {\n    text-decoration:none;\n    background: #aaa;\n    color: #fff;\n}\n\n.resultList {\n    margin-bottom:1em;\n    border-bottom: #eee solid 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__ = __webpack_require__("../../../../../src/app/firebaseserv/firebasedb.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(db) {
        this.db = db;
        //public platforms : FirebaseListObservable<any>;
        //@Input('selectedsubj') selectedsubj: string;
        this.title = "You chose";
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainSearch {\n    min-height: 100vh;\n\n}\n.card {\n    padding: 1em;\n    margin: 2em 0em;\n}\n.about {\n    margin: 3em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <div class=\"col-12\" style=\"padding:0\">\n        <div class=\"col-12 d-flex justify-content-center align-items-center mainSearch\">\n            <div class=\"col-md-6 row\" style=\"background: rgba(255,255,255,0.5); padding:1em; border-radius: 3px\">\n                <h1>Find the best resources and start coding today</h1>\n                <p>Select what and how you want to learn, and read what fellow programmers think of the resources available.</p>\n\n                <div class=\"card col-12\">\n\n                    <form>\n                        <div class=\"form-group\">\n                            <h3>What subject(s) interest you? </h3>\n                            <select name=\"subjects\" class=\"form-control\" [(ngModel)]=\"subj\">\n                            <option *ngFor=\"let subj of subjectOptions\" [ngValue]=\"subj\">{{subj.subject}}</option>\n        </select>\n                        </div>\n                    </form>\n                    (ngModelChange)=\"onChangeSubject($event)\"\n                    <p>your selection : {{subj.subject}}</p>\n                    <!--<p>{{subjectOptions}}</p>-->\n                </div>\n\n                <!--\n<h3>Platforms</h3>\n<ul>\n    <li class=\"text\" *ngFor=\"let platform of platforms | async\">\n        {{platform}}\n    </li>\n</ul>\n-->\n            </div>\n        </div>\n    </div>\n</div>\n<!--<div id=\"resultDiv\"></div>-->\n<!--<app-results [selectedsubj]=\"subj.name\"></app-results>-->\n<!--<app-results [selectedsubj]=\"subj.subject\" *ngIf=\"subj.subject\" [@myAnimation]></app-results>\n<ng-content></ng-content>-->\n<div id=\"resultDiv\"></div>\n<div *ngIf=\"subj.subject\" [@myAnimation]>\n    <!--<div *ngIf=\"subj.subject\">-->\n    <div class=\"col-12\" style=\"margin-top:3em;\">\n        <h2>Platforms for <span class=\"badge badge-pill badge-default\">\n                    {{subj.subject}}\n                </span></h2>\n    </div>\n    <div class=\"col-12 d-flex justify-content-center about\" id=\"{subj.subject}\" style=\"margin-bottom:3em; text-align:left\">\n\n        <div class=\"col-md-8\" style=\"padding:1em; background: #eee\">\n            <h3>Filter by:</h3>\n            <p>\n                <button *ngFor=\"let cat of catOptions\" class=\"btn mb-3 mr-3\" [ngClass]=\"selectedCat(cat) ? 'btn-success' : 'btn-danger'\" (click)=\"toggleCat(cat)\">{{cat.category}}, {{cat.isActive}}\n                </button>\n            </p>\n        </div>\n\n    </div>\n\n    <div style=\"margin-top: 20px\" *ngIf=\"myform\">\n        <div>Form details:-</div>\n        <pre>Is form submitted?: <br>{{myform.submitted | json}}</pre>\n        <pre>submitted value: <br>{{myform.value | json}}</pre>\n\n    </div>\n\n    <div class=\"col-12 d-flex justify-content-center flex-wrap\">\n        <div class=\"col-md-8\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>\n                            Platform\n                        </th>\n                        <th>\n                            Action\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <!--https://stackoverflow.com/questions/35158817/angular-2-orderby-pipe-->\n                    <ng-container *ngFor=\"let objdetails of selplats | platsorderBy:subj.subject\">\n                        <!--<p hidden=\"{selection[-1]}\"> {{selection}}</p>-->\n                        <!--<p *ngIf=\"outputR(catOptions, selection)\"> {{selection[0]}}, {{selection[selection.length - 1]}}</p>-->\n                        <tr *ngIf=\"outputR(catOptions, objdetails)\">\n                            <td class=\"text-left\"><strong>{{objdetails.origurl?(objdetails.origurl|maxlengthdoc:50):('')}}</strong><br/><span class=\"badge badge-default\">{{objdetails.title?(objdetails.title|maxlengthdoc:50):('')}}</span> <span class=\"badge badge-success\">{{objdetails.c}}</span>                                </td>\n                            <td class=\"text-left\">\n                                <a [routerLink]=\"['/platform/',objdetails.$key]\" [queryParams]=\"{selsubject:subj.subject} \" routerLinkActive=\"active \" class=\"btn btn-primary \">\n                            More info\n                        </a></td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__ = __webpack_require__("../../../../../src/app/firebaseserv/firebasedb.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// from https://github.com/softsimon/angular-2-dropdown-multiselect
//import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts   } from 'angular-2-dropdown-multiselect';
//https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
//https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html
//OJO: check the use of Enums https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/
var SearchFormComponent = (function () {
    function SearchFormComponent(db) {
        var _this = this;
        this.db = db;
        this.showSubjectSection = false;
        this.subjectOptions = [{ name: "NOTHING" }];
        this.subj = '';
        this.selplats = [];
        this.catOptions = [];
        var fireb_subjects$ = this.db.getSubjects();
        fireb_subjects$.subscribe(function (subjs) { console.log(subjs); return _this.subjectOptions = subjs[0].map(function (subjs, i) { return { subject: subjs[1], id: i + 1 }; }, []); });
        var fireb_categories$ = this.db.getCategories();
        fireb_categories$.forEach(function (cats) { cats[0].forEach(function (c) { _this.catOptions.push({ category: c, isActive: true }); }); });
        this.selPlatforms = this.db.platforms;
    }
    ;
    SearchFormComponent.prototype.ngOnInit = function () {
        console.log("subjectOptions in ngOnInit, searchform ", this.subjectOptions);
        this.subjectModel = this.subjectOptions[0];
        console.log("categoryOptionslist in ngOnInit, searchform ", this.catOptions);
        this.selectedCat(this.catOptions);
        this.setResults(this.catOptions, console.log);
        console.log(this.selPlatforms);
    };
    SearchFormComponent.prototype.toggleCat = function (category) {
        var cat = this.catOptions.filter(function (cats) {
            if (cats.category === category.category) {
                return cats;
            }
        })[0];
        if (cat.isActive === true) {
            this.catOptions[this.catOptions.indexOf(cat)].isActive = false;
            return;
        }
        else {
            this.catOptions[this.catOptions.indexOf(cat)].isActive = true;
            return;
        }
    };
    SearchFormComponent.prototype.selectedCat = function (category) {
        return this.catOptions.filter(function (cats) {
            if (cats.category === category.category) {
                return cats.isActive;
            }
        })[0];
    };
    //https://github.com/angular/angularfire2/issues/558
    //https://stackoverflow.com/questions/39795634/angular-2-change-detection-and-changedetectionstrategy-onpush/39802466#39802466
    SearchFormComponent.prototype.setResults = function (filterset_result_dropdown, callback) {
        var _this = this;
        //callback(filterset_result_dropdown);
        console.log("FILTERER in setResult", filterset_result_dropdown); //OUTPUT: FILTERER in setResult undefined and stop reading for SUBJECTS, but read for CATEGORIES
        this.selplats = [];
        this.selPlatforms.forEach(function (plat) {
            plat.forEach(function (platdetails) {
                var objdetails = {};
                Object.keys(platdetails).forEach(function (platdetailskey) {
                    var platdetailsvalues = platdetails[platdetailskey];
                    if (platdetailsvalues.category) {
                        var relevance = 1;
                        var prevalence = 1;
                        var ranking = 1;
                        //console.log(platdetailsvalues);
                        if (relevance > 0 && typeof platdetails.subjects != 'undefined') {
                            //platdetailsvalues.category = typeof platdetailsvalues.category === 'object'? platdetailsvalues.category[0]:platdetailsvalues.category;
                            //this.selplats.push([platdetailsvalues.origurl, platdetailsvalues.title, platdetailsvalues.category_regex, relevance, prevalence, ranking, platdetails.$key, platdetailsvalues.category, platdetailsvalues.crawlstatus]);
                            //this.selplats.push({origurl:platdetailsvalues.origurl, title:platdetailsvalues.title, cat:platdetailsvalues.category_regex, $key:platdetails.$key});
                            //console.log("title", platdetailsvalues.category)
                            objdetails['origurl'] = platdetailsvalues.origurl;
                            if (platdetailsvalues.title) {
                                if ((platdetailsvalues.title !== 'noinformationfound') && (platdetailsvalues.title !== '403 Forbidden') && (platdetailsvalues.title !== 'Login') && (!platdetailsvalues.title.match(/4|5/))) {
                                    objdetails['title'] = platdetailsvalues.title;
                                }
                                else {
                                    objdetails['title'] = '';
                                }
                                ;
                            }
                            ;
                            objdetails['cat'] = platdetailsvalues.category_regex;
                            objdetails['c'] = platdetailsvalues.category;
                            objdetails['$key'] = platdetails.$key;
                            //console.log(platdetailsvalues['requency-recency'])
                            if (platdetailsvalues['frequency-recency']) {
                                objdetails['rf'] = (platdetailsvalues['frequency-recency'].length) > 1 ? platdetailsvalues['frequency-recency'][1] : 1;
                            }
                            else {
                                objdetails['rf'] = 1;
                            }
                            ;
                        }
                        ;
                    }
                    if (platdetailskey === 'subjects') {
                        //console.log(platdetails[platdetailskey])
                        //   Object.keys(platdetails[platdetailskey]).map((shadowk)=>{
                        //     Object.keys(platdetails[platdetailskey][shadowk]).forEach((cat)=>{
                        //       objdetails['subjects'][cat] = platdetails[platdetailskey][shadowk][cat]['proportion']
                        //   })
                        // })
                        Object.keys(platdetails[platdetailskey]).map(function (subj) {
                            objdetails[subj] = platdetails[platdetailskey][subj][Object.keys(platdetails[platdetailskey][subj])[0]]['proportion'] * platdetails[platdetailskey][subj][Object.keys(platdetails[platdetailskey][subj])[0]]['count'];
                        });
                    }
                });
                _this.selplats.push(objdetails);
                //console.log(objdetails['subjects']);
            });
        });
        callback(filterset_result_dropdown, this.selplats);
    };
    SearchFormComponent.prototype.sorterData = function (cat, listofobjs) {
        listofobjs = listofobjs.sort(function (a, b) {
            if (a[4] < b[4]) {
                return 1;
            }
            else if (a[4] > b[4]) {
                return -1;
            }
            return 0;
        });
    };
    SearchFormComponent.prototype.outputR = function (selOp, sel) {
        //callback(filterset_result_dropdown);
        //console.log("FILTERER in outputResult", selOp, sel) //OUTPUT: FILTERER in setResult undefined and stop reading for SUBJECTS, but read for CATEGORIES
        // var d = selOp.filter((cat)=>{
        //     console.log(cat.category, sel);
        //     if(cat.category===sel[2]){
        //       return cat.isActive
        //     }
        //   })[0];
        //console.log(d);
        return selOp.filter(function (cat) {
            if (cat.category === sel.cat) {
                //console.log(cat.category);
                return cat.isActive;
            }
        })[0];
    };
    SearchFormComponent.prototype.ngOnDestroy = function () {
    };
    return SearchFormComponent;
}());
SearchFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-form',
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('myAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)', 'opacity': 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', 'opacity': 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', 'opacity': 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)', 'opacity': 0 }))
                ])
            ])
        ],
        template: __webpack_require__("../../../../../src/app/search-form/search-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-form/search-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */]) === "function" && _a || Object])
], SearchFormComponent);

var _a;
//# sourceMappingURL=search-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/testingservices/testingservices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testingservices/testingservices.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    testingservices works! {{subjectOptions}}\n</p>"

/***/ }),

/***/ "../../../../../src/app/testingservices/testingservices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__ = __webpack_require__("../../../../../src/app/firebaseserv/firebasedb.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingservicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestingservicesComponent = (function () {
    function TestingservicesComponent(db) {
        var _this = this;
        this.db = db;
        this.subjectOptions = [];
        var fireb_categories$ = this.db.getCategories();
        fireb_categories$.subscribe(function (cats) { console.log("THIS ARE CATS in TEST ", cats); return _this.catOptions = cats[0]; });
        //this.firebaseplatforms$ = db.getCategories()
        var fireb_subjects$ = this.db.getSubjects();
        //fireb_subjects$.subscribe((subjs) => {console.log(subjs)}).unsubscribe();
        fireb_subjects$.subscribe(function (subjs) { console.log("THIS ARE SUBJS in TEST ", subjs); return _this.subjectOptions = subjs[0].map(function (subjs, i) { return { name: subjs[1], id: i + 1 }; }, []); });
        //this.subjectOptions = this.subjectOptions.map((subjs, i) => {return {name:subjs[1], id:i+1}},[])
        //fireb_subjects$.subscribe((subjs) => {let subjects = subjs[0]; subjects.forEach((sb, i)=>{this.subjectOptions.push({name:sb[1], id: i+1})})});
        //const fireb_platforms$: FirebaseListObservable<any> = this.db.getPlatforms();
        //fireb_platforms$.subscribe((plats)=>{console.log("THIS ARE PLATS in TEST ", plats);})
    }
    TestingservicesComponent.prototype.ngOnInit = function () {
    };
    TestingservicesComponent.prototype.ngOnDestroy = function () {
    };
    return TestingservicesComponent;
}());
TestingservicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testingservices',
        template: __webpack_require__("../../../../../src/app/testingservices/testingservices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testingservices/testingservices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebaseserv_firebasedb_service__["a" /* FirebasedbService */]) === "function" && _a || Object])
], TestingservicesComponent);

var _a;
//# sourceMappingURL=testingservices.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCLaA7Py1XK4f_8X9LCSaEcee4h_hyDYTk',
        authDomain: 'fcccomresreview-e0e54.firebaseapp.com',
        databaseURL: 'https://fcccomresreview-e0e54.firebaseio.com',
        projectId: 'fcccomresreview-e0e54',
        storageBucket: '',
        messagingSenderId: '230404278213'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map