import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() forecasts = [];
  @Input() cityInd: number;

  public forecast;

  @Output() toHome = new EventEmitter<{ tohome: boolean }>()

  constructor() { }

  ngOnInit() {
    this.forecast = this.forecasts[this.cityInd];
  }

  clickToHome() {
    this.toHome.emit({ tohome: true });
  }

  prevCity() {
    this.cityInd -= 1;
    if (this.cityInd === -1) {
      this.cityInd = 4;
    }
    this.forecast = this.forecasts[this.cityInd];
  }

  nextCity() {
    this.cityInd += 1;
    if (this.cityInd === 5) {
      this.cityInd = 0;
    }
    this.forecast = this.forecasts[this.cityInd];
  }
}
