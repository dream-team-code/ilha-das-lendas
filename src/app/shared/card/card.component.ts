import { Component, Input, OnInit } from '@angular/core';
import { Jogador } from 'src/app/models/jogador';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  

  @Input() player!: Jogador;

  constructor() { }

  ngOnInit(): void {
  }

  get categoryBorder(): typeof CATEGORIA_BORDER {
    return CATEGORIA_BORDER; 
  }
}

export enum CATEGORIA_BORDER {
  "God" = "border-90",
  "Bom" = "border-80",
  "Mediano" = "border-70",
  "Bagre" = "border-60",
  "Academy" = "border-50",
}
