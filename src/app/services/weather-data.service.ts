import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { ForecastModel } from '../models/forecast.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<ForecastModel> {
    return this.http.get<ForecastModel>(environment.forecastWeatherURL + cityName + environment.urlKey)
      .pipe(catchError(err => {
        console.error(err)
        return EMPTY
      }));
  }

}