import { Component, OnInit } from '@angular/core';
import { TesteDeAceitacaoService } from '../services/teste-de-aceitacao.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { CriterioAceitacao } from '../classes/criterio-aceitacao';

@Component({
  selector: 'app-teste-incluir',
  templateUrl: './teste-incluir.component.html',
  styleUrls: ['./teste-incluir.component.css']
})
export class TesteIncluirComponent implements OnInit {

  testeForm:FormGroup;
  historias:HistoriaDeUsuario[];
  criterios:CriterioAceitacao[];
  
  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private criterioService: CriterioDeAceitacaoService,
              private testeService:TesteDeAceitacaoService,
              private router : Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.carregarSelectHistorias(this.projetoService.projetoSelecionado.id);
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.testeForm = this.formBuilder.group({
      'idOrdenacao': [null, Validators.required],
      'descricaoLinha' : [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'id': this.formBuilder.group({
        'criterioDeAceitacao': this.formBuilder.group({
          'historiaDeUsuario': [null, Validators.required],
          'idLinhaCriterio': [null, Validators.required],
        })
      })
    });
    this.testeForm.get("id").get("criterioDeAceitacao").get("idLinhaCriterio").disable();

  }


  onFormSubmit(form:NgForm) {
    this.testeService.saveTeste(form).subscribe(res => {
      alert("Teste de Aceitação incluído com sucesso!");
      this.router.navigate(['/teste-listar']);
     });
  }

  carregarSelectHistorias(idProjeto:number) {
    this.historiaService.getHistoriaByProjeto(idProjeto)
        .subscribe( e => {
           this.historias = e;
           
        });
  }

  carregarSelectCriterioByHistoria() {
    let historiaTemp = this.testeForm.get("id").get("criterioDeAceitacao").get("historiaDeUsuario").value;
    this.testeForm.get("id").get("criterioDeAceitacao").get("idLinhaCriterio").enable();

    this.criterioService.getCriterioByHistoria(historiaTemp.id)
        .subscribe( e => {
            this.criterios = e;
        });
  }
  
}
