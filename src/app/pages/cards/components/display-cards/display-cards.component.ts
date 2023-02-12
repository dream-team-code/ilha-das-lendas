import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  public coach: any = {
      nick: "StarDust",
      nome: "Son Seok-hee",
      pontos: 92,
      time: "losgrandes",
      role: 'coach',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'stardust'
  }

  public cards: any[] = [
    {
      nick: "HiRit",
      nome: "SHIN TAE-MIN",
      pontos: 91,
      time: "losgrandes",
      role: 'top',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'hirit',
      mvp: 0,
      bagre: 0,
      diff: '-2'
    },
    {
      nick: "Ranger",
      nome: "FILIPE BROMBILLA",
      pontos: 90,
      time: "losgrandes",
      role: 'jg',
      pais: 'br',
      categoria: '90-border',
      imagem: 'ranger',
      mvp: 2,
      bagre: 1,
      diff: '2'
    },
    {
      nick: "Lava",
      nome: "TAEHUN KIM",
      pontos: 90,
      time: "losgrandes",
      role: 'mid',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'lava',
      mvp: 1,
      bagre: 0,
      diff: '-2'
    },
    {
      nick: "Netuno",
      nome: "LUCAS FENSTERSEIFER",
      pontos: 89,
      time: 'losgrandes',
      role: 'adc',
      pais: 'br',
      categoria: '80-border',
      imagem: 'netuno',
      mvp: 2,
      bagre: 1,
      diff: '9'
    },
    {
      nick: "zay",
      nome: "VINICIUS VIANA",
      pontos: 82,
      time: "losgrandes",
      role: 'sup',
      pais: 'br',
      categoria: '80-border',
      imagem: 'zay',
      mvp: 0,
      bagre: 1,
      diff: '11'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
