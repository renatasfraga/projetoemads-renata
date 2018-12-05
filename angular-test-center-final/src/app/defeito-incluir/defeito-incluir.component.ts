import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DefeitoService } from '../services/defeito.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { Router } from '@angular/router';

export interface Nivel {
  value: string;
  description:string;
}

export interface Status {
  value: string;
  description:string;
}

@Component({
  selector: 'app-defeito-incluir',
  templateUrl: './defeito-incluir.component.html',
  styleUrls: ['./defeito-incluir.component.css']
})
export class DefeitoIncluirComponent implements OnInit {

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
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.defeitoForm = this.formBuilder.group({
       'titulo':[null, Validators.required],
       'conteudo':[null, Validators.required],
       'dataCriacao': [null, Validators.required],
       'usuarioCriador': [null, Validators.required],
       'usuarioAtribuido': [null, Validators.required],
       'status':[null, Validators.required],
       'projeto':[this.projetoService.projetoSelecionado, Validators.required],
       'nivelDeCriticidade': [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.defeitoService.saveDefeito(form).subscribe(res => {
      alert("Defeito incluído com sucesso!");
      this.router.navigate(['/defeito-listar']);
     });
  }

}
