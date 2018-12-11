import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  arquivo:any;

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private repositorioService:RepositorioService,
              private formBuilder:FormBuilder,
              private router:Router,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.repositorioForm = this.formBuilder.group({
      'titulo':[null, Validators.required],
      'dataCriacao': [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'conteudo':  [null, Validators.required],
      'formato': [null,Validators.required],
      'projeto': [this.projetoService.projetoSelecionado],
    });
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
    this.repositorioService.saveRepositorio(form).subscribe(res => {
      alert("Arquivo incluído com sucesso!");
      this.router.navigate(['/repositorio-listar']);
     });
  }



}
