import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private usuarioService:UsuarioService){}
  
  canActivate() {
    if(this.usuarioService.usuarioLogado) {
      return true;
    } 
    this.router.navigate(["/login"]);
  }
}
