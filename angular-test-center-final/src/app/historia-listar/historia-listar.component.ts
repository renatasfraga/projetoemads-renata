import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { MatDialog } from '@angular/material/dialog';

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
              private historiaDeUsuarioService:HistoriaDeUsuarioService) { }

  ngOnInit() {
    this.carregarGridOnInit();
  }

  buscar(nome:string) {
    if(nome) {
      this.historiaDeUsuarioService.getHistoriaDeUsuarioPorNome(this.projetoService.projetoSelecionado.id,nome)
      .subscribe( e => {
        this.historiaList = e;
      });
    } else {
      this.carregarGridOnInit();
    }
    
  }

  carregarGridOnInit() {
    this.historiaDeUsuarioService.getHistoriaByProjeto(this.projetoService.projetoSelecionado.id)
    .subscribe(e => {
       this.historiaList = e;
    });
  }

  remover(id:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.historiaDeUsuarioService.deleteHistoria(id)
          .subscribe(e => {
            this.carregarGridOnInit();
            alert("Exclusão efetuada com sucesso!");
        } , (err) => {
          console.log(err);
        });
    } else {
      alert("Exclusão cancelada.");
    } 
  }
}
