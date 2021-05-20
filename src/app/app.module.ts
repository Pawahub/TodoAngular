import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodosFilterPipe} from './shared/todos-filter.pipe';
import {TodosService} from './shared/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
