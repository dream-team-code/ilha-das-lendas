import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Jogador } from 'src/app/models/jogador';
import { PlayerMockService } from 'src/app/services/player-mock.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  public coach!: Jogador;

  public players$: Observable<Jogador[]> = this.playerService.getTeamPlayers("losgrandes").pipe(map(res => {
      
    this.coach = res.splice(res.length - 1)[0];

    return res
  }))  

  constructor(private playerService: PlayerMockService) { }

  ngOnInit(): void {
  }

}
