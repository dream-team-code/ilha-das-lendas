import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from 'src/app/models/jogador';
import { PlayerMockService } from 'src/app/services/player-mock.service';

@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.scss']
})
export class DreamTeamComponent implements OnInit {

  public players$: Observable<Jogador[]> = this.playerService.getDreamTeam();  

  constructor(private playerService: PlayerMockService) { }

  ngOnInit(): void {
  }

}
