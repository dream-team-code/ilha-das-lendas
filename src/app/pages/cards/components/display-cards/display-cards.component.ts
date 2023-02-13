import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Jogador } from 'src/app/models/jogador';
import { PlayerMockService } from 'src/app/services/player-mock.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  public alias: string = '';
  public players$: Observable<Jogador[]> = {} as Observable<Jogador[]>;
  public routeSub: Subscription;

  constructor(private playerService: PlayerMockService,
              private activatedRoute: ActivatedRoute) {
                this.routeSub = this.activatedRoute.params.subscribe(params => {
                  this.alias = params['id'];
                  this.players$ = this.playerService.getTeamPlayers(this.alias);
                });
               }

  ngOnInit(): void {
    
  }

}
