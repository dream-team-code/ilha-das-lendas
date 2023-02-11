import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss']
})
export class RowTableComponent implements OnInit {

  @Input() public isHeader: boolean = false;
  public teams: any = {
    position: 1,
    name: 'Red Canids',
    logo: 'red.png',
    overwall: 88,
    id: 3
  }

  constructor() { }

  ngOnInit(): void {
  }

}
