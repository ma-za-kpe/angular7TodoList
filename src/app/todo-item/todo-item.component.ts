import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  todoDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
}
