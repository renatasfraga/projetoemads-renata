import { Component, OnInit } from '@angular/core';
import { TesteDeAceitacaoService } from '../services/teste-de-aceitacao.service';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { TesteDeAceitacao } from '../classes/teste-de-aceitacao';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { CriterioAceitacao } from '../classes/criterio-aceitacao';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-teste-listar',
  templateUrl: './teste-listar.component.html',
  styleUrls: ['./teste-listar.component.css']
})
export class TesteListarComponent implements OnInit {

  testeList:TesteDeAceitacao[];
  historias:HistoriaDeUsuario[];
  criterios:CriterioAceitacao[];

  testeBuscaForm:FormGroup;
  historia:HistoriaDeUsuario;
  criterio:CriterioAceitacao;
  
  displayedColumns: string[] = ['id', 'descricao','criador','passou','editarexcluir'];


  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private historiaDeUsuarioService:HistoriaDeUsuarioService,
              private criterioService:CriterioDeAceitacaoService,
              private testeService: TesteDeAceitacaoService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.carregarGridOnInit();
    this.carregarSelectHistorias(this.projetoService.projetoSelecionado.id);

    this.testeBuscaForm = this.formBuilder.group({
      'historia':[null], 
      'criterio':[null]
    });
    this.testeBuscaForm.get("criterio").disable();

  
  }


  carregarGridOnInit() {
    this.testeService.getTesteByProjeto(this.projetoService.projetoSelecionado.id)
        .subscribe(e => {
          this.testeList = e;
        });
  }

  carregarSelectHistorias(idProjeto:number) {
    this.historiaDeUsuarioService.getHistoriaByProjeto(idProjeto)
        .subscribe( e => {
           this.historias = e;
        });
  }

  carregarSelectCriterioByHistoria() {
    let historiaVar = this.testeBuscaForm.get("historia").value;
    this.testeBuscaForm.get("criterio").enable();

    this.criterioService.getCriterioByHistoria(historiaVar.id)
        .subscribe( e => {
            this.criterios = e;
        });
  }

  buscar(form:NgForm) {
    this.historia = this.testeBuscaForm.get("historia").value;
    this.criterio = this.testeBuscaForm.get("criterio").value;

    if(this.historia.id && this.criterio.id.idLinhaCriterio) {
      this.testeService.getTesteByProjetoCriterioHistoria(this.historia.id,this.criterio.id.idLinhaCriterio,this.projetoService.projetoSelecionado.id)
          .subscribe(e => {
            this.testeList = e;
          });
    } else if(this.historia.id  && !this.criterio.id.idLinhaCriterio) {
      this.testeService.getTesteByHistoria(this.historia.id)
          .subscribe( e => {
            this.testeList = e;
          });
    } else if(!this.historia.id  && !this.criterio.id.idLinhaCriterio) {
       this.carregarGridOnInit();
    }
  }

  remover(idHistoria:number, idCriterio:number, idTeste:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.testeService.deleteTeste(idHistoria, idCriterio, idTeste)
          .subscribe( exc => {
            this.carregarGridOnInit();
            alert("Exclusão efetuada com sucesso!");
          }, (err) => {
            console.log(err);
          });
    } else {
      alert("Exclusão cancelada");
    }
  }
  
}
