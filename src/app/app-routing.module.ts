import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisContactosComponent } from './pages/mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './pages/nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';

// definimos la colección de rutas de nuestra app
const rutas: Routes = [

    {
        path: 'mis-contactos',
        component: MisContactosComponent,
        resolve: {
            contactos: ContactosResolve
        }
    },
    {
        path: 'nuevo-contacto',
        component: NuevoContactoComponent
    },
    {
        path: '**',
        redirectTo: '/mis-contactos'
    }
];

// Creamos un nuevo módulo de routing a partir de las rutas definidas
const moduloConRutas = RouterModule.forRoot(rutas);

@NgModule({

    imports: [moduloConRutas],
    exports: [RouterModule]
})
export class AppRoutingModule { };