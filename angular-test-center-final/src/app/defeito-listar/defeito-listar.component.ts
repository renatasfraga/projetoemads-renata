import { Component, OnInit } from '@angular/core';

export interface Nivel {
  value: string;
  description:string;
}

@Component({
  selector: 'app-defeito-listar',
  templateUrl: './defeito-listar.component.html',
  styleUrls: ['./defeito-listar.component.css']
})
export class DefeitoListarComponent implements OnInit {

  niveis: Nivel[] = [
    {value: '1', description: 'Nível 1'},
    {value: '2', description: 'Nível 2'},
    {value: '3', description: 'Nível 3'},
    {value: '4', description: 'Nível 4'},
    {value: '5', description: 'Nível 5'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
