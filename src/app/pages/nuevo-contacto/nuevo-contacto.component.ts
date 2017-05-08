import { Component } from '@angular/core';
import { Contacto } from '../../entidades/contacto';
import { ContactosService } from '../../servicios/contactos.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: './nuevo-contacto.component.html'
})
export class NuevoContactoComponent {
    listaContactos: Contacto[];

    constructor(
        private _contactosService: ContactosService,
        private _router: Router
        ) { }

    guardarContacto(contacto: Contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(contacto => {
                // navegar a mis contactos
                this._router.navigate(['mis-contactos']);
            });
    }
}