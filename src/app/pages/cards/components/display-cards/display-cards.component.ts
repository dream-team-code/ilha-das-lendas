import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Jogador } from 'src/app/models/jogador';
import { Time } from 'src/app/models/time';
import { PlayerMockService } from 'src/app/services/player-mock.service';
import { TeamMockService } from 'src/app/services/team-mock.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  public alias: string = '';
  public players$: Observable<Jogador[]> = {} as Observable<Jogador[]>;
  public routeSub: Subscription;
  public team$: Observable<Time> = {} as Observable<Time>;

  constructor(private playerService: PlayerMockService,
              private activatedRoute: ActivatedRoute,
              private teamService: TeamMockService) {
                this.routeSub = this.activatedRoute.params.subscribe(params => {
                  this.alias = params['id'];
                  this.players$ = this.playerService.getTeamPlayers(this.alias);
                  this.team$ = this.teamService.getByAlias(this.alias)
                });
               }

  ngOnInit(): void {
    
  }

}
