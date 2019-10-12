import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  toDoList: any[] = [];
  greeting = this.welcomeGreeting();

  constructor() {}

  welcomeGreeting() {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greeting = "";

    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours <= 17) {
      greeting = "Good Afternoon";
    } else if (hours >= 17 && hours <= 24) {
      greeting = "Good Evening";
    } else {
      greeting = "Hello There";
    }
    return greeting;
  }

  addATodo(form: NgForm): void {
    this.toDoList.push({
      todo: form.value.todoItem,
      completed: false
    });
    form.reset();
  }

  deleteATodo(index: number): void {
    this.toDoList.splice(index, 1);
  }

  ngOnInit() {}
}
