import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ForecastModel } from './models/forecast.model';
import { WeatherDataService } from './services/weather-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  searchInput = new FormControl();
  forecastModel: ForecastModel;
  imageURL: string = "url(https://source.unsplash.com/1600x900/?landscape)"

  constructor(private weatherServise: WeatherDataService) { }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(debounceTime(500),
        switchMap(cityName => this.weatherServise.getWeatherData(cityName)))
      .subscribe({
        next: (res) => {
          this.forecastModel = res;

          console.dir(this.forecastModel)
        }
      });
  }


}