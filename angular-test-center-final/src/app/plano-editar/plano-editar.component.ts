import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { PlanoDeTesteService } from '../services/plano-de-teste.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../classes/usuario';
import { Projeto } from '../classes/projeto';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-plano-editar',
  templateUrl: './plano-editar.component.html',
  styleUrls: ['./plano-editar.component.css']
})
export class PlanoEditarComponent implements OnInit {

  planoForm: FormGroup;
  checked:boolean;
  Editor = ClassicEditor;

  id:number = null;
  titulo:string = '';
  dataCriacao:string = '';
  usuarioCriador:Usuario = null;
  usuarioAtualizador:Usuario = null;
  conteudo:string = '';
  passou:boolean = null;
  projeto:Projeto = null;

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private planoService: PlanoDeTesteService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getPlano(this.rotaAtiva.snapshot.params['id']);
    this.planoForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'titulo': [null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAtualizador': [this.usuarioService.usuarioLogado],
      'conteudo': [null, Validators.required],
      'passou': [null, Validators.required],
      'projeto': [this.projetoService.projetoSelecionado],
      'idCopy': [null, Validators.required],
      'usuarioAux': [null, Validators.required],
    });

    this.planoForm.get("idCopy").disable();
    this.planoForm.get("usuarioAux").disable();
  }

  getPlano(id) {
    this.planoService.getPlanoById(id)
        .subscribe( e => {
          this.id = e.id;
          this.planoForm.setValue({
            id: e.id,
            titulo: e.titulo,
            dataCriacao: e.dataCriacao,
            usuarioCriador: e.usuarioCriador,
            usuarioAtualizador: e.usuarioAtualizador,
            conteudo: e.conteudo,
            passou: e.passou,
            projeto: e.projeto,
            idCopy: e.id,
            usuarioAux: e.usuarioCriador.email,
          });

          this.checked = e.passou;

        });
  }

  onFormSubmit(form:NgForm) {
    this.planoService.updatePlano(form)
        .subscribe( rest => {
          alert("Plano de teste alterado com sucesso!");
          this.router.navigate(['/plano-editar', this.id]);
        }, (err) => {
          console.log(err);
        });
   }   

  trocaValor() {
    this.checked = this.planoForm.get("passou").value;
  }

}
