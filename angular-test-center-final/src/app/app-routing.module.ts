import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

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
import { DefeitoListarComponent } from './defeito-listar/defeito-listar.component';
import { DefeitoIncluirComponent } from './defeito-incluir/defeito-incluir.component';
import { DefeitoEditarComponent } from './defeito-editar/defeito-editar.component';
import { GraficoListarComponent } from './grafico-listar/grafico-listar.component';
import { GraficoEditarComponent } from './grafico-editar/grafico-editar.component';
import { GraficoGerarComponent } from './grafico-gerar/grafico-gerar.component';
import { GraficoIncluirComponent } from './grafico-incluir/grafico-incluir.component';
import { RepositorioEditarComponent } from './repositorio-editar/repositorio-editar.component';
import { RepositorioListarComponent } from './repositorio-listar/repositorio-listar.component';
import { RepositorioIncluirComponent } from './repositorio-incluir/repositorio-incluir.component';
import { UsuarioIncluirComponent } from './usuario-incluir/usuario-incluir.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { ProjetoIncluirComponent } from './projeto-incluir/projeto-incluir.component';
import { ProjetoEditarComponent } from './projeto-editar/projeto-editar.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'projeto-selecionar', component: ProjetoSelecionarComponent, canActivate:[AuthGuard]},
  { path:'lembretes', component: LembretesListarComponent, canActivate:[AuthGuard]},
  { path:'historia-listar', component: HistoriaListarComponent, canActivate:[AuthGuard]},
  { path:'historia-incluir', component: HistoriaIncluirComponent, canActivate:[AuthGuard]},
  { path:'historia-editar/:id', component: HistoriaEditarComponent, canActivate:[AuthGuard]},
  { path:'criterio-listar', component: CriterioListarComponent, canActivate:[AuthGuard]},
  { path:'criterio-incluir', component: CriterioIncluirComponent, canActivate:[AuthGuard]},
  { path:'criterio-editar/:id/:id2', component: CriterioEditarComponent, canActivate:[AuthGuard]},
  { path:'teste-listar', component: TesteListarComponent, canActivate:[AuthGuard]},
  { path:'teste-incluir', component: TesteIncluirComponent, canActivate:[AuthGuard]},
  { path:'teste-editar/:id/:id2/:id3', component: TesteEditarComponent, canActivate:[AuthGuard]},
  { path:'plano-listar', component: PlanoListarComponent, canActivate:[AuthGuard]},
  { path:'plano-incluir', component: PlanoIncluirComponent, canActivate:[AuthGuard]},
  { path:'plano-editar/:id', component: PlanoEditarComponent, canActivate:[AuthGuard] },
  { path:'defeito-listar', component: DefeitoListarComponent, canActivate:[AuthGuard]},
  { path:'defeito-incluir', component: DefeitoIncluirComponent, canActivate:[AuthGuard]},
  { path:'defeito-editar/:id', component: DefeitoEditarComponent, canActivate:[AuthGuard]},
  { path:'grafico-listar', component: GraficoListarComponent, canActivate:[AuthGuard]},
  { path:'grafico-incluir', component: GraficoIncluirComponent, canActivate:[AuthGuard]},
  { path:'grafico-editar/:id', component: GraficoGerarComponent, canActivate:[AuthGuard]},
  { path:'repositorio-incluir', component: RepositorioIncluirComponent, canActivate:[AuthGuard]},
  { path:'repositorio-editar/:id', component: RepositorioEditarComponent, canActivate:[AuthGuard]},
  { path:'repositorio-listar', component: RepositorioListarComponent, canActivate:[AuthGuard]},
  { path:'usuario-incluir', component: UsuarioIncluirComponent},
  { path:'usuario-editar/:id', component: UsuarioEditarComponent, canActivate:[AuthGuard]},
  { path:'projeto-incluir', component: ProjetoIncluirComponent, canActivate:[AuthGuard]},
  { path:'projeto-editar/:id', component: ProjetoEditarComponent, canActivate:[AuthGuard]},
  { path:'esqueci-senha', component: EsqueciSenhaComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
