import {Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  public loading = true;
  public searchString = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.getTodos()
      .pipe(delay(1000))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id);
  }
}
