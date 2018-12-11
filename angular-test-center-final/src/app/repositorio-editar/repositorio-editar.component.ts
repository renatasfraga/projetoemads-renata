import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { RepositorioService } from '../services/repositorio.service';

@Component({
  selector: 'app-repositorio-editar',
  templateUrl: './repositorio-editar.component.html',
  styleUrls: ['./repositorio-editar.component.css']
})
export class RepositorioEditarComponent implements OnInit {

  repositorioForm:FormGroup;
  id:number = this.rotaAtiva.snapshot.params['id'];
  conteudo:string;
  arquivo:any;

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private repositorioService:RepositorioService,
              private formBuilder:FormBuilder,
              private router:Router,
              private rotaAtiva:ActivatedRoute,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getRepositorio(this.rotaAtiva.snapshot.params['id']);
    this.repositorioForm = this.formBuilder.group({
      'id':[null, Validators.required],
      'idCopy':[null, Validators.required],
      'titulo':[null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioCriadorCopy': [null, Validators.required],
      'conteudo':  [null, Validators.required],
      'formato': [null,Validators.required],
      'projeto': [this.projetoService.projetoSelecionado],
    });
    this.repositorioService.getRepositorioById(this.rotaAtiva.snapshot.params['id'])
        .subscribe(e => {
          this.conteudo = window.atob(e.conteudo.replace('/home/renatasfraga/Vídeos/projetoemads-renata/java-test-center/data:text/html;base64,',''));
        })
  }

  onFileChange(event) {
    this.arquivo = document.getElementById('arquivo');
    let file = this.arquivo.files[0];
    this.repositorioForm.get('formato').setValue(file.type);
    
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
       
         this.repositorioForm.get('conteudo').setValue(reader.result);
        
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onFormSubmit(form:NgForm) {
    this.repositorioService.updateRepositorio(form).subscribe(res => {
      alert("Arquivo alterado com sucesso!");
      this.router.navigate(['/repositorio-listar']);
     });
  }


  getRepositorio(id) {
    this.repositorioService.getRepositorioById(id)
        .subscribe(e => {
            this.repositorioForm.setValue({
              id: e.id,
              idCopy: e.id,
              titulo: e.titulo,
              dataCriacao: e.dataCriacao,
              usuarioCriador: e.usuarioCriador,
              usuarioCriadorCopy: e.usuarioCriador.email,
              conteudo: e.conteudo,
              formato: e.formato,
              projeto: e.projeto
            });
        });
  }

  validaUserCriador() {
    this.usuarioService.getUsuarioById(this.repositorioForm.get('usuarioCriadorCopy').value)
        .subscribe(e => {
          this.repositorioForm.get('usuarioCriador').setValue(e);
    });
  }

}
