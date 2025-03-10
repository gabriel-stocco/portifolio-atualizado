import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Output() pagAtt: EventEmitter<any> = new EventEmitter();
  @Input() pagNum!: number;

  passPageEmit(pag: number) {
    this.pagAtt.emit(pag);
  }
}
