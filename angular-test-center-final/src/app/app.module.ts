import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LembretesListarComponent, AvisoLembreteComponent, AvisoLembreteExcluirComponent } from './lembretes-listar/lembretes-listar.component';
import { HistoriaEditarComponent } from './historia-editar/historia-editar.component';
import { HistoriaListarComponent } from './historia-listar/historia-listar.component';
import { PlanoEditarComponent } from './plano-editar/plano-editar.component';
import { PlanoListarComponent } from './plano-listar/plano-listar.component';
import { RepositorioListarComponent } from './repositorio-listar/repositorio-listar.component';
import { RepositorioEditarComponent } from './repositorio-editar/repositorio-editar.component';
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
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { HistoriaDeUsuarioService } from './services/historia-de-usuario.service';
import { CriterioListarComponent } from './criterio-listar/criterio-listar.component';
import { CriterioEditarComponent } from './criterio-editar/criterio-editar.component';
import { TesteListarComponent } from './teste-listar/teste-listar.component';
import { TesteEditarComponent } from './teste-editar/teste-editar.component';
import { HistoriaIncluirComponent } from './historia-incluir/historia-incluir.component';
import { CriterioIncluirComponent } from './criterio-incluir/criterio-incluir.component';
import { TesteIncluirComponent } from './teste-incluir/teste-incluir.component';
import { PlanoIncluirComponent } from './plano-incluir/plano-incluir.component';
import { CriterioDeAceitacaoService } from './services/criterio-de-aceitacao.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DefeitoListarComponent } from './defeito-listar/defeito-listar.component';
import { DefeitoEditarComponent } from './defeito-editar/defeito-editar.component';
import { DefeitoIncluirComponent } from './defeito-incluir/defeito-incluir.component';





@NgModule({
  declarations: [
    AppComponent,
    LembretesListarComponent,
    HistoriaEditarComponent,
    HistoriaListarComponent,
    PlanoEditarComponent,
    PlanoListarComponent,
    RepositorioListarComponent,
    RepositorioEditarComponent,
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
    MenuSuperiorComponent,
    CriterioListarComponent,
    CriterioEditarComponent,
    TesteListarComponent,
    TesteEditarComponent,
    HistoriaIncluirComponent,
    CriterioIncluirComponent,
    TesteIncluirComponent,
    PlanoIncluirComponent,
    AvisoLembreteComponent,
    AvisoLembreteExcluirComponent,
    DefeitoListarComponent,
    DefeitoEditarComponent,
    DefeitoIncluirComponent,
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
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    CKEditorModule,
    MatSnackBarModule,
    MatPaginatorModule,
    
    

  ],
  entryComponents: [AvisoLembreteComponent,AvisoLembreteExcluirComponent],

  providers: [ProjetoService, UsuarioService, HistoriaDeUsuarioService, CriterioDeAceitacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
