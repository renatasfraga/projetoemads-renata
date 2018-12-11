import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Metodologia } from '../projeto-editar/projeto-editar.component';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { Router } from '@angular/router';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-projeto-incluir',
  templateUrl: './projeto-incluir.component.html',
  styleUrls: ['./projeto-incluir.component.css']
})
export class ProjetoIncluirComponent implements OnInit {

  projetoForm:FormGroup;
  selectMetodologia:Metodologia[] = [
    {value:'S', description:'Scrum'},
    {value:'A', description:'Agile'},
    {value: 'T', description: 'Tradicional'},
  ];
  allUsers:Usuario[];
  
  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private router: Router,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.carregaAllUsers();
    this.projetoForm = this.formBuilder.group({
      'nome':[null, Validators.required],
      'descricao': [null],
      'dataCriacao':[null, Validators.required],
      'usuarioCriador':[this.usuarioService.usuarioLogado, Validators.required],
      'usuarioCopy':[this.usuarioService.usuarioLogado.email, Validators.required],
      'metodologiaDesenvolvimento':[null, Validators.required],
    });

    this.projetoForm.get("usuarioCopy").disable();
  }


  onFormSubmit(form:NgForm) {
    this.projetoService.saveProjeto(form)
        .subscribe( rest => {
          alert("Projeto incluído com sucesso!");
          this.router.navigate(['/projeto-selecionar']);
        }, (err) => {
          console.log(err);
        });
   }  

   carregaAllUsers() {
     this.usuarioService.getAllUsers() 
         .subscribe(e => {
           this.allUsers = e;
         })
   }
}
