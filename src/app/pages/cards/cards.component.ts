import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @ViewChild("cards") public cards: ElementRef<HTMLElement> = {} as ElementRef<HTMLElement>;

  ngOnInit(): void {
    setTimeout(() => {
      this.cards?.nativeElement?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 0);
  }

}
