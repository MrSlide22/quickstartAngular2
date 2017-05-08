import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Contacto } from '../entidades/contacto';
import { Direcciones } from '../configuracion/direcciones';

@Injectable()
export class ContactosService {

    constructor(
        private _http: Http,
        @Inject(Direcciones) private _direcciones: string
        ) { }

    private _contactos: Contacto[];

    obtenerContactos(): Observable<Contacto[]> {

        return this._http
            .get(`${this._direcciones}/contactos`)
            .map((res: any) => {
                const lista = res.json();
                return lista.map((elemento: any) => {
                    return Contacto.jsonToContacto(elemento);
                });
            });
    }

    guardarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .post(`${this._direcciones}/contactos`, contacto)
            .map(res => Contacto.jsonToContacto(res.json()));
    }

    eliminarContacto(contacto: Contacto): Observable<Contacto> {

        return this._http
                .delete(`${this._direcciones}/contactos/${contacto.id}`)
                .map(res => Contacto.jsonToContacto(res.json()));
    }

    editarContacto(contacto: Contacto): Observable<Contacto>{

        return this._http
                    .put(`${this._direcciones}/contactos/${contacto.id}`, contacto)
                    .map(res => Contacto.jsonToContacto(res.json()));
    }
}