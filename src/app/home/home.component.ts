import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() forecasts = [];

  @Output() toCity = new EventEmitter<{ whichCity: number }>()

  constructor() { }

  ngOnInit() {
    
  }

  clickToCity(cityId: number) {
    this.toCity.emit({ whichCity: cityId });
  }
}
