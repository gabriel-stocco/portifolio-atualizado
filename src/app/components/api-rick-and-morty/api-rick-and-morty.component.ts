import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-api-rick-and-morty',
  imports: [],
  templateUrl: './api-rick-and-morty.component.html',
  styleUrl: './api-rick-and-morty.component.css',
})
export class ApiRickAndMortyComponent {
  constructor(private apiCard: ApiServiceService) {}
  characters: Array<any> = [];

  ngOnInit() {
    this.getCard(1);
  }

  pagNum: number = 1;

  passPageEmit(pag: number) {
    this.getCard(pag + this.pagNum);
  }

  passPage(pag: number) {
    if (pag === 0) {
      this.pagNum = pag + 1;
    } else if (pag == 42) {
      this.pagNum = pag;
    } else if (this.pagNum + pag >= 1 && this.pagNum + pag <= 42) {
      this.pagNum += pag;
    }
    this.getCard(this.pagNum);
  }

  getCard(pag: number) {
    this.characters.splice(0, this.characters.length);
    this.pagNum = pag;
    console.log(this.pagNum);
    return this.apiCard.getCardService(pag).subscribe((result) => {
      this.characters = result.results;
    });
  }
}
