import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardDestacadasComponent } from './componentes/card-destacadas/card-destacadas.component';


@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    CardDestacadasComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
})
export class InicioModule { }
