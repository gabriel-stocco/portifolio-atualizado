export interface Iweather {
  current: Icurrent;
  forecast: { forecastday: IforecastDay[] };
  location: { name: string };
}

interface Icurrent {
  condition: { text: string; icon: String };
  humidity: number;
  temp_c: number;
  wind_kph: number;
}

interface IforecastDay {
  date: String;
  day: {
    condition: { text: String };
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
  };
}
