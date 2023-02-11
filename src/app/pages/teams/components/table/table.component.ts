import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public teams: any = [
    {
      position: '1º',
      name: 'Red Canids',
      logo: 'red.png',
      overwall: 94,
      id: 3
    },
    {
      position: '2º',
      name: 'Pain Gaming',
      logo: 'pain.png',
      overwall: 88,
      id: 3
    },
    {
      position: '3º',
      name: 'Los Grandes',
      logo: 'losgrandes.png',
      overwall: 83,
      id: 3
    },
    {
      position: '4º',
      name: 'INTZ',
      logo: 'intz.png',
      overwall: 80,
      id: 3
    },
    {
      position: '5º',
      name: 'LOUD',
      logo: 'loud.png',
      overwall: 78,
      id: 3
    },
    {
      position: '6º',
      name: 'Vivo Keyd',
      logo: 'keyd.png',
      overwall: 76,
      id: 3
    },
    {
      position: '7º',
      name: 'Fluxo',
      logo: 'fluxo.png',
      overwall: 70,
      id: 3
    },
    {
      position: '8º',
      name: 'Liberty',
      logo: 'liberty.png',
      overwall: 68,
      id: 3
    },
    {
      position: '9º',
      name: 'Kabum',
      logo: 'kabum.png',
      overwall: 65,
      id: 3
    },
    {
      position: '10º',
      name: 'FURIA',
      logo: 'furia.png',
      overwall: 63,
      id: 3
    },
  ]

}
