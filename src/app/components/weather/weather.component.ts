import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Iweather } from './iweather';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  city = '';

  constructor(private apiServiceService: ApiServiceService) {}
  apiResult: Iweather | undefined;
  ngOnInit() {
    this.getForecast('sao%20paulo');
    console.log(this.apiResult);
  }
  ver() {
    console.log(this.apiResult);
  }
  async getForecast(city: string) {
    city.replace(' ', '%20');
    await this.apiServiceService.getWeatherAPI(city).subscribe((result) => {
      this.apiResult = result;
    });
    console.log(this.apiResult);
  }
}
