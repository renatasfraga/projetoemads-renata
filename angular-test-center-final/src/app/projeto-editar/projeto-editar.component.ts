import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface Metodologia{
  value:string;
  description:string;
}

@Component({
  selector: 'app-projeto-editar',
  templateUrl: './projeto-editar.component.html',
  styleUrls: ['./projeto-editar.component.css']
})
export class ProjetoEditarComponent implements OnInit {


  projetoForm:FormGroup;
  id:number = this.rotaAtiva.snapshot.params['id'];
  selectMetodologia:Metodologia[] = [
    {value:'S', description:'Scrum'},
    {value:'A', description:'Agile'},
    {value: 'T', description: 'Tradicional'},
  ];

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private rotaAtiva: ActivatedRoute,
              private router: Router,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getProjeto(this.rotaAtiva.snapshot.params['id']);
    this.projetoForm = this.formBuilder.group({
      'id':[null, Validators.required],
      'idCopy': [null, Validators.required],
      'nome':[null, Validators.required],
      'descricao': [null],
      'dataCriacao':[null, Validators.required],
      'usuarioAux':[null, Validators.required],
      'usuarioCriador':[null, Validators.required],
      'metodologiaDesenvolvimento':[null, Validators.required],
    });

    this.projetoForm.get('idCopy').disable();
  }


  getProjeto(id) {
    this.projetoService.getProjetoById(id)
        .subscribe( resultado => {
          this.projetoForm.setValue({
            id: resultado.id,
            idCopy: resultado.id,
            nome: resultado.nome,
            descricao: resultado.descricao,
            dataCriacao: resultado.dataCriacao,
            usuarioAux: resultado.usuarioCriador.email,
            usuarioCriador: resultado.usuarioCriador,
            metodologiaDesenvolvimento: resultado.metodologiaDesenvolvimento,
          });
        });
  }

  onFormSubmit(form:NgForm) {
    this.projetoService.updateProjeto(form)
        .subscribe( rest => {
          alert("Projeto alterado com sucesso!");
          this.router.navigate(['/lembretes']);
        }, (err) => {
          console.log(err);
        });
   }  

  validaUserCriador() {
    this.usuarioService.getUsuarioById(this.projetoForm.get('usuarioAux').value)
        .subscribe(e => {
          this.projetoForm.get('usuarioCriador').setValue(e);
    });
  }

}
