import { Component, OnInit } from '@angular/core';
import { CriterioAceitacao } from '../classes/criterio-aceitacao';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';

@Component({
  selector: 'app-criterio-listar',
  templateUrl: './criterio-listar.component.html',
  styleUrls: ['./criterio-listar.component.css']
})
export class CriterioListarComponent implements OnInit {

  historiaId:number;
  criterioList: CriterioAceitacao[];
  historias:HistoriaDeUsuario[];
  
  displayedColumns: string[] = ['id', 'descricao','criador','editarexcluir'];
  
  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private historiaDeUsuarioService:HistoriaDeUsuarioService,
              private criterioService:CriterioDeAceitacaoService) { }

  ngOnInit() {
    this.carregarGridOnInit();
    this.carregarSelectHistorias(this.projetoService.projetoSelecionado.id);
  }


  buscar(id:number) {
    if(id) {
      this.criterioService.getCriterioByProjetoHistoria(id,this.projetoService.projetoSelecionado.id)
      .subscribe( e => {
        this.criterioList = e;
      });
    } else {
      this.carregarGridOnInit();
    }
  }


  carregarGridOnInit() {
    this.criterioService.getCriterioByProjeto(this.projetoService.projetoSelecionado.id)
    .subscribe(e => {
       this.criterioList = e;
    });
  }

  remover(idHistoria:number, idCriterio:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.criterioService.deleteCriterio(idHistoria, idCriterio)
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

  carregarSelectHistorias(idProjeto:number) {
    this.historiaDeUsuarioService.getHistoriaByProjeto(idProjeto)
        .subscribe( e => {
           this.historias = e;
        });
  }

}
