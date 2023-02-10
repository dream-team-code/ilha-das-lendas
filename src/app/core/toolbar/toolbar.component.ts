import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public isTop: boolean = true;

  @HostListener('window:scroll', ['$event']) 
  doSomething(event: any) {
    this.isTop = window.pageYOffset === 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
