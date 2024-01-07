import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is your personalized dashboard content.</p>
      <button (click)="refreshData()">Refresh Data</button>
      <ul>
        <li *ngFor="let item of dashboardItems">{{ item }}</li>
      </ul>
    </div>
  `,
})
export class DashboardComponent {
  dashboardItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

  refreshData() {
    // Simulate fetching updated data from a backend or another source
    // In a real application, you would likely make an HTTP request
    this.dashboardItems = this.generateRandomData();
  }

  private generateRandomData(): string[] {
    // Generate some random data for demonstration purposes
    return Array.from({ length: 5 }, (_, index) => `New Item ${index + 1}`);
  }
}
