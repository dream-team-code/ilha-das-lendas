import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  
  constructor() {}

  @ViewChild("teams") public teams: ElementRef<HTMLElement> = {} as ElementRef<HTMLElement>;

  ngOnInit(): void {
    setTimeout(() => {
      this.teams?.nativeElement?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 0);
  }

}
