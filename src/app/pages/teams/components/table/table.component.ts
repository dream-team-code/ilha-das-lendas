import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from 'src/app/models/time';
import { TeamMockService } from 'src/app/services/team-mock.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  public teams$: Observable<Time[]> = this.teamService.getAll();

  constructor(private teamService: TeamMockService) { }

  ngOnInit(): void { }


}
