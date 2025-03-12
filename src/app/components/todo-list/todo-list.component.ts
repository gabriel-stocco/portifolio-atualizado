import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tarefa: String = '';
  listaTarefas: Array<any> = [];

  ngOnInit(): void {
    this.getLista();
  }

  add(): void {
    if (this.tarefa.split(' ').join('') !== '') {
      this.listaTarefas.push({
        tarefa: this.tarefa[0].toUpperCase() + this.tarefa.substring(1),
        checked: false,
      });
      this.atualizarLista();
    }
    this.tarefa = '';
  }

  check(i: number): void {
    if (this.listaTarefas[i].checked === false) {
      this.listaTarefas[i].checked = true;
    } else {
      this.listaTarefas[i].checked = false;
    }
    this.atualizarLista();
  }

  deletar(i: number, n: number) {
    this.listaTarefas.splice(i, n);
    this.atualizarLista();
  }

  atualizarLista() {
    localStorage.setItem('Todo-list', JSON.stringify(this.listaTarefas));
    this.getLista();
  }

  getLista() {
    this.listaTarefas = JSON.parse(localStorage.getItem('Todo-list') || '[]');
  }
}
