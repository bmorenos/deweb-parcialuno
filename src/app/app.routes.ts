import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component"
import {AlumnoComponent} from "./alumno/alumno.component"
import {WelcomeComponent} from "./welcome/welcome.component"
import {SegundaComponent} from "./segunda/segunda.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'segunda', component: SegundaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'welcome'}
];
export const app_routing = RouterModule.forRoot(app_routes);
