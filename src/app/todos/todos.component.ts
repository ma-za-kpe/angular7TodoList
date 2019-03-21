import { Component, OnInit } from "@angular/core";

import { Todo } from "../todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos = [
    new Todo(
      1,
      "Watch Finding Nemo",
      "Find an online version and watch merlin find his son",
      new Date(2018, 3, 14)
    ),
    new Todo(
      2,
      "Buy Cookies",
      "I have to buy cookies for the parrot",
      new Date(2019, 5, 14)
    ),
    new Todo(
      3,
      "Get new Phone Case",
      "Diana has her birthday coming up soon",
      new Date(2019, 4, 14)
    ),
    new Todo(
      4,
      "Get Dog Food",
      "Pupper likes expensive sancks",
      new Date(2019, 6, 14)
    ),
    new Todo(5, "Solve math homework", "Damn Math", new Date(2018, 6, 4)),
    new Todo(
      6,
      "Plot my world domination plan",
      "Cause I am an evil overlord",
      new Date(2019, 7, 1)
    )
  ];

  constructor() {}

  ngOnInit() {}

  toogleDetails(index) {
    this.todos[index].showDescription = !this.todos[index].showDescription;
  }

  deleteTodo(isComplete, index) {
    if (isComplete) {
      this.todos.splice(index, 1);
    }
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.todos[index].title}`
      );

      if (toDelete) {
        this.todos.splice(index, 1);
      }
    }
  }

  addNewTodo(todo) {
    let todoLength = this.todos.length;
    todo.id = todoLength + 1;
    todo.completeDate = new Date(todo.completeDate);
    this.todos.push(todo);
  }
}
