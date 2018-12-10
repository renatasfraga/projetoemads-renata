import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Projeto } from '../classes/projeto';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';

@Component({
  selector: 'app-historia-incluir',
  templateUrl: './historia-incluir.component.html',
  styleUrls: ['./historia-incluir.component.css']
})
export class HistoriaIncluirComponent implements OnInit {

  selectParecer:Parecer[];
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

    this.historiaForm = this.formBuilder.group({
      'titulo': [null, Validators.required],
      'descricao' : [null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'tempoEstimado': [null],
      'tempoDecorrido':  [null],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'projeto':[this.projetoService.projetoSelecionado],

    });


  }

  getCarregarSelectParecer() {
    this.selectParecer = [
      {value: 'I' , description: 'Insatisfeito'},
      {value: 'P' , description: 'Parcialmente Satisfeito'},
      {value: 'S' , description: 'Satisfeito'}
    ];
  }

  onFormSubmit(form:NgForm) {
    this.historiaService.saveHistoria(form).subscribe(res => {
      alert("História de Usuário incluída com sucesso!");
      this.router.navigate(['/historia-listar']);
     });
  }

}
export interface Parecer {
  value:string;
  description:string;
}