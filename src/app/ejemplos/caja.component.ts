import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'caja',
    template: `
        <div [style.backgroundColor]="color"
            (mouseenter)="notificar()"></div>
    `,
    styles: [`
        div{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    `]
})
export class CajaComponent {

    @Input() color: string = 'red';

    // emitimos un evento al padre
    @Output() encima: EventEmitter<String> = new EventEmitter();

    notificar() {
        // console.log('raton encima');
        this.encima.emit(`El color de la caja es: ${this.color}`);
    }
}