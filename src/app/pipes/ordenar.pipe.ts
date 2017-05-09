import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Pipe({
    name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

    // con transform creamos un nuevo dato y lo retornamos
    transform(contactos: Contacto[]) {

        contactos.sort((a, b): number => {

            const nombreCompleto1 = `${a.nombre} ${a.apellidos}`.toLowerCase();
            const nombreCompleto2 = `${b.nombre} ${b.apellidos}`.toLowerCase();

            if (nombreCompleto1 > nombreCompleto2) {
                return 1;

            } else if (nombreCompleto1 < nombreCompleto2) {
                return -1;
            }

            return 0;
        });

        return contactos;
    }

}