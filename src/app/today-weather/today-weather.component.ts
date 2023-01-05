import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from '../models/forecast.model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent {

@Input() weatherToday: ForecastModel
cloudImage: string = 'http://openweathermap.org/img/wn/10d@2x.png'
description:string

  constructor() { }

}
