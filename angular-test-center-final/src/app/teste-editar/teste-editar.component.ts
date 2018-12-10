import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { CriterioAceitacao } from '../classes/criterio-aceitacao';
import { TesteDeAceitacaoService } from '../services/teste-de-aceitacao.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestePk } from '../classes/teste-pk';
import { Usuario } from '../classes/usuario';
import { CriterioPk } from '../classes/criterio-pk';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-teste-editar',
  templateUrl: './teste-editar.component.html',
  styleUrls: ['./teste-editar.component.css']
})
export class TesteEditarComponent implements OnInit {

  historias:HistoriaDeUsuario[];
  criterios:CriterioAceitacao[];
  
  testeForm:FormGroup;
  id:string = this.rotaAtiva.snapshot.params['id']+" - "+this.rotaAtiva.snapshot.params['id2']+" - "+this.rotaAtiva.snapshot.params['id3'];
  passou:boolean = null;
  checked:boolean;

  public Editor = ClassicEditor;



  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private criterioService: CriterioDeAceitacaoService,
              private testeService:TesteDeAceitacaoService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.carregarSelectHistorias(this.projetoService.projetoSelecionado.id);
    this.carregarSelectCriterios(this.projetoService.projetoSelecionado.id);
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getTeste(this.rotaAtiva.snapshot.params['id'],this.rotaAtiva.snapshot.params['id2'],this.rotaAtiva.snapshot.params['id3']);
    
    this.testeForm = this.formBuilder.group({
      'idOrdenacao': [null, Validators.required],
      'descricaoLinha' : [null, Validators.required],
      'titulo': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'usuarioAux':[null, Validators.required],
      'historiaAux':[null, Validators.required],
      'criterioAux': [null, Validators.required],
      'idCopy':[null, Validators.required],
      'passou':[null],
      'id': this.formBuilder.group({
        'idLinhaTeste':[null, Validators.required],
        'criterioDeAceitacao': this.formBuilder.group({
          'historiaDeUsuario': [null, Validators.required],
          'idLinhaCriterio': [null, Validators.required],
        })
      })
    });
   
    this.testeForm.get("idCopy").disable();
    this.testeForm.get("historiaAux").disable();
    this.testeForm.get("criterioAux").disable();

  }


  carregarSelectHistorias(idProjeto:number) {
    this.historiaService.getHistoriaByProjeto(idProjeto)
        .subscribe( e => {
           this.historias = e;
           
        });
  }

  carregarSelectCriterios(idProjeto:number) {
  
    this.criterioService.getCriterioByProjeto(idProjeto)
        .subscribe( e => {
            this.criterios = e;
    });
  }

  getTeste(id,id2,id3) {
    let criterioVar;
    this.criterioService.getCriterioById(id,id2)
        .subscribe(res => { criterioVar = res;});
    
    this.testeService.getTesteById(id,id2,id3)
       .subscribe( resultado => {
         this.testeForm.setValue({
           id: resultado.id,
           idCopy: resultado.id.idLinhaTeste,
           idOrdenacao: resultado.idOrdenacao,
           titulo: resultado.titulo,
           descricaoLinha: resultado.descricaoLinha,
           usuarioCriador: resultado.usuarioCriador,
           usuarioAtualizador: resultado.usuarioAtualizador,
           passou: resultado.passou,
           usuarioAux: resultado.usuarioCriador.email,
           historiaAux: resultado.id.criterioDeAceitacao.historiaDeUsuario.id,
           criterioAux: resultado.id.criterioDeAceitacao.idLinhaCriterio,
         });
          
         this.checked = resultado.passou;
       });
      }
 
      onFormSubmit(form:NgForm) {
        this.testeService.updateTeste(form)
            .subscribe( rest => {
              alert("Teste de aceitação alterado com sucesso!");
              this.router.navigate(['/teste-listar']);
            }, (err) => {
              console.log(err);
            });
       }   


    trocaValor() {
      this.checked = this.testeForm.get("passou").value;
    }

    validaUserCriador() {
      this.usuarioService.getUsuarioById(this.testeForm.get('usuarioAux').value)
          .subscribe(e => {
            this.testeForm.get('usuarioCriador').setValue(e);
      });
    }
}


