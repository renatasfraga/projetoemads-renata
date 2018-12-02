import { Component, OnInit } from '@angular/core';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Usuario } from '../classes/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Projeto } from '../classes/projeto';

@Component({
  selector: 'app-historia-editar',
  templateUrl: './historia-editar.component.html',
  styleUrls: ['./historia-editar.component.css']
})
export class HistoriaEditarComponent implements OnInit {

  historia: HistoriaDeUsuario = new HistoriaDeUsuario();
  usuariosByProjeto:Usuario[] = [];
  selectParecer:Parecer[];

  //referente a form
  historiaForm: FormGroup;
  id:number = null;
  titulo:string = '';
  descricao:string = '';
  dataCriacao:string = '';
  tempoEstimado:string = '';
  tempoDecorrido:string = '';
  usuarioCriador:Usuario = null;
  usuarioAtualizador: Usuario = null;
  parecerQualidade:string = '';
  descricaoParecer:string = '';
  projeto:Projeto = null;

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
     this.historiaForm.get("usuarioAux").disable();
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
          this.id = result.id;
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
            this.router.navigate(['/historia-editar', this.id]);
          }, (err) => {
            console.log(err);
          });
     }   
}
export interface Parecer {
  value:string;
  description:string;
}