import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Todo } from "../todo";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent implements OnInit {
  @Output() addGoal = new EventEmitter<Todo>();
  newTodo = new Todo(0, "", "", new Date());

  constructor() {}

  ngOnInit() {}

  submitGoal() {
    this.addGoal.emit(this.newTodo);
  }
}
