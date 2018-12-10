import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


export interface FuncaoExercida {
  value:string;
  description:string;
}

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuarioForm:FormGroup;
  hide = true;
  selectFuncao: FuncaoExercida[] = [
    {value: 'T', description: 'Testador'},
    {value: 'AT', description: 'Analista de Testes'},
    {value: 'AQ', description: 'Analista de Qualidade'},
    {value: 'QA', description: 'Quality Assurance'},
    {value: 'D', description: 'Desenvolvedor'},
    {value: 'PO', description: 'Product Owner'},
    {value: 'AS', description: 'Analista de Sistemas'},
    {value: 'AN', description: 'Analista de Negócios'},
    {value: 'GP', description: 'Gerente de Projetos'},
    {value: 'L', description: 'Líder'},
    {value: 'SM', description: 'Scrum Master'},
  ];


  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private router: Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getUsuario(this.rotaAtiva.snapshot.params["id"]);
    this.usuarioForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'emailCopy': [null, Validators.required],
      'nome': [null, Validators.required],
      'senha': [null, Validators.required],
      'dataIngressoSistema': [null, Validators.required],
      'dataIngressoSistemaCopy': [null, Validators.required],
      'funcaoExercida': [null, Validators.required],
    });
    this.usuarioForm.get('emailCopy').disable();
    this.usuarioForm.get('dataIngressoSistemaCopy').disable();
  }

  getUsuario(id) {
    this.usuarioService.getUsuarioById(id)
        .subscribe(e => {
          this.usuarioForm.setValue({
            email: e.email,
            emailCopy: e.email,
            nome: e.nome,
            senha: e.senha,
            dataIngressoSistema: e.dataIngressoSistema,
            dataIngressoSistemaCopy: e.dataIngressoSistema,
            funcaoExercida: e.funcaoExercida,
          });
        });
  }

  onFormSubmit(form:NgForm) {
    this.usuarioService.updateUsuario(form)
        .subscribe( rest => {
          alert("Usuário alterado com sucesso!");
          this.router.navigate(['/lembretes']);
        }, (err) => {
          console.log(err);
        });
   }  

}
