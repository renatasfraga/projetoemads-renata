import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LembretesListarComponent } from './lembretes-listar/lembretes-listar.component';
import { HistoriaEditarComponent } from './historia-editar/historia-editar.component';
import { HistoriaListarComponent } from './historia-listar/historia-listar.component';
import { HistoriaDeletarComponent } from './historia-deletar/historia-deletar.component';
import { PlanoEditarComponent } from './plano-editar/plano-editar.component';
import { PlanoListarComponent } from './plano-listar/plano-listar.component';
import { RepositorioListarComponent } from './repositorio-listar/repositorio-listar.component';
import { RepositorioEditarComponent } from './repositorio-editar/repositorio-editar.component';
import { RepositorioDeletarComponent } from './repositorio-deletar/repositorio-deletar.component';
import { PlanoDeletarComponent } from './plano-deletar/plano-deletar.component';
import { GraficoListarComponent } from './grafico-listar/grafico-listar.component';
import { GraficoGerarComponent } from './grafico-gerar/grafico-gerar.component';
import { GraficoEditarComponent } from './grafico-editar/grafico-editar.component';
import { GraficoDeletarComponent } from './grafico-deletar/grafico-deletar.component';
import { LoginComponent } from './login/login.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { ProjetoListarComponent } from './projeto-listar/projeto-listar.component';
import { ProjetoEditarComponent } from './projeto-editar/projeto-editar.component';
import { ProjetoSelecionarComponent } from './projeto-selecionar/projeto-selecionar.component';
import { ProjetoService } from './services/projeto.service';
import { UsuarioService } from './services/usuario.service';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LembretesListarComponent,
    HistoriaEditarComponent,
    HistoriaListarComponent,
    HistoriaDeletarComponent,
    PlanoEditarComponent,
    PlanoListarComponent,
    RepositorioListarComponent,
    RepositorioEditarComponent,
    RepositorioDeletarComponent,
    PlanoDeletarComponent,
    GraficoListarComponent,
    GraficoGerarComponent,
    GraficoEditarComponent,
    GraficoDeletarComponent,
    LoginComponent,
    UsuarioEditarComponent,
    UsuarioListarComponent,
    ProjetoListarComponent,
    ProjetoEditarComponent,
    ProjetoSelecionarComponent,
    MenuLateralComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [ProjetoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
