import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './Authantification/connection/connection.component';
import { InscriptionComponent } from './Authantification/inscription/inscription.component';
import { AuthGuardService } from './Authantification/auth-guard.service';
import { AccueilComponent } from './home/accueil/accueil.component';

const routes: Routes = [
  { path: 'auth/Inscription', component: InscriptionComponent },
  { path: 'auth/Connexion', component: ConnectionComponent },
  { path: 'accueil', component:  AccueilComponent},
  //{ path: 'Accuel', canActivate: [AuthGuardService], component: BookListComponent }
  
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
