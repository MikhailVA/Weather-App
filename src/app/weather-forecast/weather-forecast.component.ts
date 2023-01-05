import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ForecastModel } from '../models/forecast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  @Input() weatherHourly: ForecastModel

  columnsToDisplay = ['dt', 'main.temp', 'weather[0].description']

  constructor() { }

}
