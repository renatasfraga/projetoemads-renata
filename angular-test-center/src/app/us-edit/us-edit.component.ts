import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';


interface Dominio {
  name: string,
  code: string
}


@Component({
  selector: 'app-us-edit',
  templateUrl: './us-edit.component.html',
  styleUrls: ['./us-edit.component.css']
})



export class UsEditComponent implements OnInit {

  listaParecer: Dominio[];
  selectedParecer: Dominio;
  listaAutor: Dominio[];
  selectedAutor: Dominio; 
  usuarios: Usuario[] = [];
  error: string;


  constructor(private usuarioService: UsuarioService) { }
  

  ngOnInit() {
       
       
   
    this.listaParecer = [
      {code: 'I',name:'Insatisfeito'},
      {code: 'P',name:'Parcialmente Satisfeito'},
      {code: 'S',name:'Satisfeito'},
    ];
    

  
  
  }
  
  
  
   

}
