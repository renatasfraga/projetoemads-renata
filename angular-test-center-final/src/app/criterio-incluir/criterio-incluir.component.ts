import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CriterioPk } from '../classes/criterio-pk';
import { Usuario } from '../classes/usuario';
import { CriterioDeAceitacaoService } from '../services/criterio-de-aceitacao.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-criterio-incluir',
  templateUrl: './criterio-incluir.component.html',
  styleUrls: ['./criterio-incluir.component.css']
})
export class CriterioIncluirComponent implements OnInit {

  historias: HistoriaDeUsuario[];
  public Editor = ClassicEditor;

  criterioForm: FormGroup;
  id:CriterioPk = null;
 

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private criterioService: CriterioDeAceitacaoService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.carregarDropHistorias();

    this.criterioForm = this.formBuilder.group({
      'idOrdenacao': [null, Validators.required],
      'titulo': [null, Validators.required],
      'descricaoLinha' : [null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioAtualizador':[this.usuarioService.usuarioLogado],
      'id': this.formBuilder.group({
        'historiaDeUsuario': [null, Validators.required], 
      })
    });

  }

  onFormSubmit(form:NgForm) {
    this.criterioService.saveCriterio(form).subscribe(res => {
      alert("Critério de Aceitação incluído com sucesso!");
      this.router.navigate(['/criterio-listar']);
     });
  }

  carregarDropHistorias() {
    this.historiaService.getHistoriaByProjeto(this.projetoService.projetoSelecionado.id)
                        .subscribe( e => {
                           this.historias = e;
                        });
  }
}
