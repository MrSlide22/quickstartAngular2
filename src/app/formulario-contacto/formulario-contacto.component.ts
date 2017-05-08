
import { Component, Output, EventEmitter, NgModule, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    rutaAvatar: string = '/images/ring.svg';

    constructor(private _contactosService: ContactosService) { }

    ngOnInit() {
        this._contactosService.generarRutaAvatar()
            .subscribe((ruta: string) => {
                this.rutaAvatar = ruta;
            });
    }

    inputTelefonoFocus(event: KeyboardEvent) {

        const val = (<HTMLInputElement>event.target).value;
        var re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})/g;
        var subst = '$1 $2 $3';

        (<HTMLInputElement>event.target).value = val.replace(re, subst);
    }

    guardarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.jsonToContacto(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    }
}