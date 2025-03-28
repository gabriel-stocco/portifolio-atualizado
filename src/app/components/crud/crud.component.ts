import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { IDados } from './IDados';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  constructor(private apiServiceService: ApiServiceService) {}

  dados!: IDados[];
  usuarioAtual: IDados | undefined;

  showLoading: boolean = false;

  ngOnInit(): void {
    this.getPlanilha();
  }

  getPlanilha() {
    this.apiServiceService.getPlanilhaService().subscribe((result) => {
      this.dados = result;
    });
  }

  updatePlanilha(id: number) {
    this.usuarioAtual = this.dados.find((usuario) => {
      return usuario.id === id;
    });
    localStorage.setItem('updateCRUD', JSON.stringify(this.usuarioAtual));
  }

  criarUsuario() {
    localStorage.removeItem('updateCRUD');
    window.location.href = '/crud/formulario';
  }

  delUsuario(id: number) {
    this.apiServiceService.delPlanilhaService(id);
    window.location.href = '/loading';
  }
}
