import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Servicios
import { ConexionService } from './services/conexion.service';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarComponent } from './consultar/consultar.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'subir', component: ListaComponent, pathMatch: 'full'},
  { path: 'consultar', component: ConsultarComponent},
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EncabezadoComponent,
    InicioComponent,
    ConsultarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(routes)
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
