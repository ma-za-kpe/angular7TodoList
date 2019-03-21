import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent, StrikethroughDirective, DateCountPipe, TodoFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
