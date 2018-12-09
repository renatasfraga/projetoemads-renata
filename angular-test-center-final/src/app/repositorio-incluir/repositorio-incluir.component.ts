import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { RepositorioService } from '../services/repositorio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositorio-incluir',
  templateUrl: './repositorio-incluir.component.html',
  styleUrls: ['./repositorio-incluir.component.css']
})
export class RepositorioIncluirComponent implements OnInit {

  repositorioForm:FormGroup;
 
  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private repositorioService:RepositorioService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.repositorioForm = this.formBuilder.group({
      'titulo':[null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'conteudo':  [null, Validators.required],
      'projeto': [this.projetoService.projetoSelecionado],
    });
  }

  

  onFormSubmit(form:NgForm) {
    this.repositorioService.saveRepositorio(form).subscribe(res => {
      alert("Arquivo incluído com sucesso!");
      this.router.navigate(['/repositorio-listar']);
     });
  }



}
