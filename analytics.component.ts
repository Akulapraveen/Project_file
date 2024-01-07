import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  template: `
    <div>
      <h2>Link Analytics</h2>
      <button (click)="fetchAnalyticsData()">Fetch Analytics Data</button>
      <ul *ngIf="analyticsData.length > 0">
        <li *ngFor="let item of analyticsData">{{ item }}</li>
      </ul>
      <div *ngIf="analyticsData.length === 0">No analytics data available.</div>
    </div>
  `,
})
export class AnalyticsComponent implements OnInit {
  analyticsData: string[] = [];

  ngOnInit() {
    
  }

  fetchAnalyticsData() {
    // Simulate fetching analytics data from a backend or another source
    // In a real application, you would likely make an HTTP request
    this.analyticsData = this.generateDummyAnalyticsData();
  }

  private generateDummyAnalyticsData(): string[] {
    // Generate some dummy analytics data for demonstration purposes
    return Array.from({ length: 5 }, (_, index) => `Analytics Item ${index + 1}`);
  }
}
