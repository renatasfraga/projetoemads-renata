import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { FuncaoExercida } from '../usuario-editar/usuario-editar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-incluir',
  templateUrl: './usuario-incluir.component.html',
  styleUrls: ['./usuario-incluir.component.css']
})
export class UsuarioIncluirComponent implements OnInit {

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
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'nome': [null, Validators.required],
      'senha': [null, Validators.required],
      'dataIngressoSistema': [new Date(), Validators.required],
      'funcaoExercida': [null, Validators.required],
    });

  }

  onFormSubmit(form:NgForm) {
    this.usuarioService.saveUsuario(form)
        .subscribe( rest => {
          alert("Usuário incluído com sucesso!");
          this.router.navigate(['/login']);
        }, (err) => {
          console.log(err);
        });
   }  

}
