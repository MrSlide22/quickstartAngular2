import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Observer } from "rxjs/Observer";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Jsonp, Response, URLSearchParams, RequestOptions } from '@angular/http';

@Component({
    selector: 'ejemplos-observables',
    templateUrl: './ejemplos-observables.component.html'
})

export class EjemplosObservablesComponent {

    private _miObservable$: Observable<any> =
    Observable.create((observador: Observer<any>) => {
        observador.next('Hola mundo');
        observador.error('Hola mundo');
        observador.complete();
    });

    constructor() {
        this._miObservable$.subscribe(
            dato => {
                console.log(`Dato recibido desde el observable (next) ${dato}`);
            }, error => {
                console.error(`Dato de error ${error}`);
            }, () => {
                console.log('He terminado');
            });
    }
}

// Ejemplo de observables con operadores
@Component({
    selector: 'ejemplos-observables-wikipedia',
    template: `
        <div>
            <input (input)="buscarWikipedia($event)">
            <ul>
                <li *ngFor="let resultado of _suscripcionCajaTexto | async">{{ resultado }}</li>
            </ul>
        </div>
    `
})
export class EjemplosObservablesWikipediaComponent implements OnDestroy {

    ngOnDestroy(): void {
        
        // Nos desuscribimos del observable
        this._suscripcionCajaTexto.unsubscribe();
    }

    private _flujoDeDatosCajaTexto: Subject<string> = new Subject();

    resultados: string[];
    // _suscripcionCajaTexto: Subscription;
    _suscripcionCajaTexto: any;

    constructor(private _jsonp: Jsonp) {
        this._suscripcionCajaTexto =
            this._flujoDeDatosCajaTexto
                .debounceTime(500)
                .distinctUntilChanged()
                .switchMap((palabra: string) => {
                    return this.peticionBusqueda(palabra);
                })
                /*.subscribe(resultados => {
                    this.resultados = resultados
                })*/;
    }

    buscarWikipedia(evento: KeyboardEvent) {

        const datoAEmitir = (evento.target as HTMLInputElement).value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    }

    peticionBusqueda(palabra: string): Observable<any> {
        const parametros: URLSearchParams = new URLSearchParams();
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');

        let opciones: RequestOptions = new RequestOptions();
        opciones.search = parametros;
        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map((respuesta: Response) => {
                return respuesta.json()[1];
            });
    }
}