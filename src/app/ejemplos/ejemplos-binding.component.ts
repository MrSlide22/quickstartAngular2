import { Component } from '@angular/core';

@Component({

    selector: 'ejemplos-binding',
    templateUrl: './ejemplos-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: #a00;
    }
  `],
})
export class EjemplosBindingComponent {

    alumnos: string = "Babel";
    numeroDeLaSuerte: number = 42;
    textAreaLineas: number = 6;
    pintamosClase: boolean = true;
    constructor() {
    }

    obtenerColor() {
        return "green";
    }

    obtenerEstilos() {
        return {
            backgroundColor: 'red',
            color: 'white'
        }
    }

    mostrarMensaje() {
        alert();
    }
}