import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  constructor(private apiServiceService: ApiServiceService) {}
  forecastDays: string = '';
  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    return this.apiServiceService.getWeatherAPI().subscribe((result) => {
      this.forecastDays = result.forecast.forecastday;
      console.log(this.forecastDays);
    });
  }
}
