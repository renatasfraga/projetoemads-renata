import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  icon:string;
  link:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  folders: Section[] = [
    {
      name: 'História de Usuário',
      icon:'border_color',
      link:'/us-listar',
    },
    {
      name: 'Gráficos',
      icon:'call_to_action',
      link:'/us-listar',

    },
    {
      name: 'Repositório',
      icon:'access_alarms',
      link:'/us-listar',

    }
  ];
 
}
