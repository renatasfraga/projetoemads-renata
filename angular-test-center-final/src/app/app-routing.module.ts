import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjetoSelecionarComponent } from './projeto-selecionar/projeto-selecionar.component';
import { LembretesListarComponent } from './lembretes-listar/lembretes-listar.component';
import { HistoriaListarComponent } from './historia-listar/historia-listar.component';
import { HistoriaEditarComponent } from './historia-editar/historia-editar.component';
import { HistoriaIncluirComponent } from './historia-incluir/historia-incluir.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'projeto-selecionar', component: ProjetoSelecionarComponent},
  { path:'lembretes', component: LembretesListarComponent},
  { path:'historia-listar', component: HistoriaListarComponent},
  { path:'historia-incluir', component: HistoriaIncluirComponent},
  {path: 'historia-editar/:id', component: HistoriaEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
