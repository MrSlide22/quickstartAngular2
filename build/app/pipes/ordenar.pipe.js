"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrdenarPipe = (function () {
    function OrdenarPipe() {
    }
    // con transform creamos un nuevo dato y lo retornamos
    OrdenarPipe.prototype.transform = function (contactos) {
        contactos.sort(function (a, b) {
            var nombreCompleto1 = (a.nombre + " " + a.apellidos).toLowerCase();
            var nombreCompleto2 = (b.nombre + " " + b.apellidos).toLowerCase();
            if (nombreCompleto1 > nombreCompleto2) {
                return 1;
            }
            else if (nombreCompleto1 < nombreCompleto2) {
                return -1;
            }
            return 0;
        });
        return contactos;
    };
    return OrdenarPipe;
}());
OrdenarPipe = __decorate([
    core_1.Pipe({
        name: 'ordenar'
    })
], OrdenarPipe);
exports.OrdenarPipe = OrdenarPipe;
//# sourceMappingURL=ordenar.pipe.js.map