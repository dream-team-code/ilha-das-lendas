import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from 'src/app/models/jogador';
import { PlayerMockService } from 'src/app/services/player-mock.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  public players$: Observable<Jogador[]> = this.playerService.getTeamPlayers("losgrandes")

  constructor(private playerService: PlayerMockService) { }

  ngOnInit(): void {
  }

}
