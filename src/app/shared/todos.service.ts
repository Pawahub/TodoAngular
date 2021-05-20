import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable()
export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(tap(todos => this.todos = todos));
  }

  public onToggle(id: number): void {
    const idx = this.todos.findIndex(item => item.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
