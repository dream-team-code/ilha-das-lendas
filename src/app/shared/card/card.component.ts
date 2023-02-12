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
  "God" = "90-border",
  "Bom" = "80-border",
  "Mediano" = "70-border",
  "Bagre" = "60-border",
  "Academy" = "50-border",
}
