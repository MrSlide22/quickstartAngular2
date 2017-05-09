import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-pipe',
    template: `
        <div>
            <strong>Pipa de Fechas:</strong> {{fecha | date:'dd/MM/yyyy'}}<br>
            <strong>Pipa de precio</strong> {{ precio | currency:'EUR'}}<br>
            <strong>Pipa de texto</strong> {{ texto | titlecase}}<br>
            <strong>Pipa de json</strong>
            <pre>{{ objeto | json}}</pre>
        </div>
    `
})
export class EjemplosPipeComponent {

    fecha: Date = new Date();
    precio: number = 34.95;
    texto: string = "texto que estaba en minusculas";
    objeto: any = {
        selector: 'aaaa',
        zzz: 222,
        fecha: new Date()
    }
}