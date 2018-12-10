import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CriterioPk } from '../classes/criterio-pk';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { Usuario } from '../classes/usuario';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-criterio-editar',
  templateUrl: './criterio-editar.component.html',
  styleUrls: ['./criterio-editar.component.css']
})
export class CriterioEditarComponent implements OnInit {

  
  historias: HistoriaDeUsuario[];

  //reference a form
  criterioForm: FormGroup;
  id:number = this.rotaAtiva.snapshot.params['id'];
  public Editor = ClassicEditor;

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private criterioService: CriterioDeAceitacaoService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getCriterio(this.rotaAtiva.snapshot.params['id'],this.rotaAtiva.snapshot.params['id2']);
    this.carregarDropHistorias();

    this.criterioForm = this.formBuilder.group({
      'idOrdenacao': [null, Validators.required],
      'titulo':[null, Validators.required],
      'descricaoLinha' : [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAux': [null, Validators.required],
      'historiaAux':[null, Validators.required],
      'idCopy': [null, Validators.required],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'id': this.formBuilder.group({
        'historiaDeUsuario': [null, Validators.required], 
        'idLinhaCriterio': [null,Validators.required]
      })

    });
    this.criterioForm.get("idCopy").disable();
    this.criterioForm.get("historiaAux").disable();
   
  }

  getCriterio(id,id2) {
    let historiaVar; 
    this.historiaService.getHistoriaById(id) 
        .subscribe( res => {historiaVar = res; });

    this.criterioService.getCriterioById(id,id2)
        .subscribe( resultado => {
          this.criterioForm.setValue({
            id: resultado.id,
            idCopy: resultado.id.idLinhaCriterio,
            idOrdenacao: resultado.idOrdenacao,
            titulo: resultado.titulo,
            usuarioCriador: resultado.usuarioCriador,
            usuarioAux: resultado.usuarioCriador.email,
            usuarioAtualizador:resultado.usuarioAtualizador,
            descricaoLinha: resultado.descricaoLinha,
            historiaAux:resultado.id.historiaDeUsuario.id,            
          });
          
        });
  }

  onFormSubmit(form:NgForm) {
    this.criterioService.updateCriterio(form)
        .subscribe( rest => {
          alert("Critério de aceitação alterado com sucesso!");
          this.router.navigate(['/criterio-listar']);
        }, (err) => {
          console.log(err);
        });
   }   

   carregarDropHistorias() {
    this.historiaService.getHistoriaByProjeto(this.projetoService.projetoSelecionado.id)
                        .subscribe( e => {
                           this.historias = e;
                        });
  }

  validaUserCriador() {
    this.usuarioService.getUsuarioById(this.criterioForm.get('usuarioAux').value)
        .subscribe(e => {
          this.criterioForm.get('usuarioCriador').setValue(e);
    });
  }
}
