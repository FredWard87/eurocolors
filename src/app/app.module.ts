import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar'; // Importa SidebarModule de PrimeNG
import { RouterModule } from '@angular/router'; // Para el enrutamiento
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PigmentosColoresComponent } from './pigmentos-colores/pigmentos-colores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselModule } from 'primeng/carousel';
import { ColoresPastaComponent } from './colores-pasta/colores-pasta.component';
import { GranillaComponent } from './granilla/granilla.component';
import { EsmaltesComponent } from './esmaltes/esmaltes.component';
import { MateriasPrimasComponent } from './materias-primas/materias-primas.component';
import { AditivosComponent } from './aditivos/aditivos.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { OtrosComponent } from './otros/otros.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    PigmentosColoresComponent,
    ColoresPastaComponent,
    GranillaComponent,
    EsmaltesComponent,
    AditivosComponent,
    OtrosComponent,
    NavMenuComponent,
    AcercaComponent,
    InicioComponent,
    MateriasPrimasComponent,
    HerramientasComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    CarouselModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'acerca', component: AcercaComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'pigmentos', component: PigmentosColoresComponent },
      { path: 'colores-pasta', component: ColoresPastaComponent },
      { path: 'granilla', component: GranillaComponent },
      { path: 'esmaltes', component: EsmaltesComponent },
      { path: 'materias-primas', component: MateriasPrimasComponent },
      { path: 'aditivos', component: AditivosComponent },
      { path: 'herramientas', component: HerramientasComponent },
      { path: 'otros', component: OtrosComponent }
    ]) // Asegúrate de definir tus rutas
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
})
export class AppModule { }


