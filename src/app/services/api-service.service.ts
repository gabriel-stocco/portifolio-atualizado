import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiRickAndMortyUrl = 'https://rickandmortyapi.com/api/character?page=';

  apiWeatherUrl =
    'https://api.weatherapi.com/v1/forecast.json?key=0524cc0a7bb34e26a84193646252003&q=';

  apiCRUD = 'https://sheetdb.io/api/v1/f70qm0bn2zv4l';

  constructor(private httpClient: HttpClient) {}

  //API RICK AND MORTY
  getCardService(pag: number): Observable<any> {
    return this.httpClient.get<any>(this.apiRickAndMortyUrl + pag);
  }

  //API WEATHER

  getWeatherAPI(city: string, dias: number): Observable<any> {
    return this.httpClient.get<any>(
      this.apiWeatherUrl + city + '&days=' + dias
    );
  }
  //API CRUD

  getPlanilhaService(): Observable<any> {
    return this.httpClient.get<any>(this.apiCRUD);
  }

  postPlanilhaService(body: string) {
    this.httpClient
      .post<any>(this.apiCRUD, { data: { body } })
      .subscribe((response) => {
        console.log(response);
      });
  }

  putPlanilhaService(body: string, id: number = 0) {
    this.httpClient
      .put<any>(this.apiCRUD + '/id/' + id, { data: { body } })
      .subscribe((response) => {
        console.log(response);
      });
  }

  delPlanilhaService(id: number = 0) {
    this.httpClient
      .delete<any>(this.apiCRUD + '/id/' + id)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
