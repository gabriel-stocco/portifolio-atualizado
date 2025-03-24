export interface Iweather {
  current: Icurrent;
  forecast: { forecastDay: [IforecastDay] };
  location: { name: string };
}

export interface Icurrent {
  condition: { text: string };
  humidity: number;
  temp_c: number;
  wind_kph: number;
}

export interface IforecastDay {
  day: {
    condition: { text: String };
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
  };
}
