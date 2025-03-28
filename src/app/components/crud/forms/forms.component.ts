import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../services/api-service.service';
import { IDados } from '../IDados';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  formulario!: FormGroup;
  usuarioAtual: IDados | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      id: 'INCREMENT',
      nome: this.formBuilder.control(''),
      sobrenome: this.formBuilder.control(''),
      idade: this.formBuilder.control(''),
      profissao: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
    });

    if (localStorage.getItem('updateCRUD')) {
      this.usuarioAtual = JSON.parse(
        localStorage.getItem('updateCRUD') || '[]'
      );
      this.formulario.setValue({
        id: this.usuarioAtual?.id,
        nome: this.usuarioAtual?.nome,
        sobrenome: this.usuarioAtual?.sobrenome,
        idade: this.usuarioAtual?.idade,
        profissao: this.usuarioAtual?.profissao,
        email: this.usuarioAtual?.email,
      });
    }
  }

  enviarFormulario() {
    if (localStorage.getItem('updateCRUD')) {
      //update
      this.service.putPlanilhaService(
        this.formulario.value,
        this.usuarioAtual?.id
      );
    } else {
      this.service.postPlanilhaService(this.formulario.value);
      localStorage.removeItem('updateCRUD');
    }
    window.location.href = '/loading';
  }
}
