import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.scss']
})
export class DreamTeamComponent implements OnInit {

  public cards: any[] = [
    {
      nick: "Lonely",
      nome: "GYUJUN HAN",
      pontos: 94,
      time: "kabum",
      role: 'top',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'lonely'
    },
    {
      nick: "Aegis",
      nome: "GABRIEL LEMOS",
      pontos: 91,
      time: "red",
      role: 'jg',
      pais: 'br',
      categoria: '90-border',
      imagem: 'aegis'
    },
    {
      nick: "Lava",
      nome: "TAEHUN KIM",
      pontos: 90,
      time: "losgrandes",
      role: 'mid',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'lava'
    },
    {
      nick: "TitaN",
      nome: "ALEXANDRE DOS SANTOS",
      pontos: 93,
      time: 'red',
      role: 'adc',
      pais: 'br',
      categoria: '90-border',
      imagem: 'titan'
    },
    {
      nick: "Kuri",
      nome: "WONYOUNG CHOI",
      pontos: 91,
      time: "red",
      role: 'sup',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'kuri'
    },
    {
      nick: "StarDust",
      nome: "Son Seok-hee",
      pontos: 92,
      time: "losgrandes",
      role: 'coach',
      pais: 'kr',
      categoria: '90-border',
      imagem: 'stardust'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
