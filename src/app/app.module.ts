import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {BoatsViewComponent} from './boats/boats.component';
import {BoatService} from "./services/boat.service";
import {AuthComponent} from './auth/auth.component';
import {AuthService} from "./services/auth.service";
import {SingleBoatComponent} from './single-boat/single-boat.component';
import {ErrorRedirectComponent} from './error-redirect/error-redirect.component';
import {AuthGard} from "./services/auth-gard.service";
import {AddBoatComponent} from './add-boat/add-boat.component';
import {FormsModule} from "@angular/forms";
import {ClassesViewComponent} from './classes/classes.component';
import {ClasseService} from "./services/classe.service";
import {HttpClientModule} from "@angular/common/http";
import {SingleClasseComponent} from "./single-classe/single-classe.component";
import {NavbarComponent} from './navbar/navbar.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {EditBoatComponent} from './edit-boat/edit-boat.component';
import {AddClasseComponent} from './add-classe/add-classe.component';
import { EditClasseComponent } from './edit-classe/edit-classe.component';
import { AddUserComponent } from './add-user/add-user.component';

const appRoutes: Routes = [
  {path: 'boats', component: BoatsViewComponent},
  {path: 'add-boat', component: AddBoatComponent},
  {path: 'boats/:id', component: SingleBoatComponent},
  {path: 'edit/boat/:id', component: EditBoatComponent},

  {path: 'classes', component: ClassesViewComponent},
  {path: 'add-class', component: AddClasseComponent},
  {path: 'classes/:id', component: SingleClasseComponent},
  {path: 'edit/classe/:id', component: EditClasseComponent},

  {path: 'add-user', component: AddUserComponent},

  {path: 'auth', component: AuthComponent},
  {path: '', component: BoatsViewComponent},
  {path: 'not-found', component: ErrorRedirectComponent},
  {path: '**', redirectTo: '/not-found'}

];

@NgModule({
  declarations: [
    AppComponent,
    BoatsViewComponent,
    AuthComponent,
    SingleBoatComponent,
    ErrorRedirectComponent,
    AddBoatComponent,
    ClassesViewComponent,
    SingleClasseComponent,
    EditBoatComponent,
    AddClasseComponent,
    EditClasseComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    BoatService,
    AuthService,
    ClasseService,
    AuthGard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
