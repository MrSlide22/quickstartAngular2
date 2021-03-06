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
var core_1 = require("@angular/core");
var observable_1 = require("rxjs/observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var EjemplosObservablesComponent = (function () {
    function EjemplosObservablesComponent() {
        this._miObservable$ = observable_1.Observable.create(function (observador) {
            observador.next('Hola mundo');
            observador.error('Hola mundo');
            observador.complete();
        });
        this._miObservable$.subscribe(function (dato) {
            console.log("Dato recibido desde el observable (next) " + dato);
        }, function (error) {
            console.error("Dato de error " + error);
        }, function () {
            console.log('He terminado');
        });
    }
    return EjemplosObservablesComponent;
}());
EjemplosObservablesComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables',
        templateUrl: './ejemplos-observables.component.html'
    }),
    __metadata("design:paramtypes", [])
], EjemplosObservablesComponent);
exports.EjemplosObservablesComponent = EjemplosObservablesComponent;
// Ejemplo de observables con operadores
var EjemplosObservablesWikipediaComponent = (function () {
    function EjemplosObservablesWikipediaComponent(_jsonp) {
        var _this = this;
        this._jsonp = _jsonp;
        this._flujoDeDatosCajaTexto = new Subject_1.Subject();
        this._suscripcionCajaTexto =
            this._flujoDeDatosCajaTexto
                .debounceTime(500)
                .distinctUntilChanged()
                .switchMap(function (palabra) {
                return _this.peticionBusqueda(palabra);
            });
    }
    EjemplosObservablesWikipediaComponent.prototype.ngOnDestroy = function () {
        // Nos desuscribimos del observable
        this._suscripcionCajaTexto.unsubscribe();
    };
    EjemplosObservablesWikipediaComponent.prototype.buscarWikipedia = function (evento) {
        var datoAEmitir = evento.target.value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    };
    EjemplosObservablesWikipediaComponent.prototype.peticionBusqueda = function (palabra) {
        var parametros = new http_1.URLSearchParams();
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');
        var opciones = new http_1.RequestOptions();
        opciones.search = parametros;
        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map(function (respuesta) {
            return respuesta.json()[1];
        });
    };
    return EjemplosObservablesWikipediaComponent;
}());
EjemplosObservablesWikipediaComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables-wikipedia',
        template: "\n        <div>\n            <input (input)=\"buscarWikipedia($event)\">\n            <ul>\n                <li *ngFor=\"let resultado of _suscripcionCajaTexto | async\">{{ resultado }}</li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], EjemplosObservablesWikipediaComponent);
exports.EjemplosObservablesWikipediaComponent = EjemplosObservablesWikipediaComponent;
//# sourceMappingURL=ejemplos-observables.component.js.map