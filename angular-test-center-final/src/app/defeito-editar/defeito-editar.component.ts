import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Nivel } from '../defeito-listar/defeito-listar.component';
import { Status } from '../defeito-incluir/defeito-incluir.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { DefeitoService } from '../services/defeito.service';


@Component({
  selector: 'app-defeito-editar',
  templateUrl: './defeito-editar.component.html',
  styleUrls: ['./defeito-editar.component.css']
})
export class DefeitoEditarComponent implements OnInit {

  id:number = this.rotaAtiva.snapshot.params['id'];
  defeitoForm: FormGroup;
  public Editor = ClassicEditor;

  listaCritic: Nivel[] = [
    {value: '1', description: 'Nível 1'},
    {value: '2', description: 'Nível 2'},
    {value: '3', description: 'Nível 3'},
    {value: '4', description: 'Nível 4'},
    {value: '5', description: 'Nível 5'},
  ];

  listaStatus: Status[] = [
    {value: 'A', description: 'Aprovado'},
    {value: 'C', description: 'Correção'},
    {value: 'T', description: 'Teste'}
  ];

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private defeitoService: DefeitoService,
              private router : Router,
              private formBuilder: FormBuilder,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getDefeito(this.rotaAtiva.snapshot.params['id']);
    this.defeitoForm = this.formBuilder.group({
       'id':[null,Validators.required],
       'idCopy':[null, Validators.required],
       'titulo':[null, Validators.required],
       'conteudo':[null, Validators.required],
       'dataCriacao': [null, Validators.required],
       'usuarioCriadorAux': [null, Validators.required],
       'usuarioAtribuidoAux': [null, Validators.required],
       'usuarioCriador': [null, Validators.required],
       'usuarioAtribuido': [null, Validators.required],
       'status':[null, Validators.required],
       'projeto':[this.projetoService.projetoSelecionado, Validators.required],
       'nivelDeCriticidade': [null, Validators.required],
    });
    this.defeitoForm.get('idCopy').disable();
  }


  onFormSubmit(form:NgForm) {
    this.defeitoService.updateDefeito(form).subscribe(res => {
      alert("Defeito alterado com sucesso!");
      this.router.navigate(['/defeito-listar']);
     });
  }


  getDefeito(id) {
    this.defeitoService.getDefeitoById(id) 
        .subscribe(resultado => {
          this.defeitoForm.setValue({
             id:resultado.id,
             idCopy: resultado.id,
             titulo: resultado.titulo,
             conteudo: resultado.conteudo,
             dataCriacao: resultado.dataCriacao,
             usuarioCriadorAux:  resultado.usuarioCriador.email,
             usuarioAtribuidoAux: resultado.usuarioAtribuido.email,
             usuarioCriador:  resultado.usuarioCriador,
             usuarioAtribuido: resultado.usuarioAtribuido,
             status: resultado.status,
             projeto: resultado.projeto,
             nivelDeCriticidade: resultado.nivelDeCriticidade,
          });
        });
  }

  validaUserCriador() {
    this.usuarioService.getUsuarioById(this.defeitoForm.get('usuarioCriadorAux').value)
        .subscribe(e => {
          this.defeitoForm.get('usuarioCriador').setValue(e);
    });
  }

  validaUserAtribuido() {
    this.usuarioService.getUsuarioById(this.defeitoForm.get('usuarioAtribuidoAux').value)
        .subscribe(e => {
          this.defeitoForm.get('usuarioAtribuido').setValue(e);
    });
  }
}
