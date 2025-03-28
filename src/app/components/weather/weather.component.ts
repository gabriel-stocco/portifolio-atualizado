import { Component, resource } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Iweather } from './iweather';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  i: any;
  constructor(private apiServiceService: ApiServiceService) {}
  dataAtual = new Date();
  city = '';
  hoje = this.dataAtual.getDate() + '/' + (this.dataAtual.getMonth() + 1);

  apiResult: Iweather | undefined;

  ngOnInit() {
    this.getForecast('sao%20paulo');
  }

  // Fomata a data de ano/mês/dia para dia/mês/ano

  data?: String;
  dateObj?: Date;
  ptBrDate?: String;
  forecastDates: String[] = [];
  ver() {
    console.log(this.forecastDates);
  }
  // Fomata a data que bem da api no formato 'ano/mês/dia' para 'dia/mês/ano' e adiciona array forecastDates
  arrumarData() {
    for (let i = 0; i < 6; i++) {
      this.data = this.apiResult?.forecast.forecastday[i].date;
      this.dateObj = new Date(this.data + 'T00:00:00');
      this.ptBrDate = this.dateObj.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      });

      this.forecastDates.push(this.ptBrDate);
    }
  }
  getForecast(city: string) {
    city.replace(' ', '%20');
    this.apiServiceService.getWeatherAPI(city, 6).subscribe((result) => {
      this.apiResult = result;
      this.arrumarData();
    });
  }
}
