import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Herramientas de la base de datos
import { environment } from 'src/environments/environment'; //Vinculación de la base de datos con la app
import { AngularFireModule } from '@angular/fire/compat'; //Importación e las colecciones de información
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //Imágenes y archivos

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Importaciones de la base de datos
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
