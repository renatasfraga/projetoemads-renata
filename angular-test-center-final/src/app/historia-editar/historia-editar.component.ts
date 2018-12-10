import { Component, OnInit } from '@angular/core';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Usuario } from '../classes/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Projeto } from '../classes/projeto';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-historia-editar',
  templateUrl: './historia-editar.component.html',
  styleUrls: ['./historia-editar.component.css']
})
export class HistoriaEditarComponent implements OnInit {

  historia: HistoriaDeUsuario = new HistoriaDeUsuario();
  usuariosByProjeto:Usuario[] = [];
  selectParecer:Parecer[];
  id:number = this.rotaAtiva.snapshot.params['id'];

  //referente a form
  historiaForm: FormGroup;
  public Editor = ClassicEditor;


  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getCarregarSelectParecer();
    this.getHistoria(this.rotaAtiva.snapshot.params['id']);
    this.historiaForm = this.formBuilder.group({
      'id':[null,Validators.required],
      'idCopy':[null, Validators.required],
      'titulo': [null, Validators.required],
      'descricao' : [null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioAux': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'tempoEstimado': [null],
      'tempoDecorrido':  [null],
      'parecerQualidade':[null],
      'descricaoParecer':[null],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'projeto':[this.projetoService.projetoSelecionado],
     });   
     this.historiaForm.get("idCopy").disable();
   
  }

  getCarregarSelectParecer() {
    this.selectParecer = [
      {value: 'I' , description: 'Insatisfeito'},
      {value: 'P' , description: 'Parcialmente Satisfeito'},
      {value: 'S' , description: 'Satisfeito'}
    ];
  }

  getHistoria(id) {
    this.historiaService.getHistoriaById(id)
        .subscribe( result => {
          this.historiaForm.setValue({
            id: result.id,
            idCopy: result.id,
            titulo:result.titulo,
            descricao : result.descricao,
            dataCriacao: result.dataCriacao,
            tempoEstimado: result.tempoEstimado,
            tempoDecorrido: result.tempoDecorrido,
            usuarioAux: result.usuarioCriador.email,
            usuarioCriador: result.usuarioCriador,
            parecerQualidade: result.parecerQualidade,
            descricaoParecer: result.descricaoParecer,
            projeto: result.projeto,
            usuarioAtualizador: result.usuarioAtualizador
          });
        });
  }

  onFormSubmit(form:NgForm) {
      this.historiaService.updateHistoria(form)
          .subscribe( rest => {
            alert("História de usuário alterada com sucesso!");
            this.router.navigate(['/historia-listar']);
          }, (err) => {
            console.log(err);
          });
     }  
     
     validaUserCriador() {
      this.usuarioService.getUsuarioById(this.historiaForm.get('usuarioAux').value)
          .subscribe(e => {
            this.historiaForm.get('usuarioCriador').setValue(e);
      });
    }
}
export interface Parecer {
  value:string;
  description:string;
}