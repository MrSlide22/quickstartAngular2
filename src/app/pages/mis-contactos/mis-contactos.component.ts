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

    eliminarContacto(contacto: Contacto) {
        if (confirm(`¿Seguro que quieres eliminar a ${contacto.nombre} ${contacto.apellidos}?`)) {
            this._contactosService.eliminarContacto(contacto)
                .subscribe(() => {

                    const index: number = this.listaContactos.findIndex((c: Contacto) => c.id === contacto.id);

                    if (index !== -1) {
                        this.listaContactos.splice(index, 1);
                        this.contactoSeleccionado = null;
                    }

                });
            console.log(contacto);
        }
    }
}