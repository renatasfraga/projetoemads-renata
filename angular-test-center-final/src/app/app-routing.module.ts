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
  { path:'teste-editar/:id/:id2/:id3', component: TesteEditarComponent },
  { path:'plano-listar', component: PlanoListarComponent},
  { path:'plano-incluir', component: PlanoIncluirComponent},
  { path:'plano-editar/:id', component: PlanoEditarComponent },
  { path:'defeito-listar', component: DefeitoListarComponent},
  { path:'defeito-incluir', component: DefeitoIncluirComponent},
  { path:'defeito-editar/:id', component: DefeitoEditarComponent },
  { path:'grafico-listar', component: GraficoListarComponent},
  { path:'grafico-incluir', component: GraficoIncluirComponent},
  { path:'grafico-editar/:id', component: GraficoGerarComponent },
  { path:'repositorio-incluir', component: RepositorioIncluirComponent},
  { path:'repositorio-editar/:id', component: RepositorioEditarComponent },
  { path:'repositorio-listar', component: RepositorioListarComponent },
  { path:'usuario-incluir', component: UsuarioIncluirComponent},
  { path:'usuario-editar/:id', component: UsuarioEditarComponent },
  { path:'projeto-incluir', component: ProjetoIncluirComponent},
  { path:'projeto-editar/:id', component: ProjetoEditarComponent},
  { path:'esqueci-senha', component: EsqueciSenhaComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
