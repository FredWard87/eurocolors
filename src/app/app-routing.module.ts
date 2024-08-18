// AppRoutingModule.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { ColoresPastaComponent } from './catalogo-productos/colores-pasta/colores-pasta/colores-pasta.component';
import { EsmaltesComponent } from './catalogo-productos/esmaltes/esmaltes/esmaltes.component';
import { GranillaComponent } from './catalogo-productos/granilla/granilla/granilla.component';
import { AditivosComponent } from './catalogo-productos/aditivos/aditivos/aditivos.component';
import { PigmentosColoresComponent } from './catalogo-productos/pigmentos-colores/pigmentos-colores/pigmentos-colores.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'contacto', component: ContactoComponent },
  { 
    path: 'catalogo-productos', 
    component: CatalogoProductosComponent,
    children: [
      { path: 'pigmentos-colores', component: PigmentosColoresComponent },
      { path: 'colores-pasta', component: ColoresPastaComponent },
      { path: 'granilla', component: GranillaComponent },
      { path: 'esmaltes', component: EsmaltesComponent },
      { path: 'aditivos', component: AditivosComponent },
      
    ]
  },
   // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

