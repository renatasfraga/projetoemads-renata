import { Component, OnInit } from '@angular/core';
import { Repositorio } from '../classes/repositorio';
import { RepositorioService } from '../services/repositorio.service';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-repositorio-listar',
  templateUrl: './repositorio-listar.component.html',
  styleUrls: ['./repositorio-listar.component.css']
})
export class RepositorioListarComponent implements OnInit {

  titulo:string;
  repositorioList:Repositorio[];

  displayedColumns: string[] = ['id', 'titulo', 'criador', 'data','editarexcluir'];

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private repositorioService:RepositorioService) { }

  ngOnInit() {
    this.carregarGridOnInit();
  }

  buscar(titulo:string) {
    if(titulo) {
      this.repositorioService.getRepositorioByTitulo(this.projetoService.projetoSelecionado.id, titulo)
          .subscribe(e => {
             this.repositorioList = e;
          });
    } else {
      this.carregarGridOnInit();
    }
  }

  carregarGridOnInit() {
    this.repositorioService.getRepositorioByProjeto(this.projetoService.projetoSelecionado.id)
        .subscribe(e => {
            this.repositorioList = e;
        });
  }

  remover(id:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.repositorioService.deleteRepositorio(id)
          .subscribe( e => {
            this.carregarGridOnInit();
            alert("Exclusão efetuada com sucesso!");
          }, (err) => {
            console.log(err);
      });
    } else {
      alert("Exclusão cancelada.");
    }
  }

}
