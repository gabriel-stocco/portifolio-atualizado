import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-api-rick-and-morty',
  imports: [PaginationComponent],
  templateUrl: './api-rick-and-morty.component.html',
  styleUrl: './api-rick-and-morty.component.css',
})
export class ApiRickAndMortyComponent {
  constructor(private apiCard: ApiServiceService) {}

  characters: Array<any> = [];

  ngOnInit(): void {
    this.getCard();
  }
  pagNum: number = 1;

  passPage(pag: number = 1) {
    if (pag === 0) {
      this.pagNum = pag + 1;
    } else if (pag == 42) {
      this.pagNum = pag;
    } else if (this.pagNum + pag >= 1 && this.pagNum + pag <= 42) {
      this.pagNum += pag;
    }
    this.getCard(this.pagNum);
  }

  getCard(pag: number = 1) {
    this.characters.splice(0, this.characters.length);
    this.apiCard.getCardService(pag).subscribe((result) => {
      this.characters = result.results;
    });
  }
}
