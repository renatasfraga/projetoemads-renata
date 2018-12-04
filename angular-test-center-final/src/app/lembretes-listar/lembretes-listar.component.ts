import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LembreteService } from '../services/lembrete.service';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lembrete } from '../classes/lembrete';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lembretes-listar',
  templateUrl: './lembretes-listar.component.html',
  styleUrls: ['./lembretes-listar.component.css']
})
export class LembretesListarComponent implements OnInit {

  lembreteForm: FormGroup;
  listaLembretes:Lembrete[];

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private lembreteService: LembreteService,
              private router : Router,
              private formBuilder: FormBuilder,
              public snackBar: MatSnackBar) { }
 

  ngOnInit() {
    this.carregarLembretes();
    this.lembreteForm = this.formBuilder.group({
      'texto':[null],
      'projeto':[this.projetoService.projetoSelecionado],
      'usuario':[this.usuarioService.usuarioLogado],
      'dhPostagem':[Date.now()],
    });
  }

  carregarLembretes() {
   
    this.lembreteService.getLembreteByProjeto(this.projetoService.projetoSelecionado.id) 
        .subscribe( resultado => {
          this.listaLembretes = resultado;
        });
  }

  onFormSubmit(form:NgForm){
    this.lembreteService.saveLembrete(form)
        .subscribe( resultado => {
           this.openSnackBar();
           this.carregarLembretes();
           this.lembreteForm.get('texto').setValue(null);
        }, (err) => {
          alert("Erro ao incluir lembrete!");
        });
  }

  remover(id:number) {
    this.lembreteService.deleteLembrete(id)
        .subscribe(e=> {
          this.openSnacExclusao();
          this.carregarLembretes();
        }, (err) => {
          alert(err);
        });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(AvisoLembreteComponent, {
      duration: 500,
    });
  }

  openSnacExclusao() {
    this.snackBar.openFromComponent(AvisoLembreteExcluirComponent, {
      duration: 500,
    });
  }
}

@Component({
  selector: 'app-aviso-lembrete',
  templateUrl: 'modal-inserir.html',
  styles: [`
    .lembrete-estilo {
      color: hotpink;
    }
  `],
})
export class AvisoLembreteComponent {}

@Component({
  selector: 'app-aviso-excluir',
  templateUrl: 'modal-remover.html',
  styles: [`
    .lembrete-estilo {
      color: hotpink;
    }
  `],
})
export class AvisoLembreteExcluirComponent {}