// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a simple home page. Customize it as per your requirements.</p>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
