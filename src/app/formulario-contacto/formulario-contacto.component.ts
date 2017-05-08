
import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    inputTelefonoFocus(event: KeyboardEvent) {

        const val = (<HTMLInputElement>event.target).value;
        var re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})/g;
        var subst = '$1 $2 $3';

        (<HTMLInputElement>event.target).value = val.replace(re, subst);
    }

    guardarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.jsonToContacto(contactoForm.value);
        this.formularioAceptado.emit(contacto);
    }
}