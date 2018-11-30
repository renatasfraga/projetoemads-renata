import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjetoSelecionarComponent } from './projeto-selecionar/projeto-selecionar.component';
import { LembretesListarComponent } from './lembretes-listar/lembretes-listar.component';
import { HistoriaListarComponent } from './historia-listar/historia-listar.component';
import { HistoriaEditarComponent } from './historia-editar/historia-editar.component';
import { HistoriaIncluirComponent } from './historia-incluir/historia-incluir.component';
import { CriterioEditarComponent } from './criterio-editar/criterio-editar.component';
import { CriterioListarComponent } from './criterio-listar/criterio-listar.component';
import { CriterioIncluirComponent } from './criterio-incluir/criterio-incluir.component';
import { TesteIncluirComponent } from './teste-incluir/teste-incluir.component';
import { TesteEditarComponent } from './teste-editar/teste-editar.component';
import { TesteListarComponent } from './teste-listar/teste-listar.component';
import { PlanoListarComponent } from './plano-listar/plano-listar.component';
import { PlanoIncluirComponent } from './plano-incluir/plano-incluir.component';
import { PlanoEditarComponent } from './plano-editar/plano-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'projeto-selecionar', component: ProjetoSelecionarComponent},
  { path:'lembretes', component: LembretesListarComponent},
  { path:'historia-listar', component: HistoriaListarComponent},
  { path:'historia-incluir', component: HistoriaIncluirComponent},
  { path:'historia-editar/:id', component: HistoriaEditarComponent },
  { path:'criterio-listar', component: CriterioListarComponent},
  { path:'criterio-incluir', component: CriterioIncluirComponent},
  { path:'criterio-editar/:id/:id2', component: CriterioEditarComponent },
  { path:'teste-listar', component: TesteListarComponent},
  { path:'teste-incluir', component: TesteIncluirComponent},
  { path:'teste-editar/:id', component: TesteEditarComponent },
  { path:'plano-listar', component: PlanoListarComponent},
  { path:'plano-incluir', component: PlanoIncluirComponent},
  { path:'plano-editar/:id', component: PlanoEditarComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
