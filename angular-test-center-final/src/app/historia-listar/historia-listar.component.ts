import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { MatDialog } from '@angular/material/dialog';
import { HistoriaDeletarComponent } from '../historia-deletar/historia-deletar.component';

@Component({
  selector: 'app-historia-listar',
  templateUrl: './historia-listar.component.html',
  styleUrls: ['./historia-listar.component.css']
})
export class HistoriaListarComponent implements OnInit {

  usuarioNome:string;
  historiaList:HistoriaDeUsuario[];
  displayedColumns: string[] = ['id', 'nome', 'criador', 'data','editarexcluir'];

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private historiaDeUsuarioService:HistoriaDeUsuarioService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.carregarGridOnInit();
  }

  buscar(nome:string) {
    this.historiaDeUsuarioService.getHistoriaDeUsuarioPorNome(this.projetoService.projetoSelecionado.id,nome)
                                 .subscribe( e => {
                                   this.historiaList = e;
                                 });
  }

  carregarGridOnInit() {
    this.historiaDeUsuarioService.getHistoriaByProjeto(this.projetoService.projetoSelecionado.id)
    .subscribe(e => {
       this.historiaList = e;
    });
  }

  

  remover(id:number) {
    this.historiaDeUsuarioService.deleteHistoria(id).subscribe(e =>
      {
        alert("Exclusão efetuada com sucesso!");
      });
  }
}
