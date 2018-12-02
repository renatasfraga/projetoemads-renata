import { Component, OnInit } from '@angular/core';
import { PlanoDeTesteService } from '../services/plano-de-teste.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-plano-incluir',
  templateUrl: './plano-incluir.component.html',
  styleUrls: ['./plano-incluir.component.css']
})
export class PlanoIncluirComponent implements OnInit {

  planoForm: FormGroup;
  public Editor = ClassicEditor;

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private planoService: PlanoDeTesteService,
              private router : Router,
              private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.planoForm = this.formBuilder.group({
      'titulo':[null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'conteudo':  [null, Validators.required],
      'projeto': [this.projetoService.projetoSelecionado],
    });

  }

  onFormSubmit(form:NgForm) {
    this.planoService.savePlano(form).subscribe(res => {
      alert("Plano de Teste incluído com sucesso!");
      this.router.navigate(['/plano-listar']);
     });
  }

}


