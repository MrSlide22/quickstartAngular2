"use strict";
var core_1 = require("@angular/core");
exports.Direcciones = new core_1.OpaqueToken('Direcciones');
exports.ProveedorDirecciones = {
    provide: exports.Direcciones,
    useValue: 'http://localhost:3004'
};
//# sourceMappingURL=direcciones.js.map