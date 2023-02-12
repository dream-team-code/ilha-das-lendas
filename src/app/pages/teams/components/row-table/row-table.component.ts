import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss']
})
export class RowTableComponent implements OnInit {

  @Input() public isHeader: boolean = false;
  @Input() public team: any | undefined = undefined;
  @Input() public position!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
