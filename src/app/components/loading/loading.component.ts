import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  ngOnInit(): void {
    setTimeout(() => {
      window.location.href = '/crud';
    }, 1000);
  }
}
