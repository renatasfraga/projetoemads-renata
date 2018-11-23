import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { UserStoryListarComponent } from './user-story-listar/user-story-listar.component';
import { UserStoryEditarComponent } from './user-story-editar/user-story-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent, data: {title: 'Test Center | Login'}},
  { path:'home', component: PaginaInicialComponent, data: {title: 'Test Center | Home'}},
  { path:'us-listar', component: UserStoryListarComponent, data: {title: 'User Story | Listar'}},
  { path:'us-editar', component: UserStoryEditarComponent, data: {title: 'User Story | Editar'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
