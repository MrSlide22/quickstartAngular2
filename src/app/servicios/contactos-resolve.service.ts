import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router/router";
import { Contacto } from '../entidades/contacto';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Observable } from 'rxjs/observable';
import { ContactosService } from './contactos.service';

@Injectable()
export class ContactosResolve implements Resolve<Contacto[]>{

    constructor(private _contactosService: ContactosService) { };

    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]> {
        return this._contactosService.obtenerContactos();
    }

}