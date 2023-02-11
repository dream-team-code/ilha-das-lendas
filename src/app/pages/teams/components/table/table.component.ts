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
      position: 1,
      name: 'Red Canids',
      logo: 'red.png',
      overwall: 94,
      id: 3
    },
    {
      position: 2,
      name: 'Pain Gaming',
      logo: 'pain.png',
      overwall: 88,
      id: 3
    },
    {
      position: 3,
      name: 'Los Grandes',
      logo: 'losgrandes.png',
      overwall: 83,
      id: 3
    },
    {
      position: 4,
      name: 'INTZ',
      logo: 'intz.png',
      overwall: 80,
      id: 3
    },
    {
      position: 5,
      name: 'LOUD',
      logo: 'loud.png',
      overwall: 78,
      id: 3
    },
    {
      position: 6,
      name: 'Vivo Keyd',
      logo: 'keyd.png',
      overwall: 76,
      id: 3
    },
    {
      position: 7,
      name: 'Fluxo',
      logo: 'fluxo.png',
      overwall: 70,
      id: 3
    },
    {
      position: 8,
      name: 'Liberty',
      logo: 'liberty.png',
      overwall: 68,
      id: 3
    },
    {
      position: 9,
      name: 'Kabum',
      logo: 'kabum.png',
      overwall: 65,
      id: 3
    },
    {
      position: 10,
      name: 'FURIA',
      logo: 'furia.png',
      overwall: 63,
      id: 3
    },
  ]

}
