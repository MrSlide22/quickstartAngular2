import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../entidades/contacto';
import { ContactosService } from '../../servicios/contactos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit {

    listaContactos: Contacto[];

    contactoSeleccionado: Contacto;

    showDetails: boolean = false;

    constructor(
        private _contactosService: ContactosService,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this._contactosService.obtenerContactos()
        //     .subscribe(contactos => {
        //         this.listaContactos = contactos;
        //     });

        this._activatedRoute.data.forEach((data: { contactos: Contacto[] }) => {
            this.listaContactos = data.contactos;
        });
    }

    mostrarDetalles(contacto: Contacto) {
        this.contactoSeleccionado = contacto;
        this.showDetails = true;
    }

    navegarRuta(ruta: string) {
        window.open(ruta, '_blank');
    }
}