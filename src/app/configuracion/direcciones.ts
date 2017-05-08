import { OpaqueToken, Provider } from "@angular/core";

export const Direcciones: OpaqueToken = new OpaqueToken('Direcciones');
export const ProveedorDirecciones: Provider = {
        provide: Direcciones,
        useValue: 'http://localhost:3004'
};