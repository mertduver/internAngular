import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [
    {
      name: "kenan",
      age: 35
    },
    {
      name: "mert",
      age: 22
    },
    {
      name: "ahmoş",
      age: 351
    },
    {
      name: "mamoş",
      age: 355
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
