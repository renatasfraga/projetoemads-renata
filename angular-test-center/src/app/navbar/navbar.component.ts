import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  
  constructor() { }

  ngOnInit() {

    this.items = [
          {label: 'Lembretes', icon: 'pi pi-fw pi-plus'},
          {label: 'User Stories', icon: 'pi pi-fw pi-download',routerLink:'/us-list'},
          {label: 'Planos de Testes', icon: 'pi pi-fw pi-download'},
          {label: 'Gráficos', icon: 'pi pi-fw pi-download'},
          {label: 'Repositório', icon: 'pi pi-fw pi-download'},
          {label: 'Bugs', icon: 'pi pi-fw pi-download'},
          
      
    ];
  }

}
