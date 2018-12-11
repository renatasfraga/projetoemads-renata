import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  senha:string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

 
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }


  resetarSenha () {
    this.usuarioService.getUsuarioById(this.emailFormControl.value)
        .subscribe(e => {
          if(e) {
            e.senha = Math.random().toString(36).slice(-10);
            this.senha = e.senha;
            this.usuarioService.updateUsuario(e) 
                .subscribe(res => {
                 alert("Sua senha é: "+this.senha);
                });
          } 
        })
  }

  
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}