// src/app/analytics/analytics.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  analyticsData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAnalyticsData();
  }

  loadAnalyticsData(): void {
    this.apiService.getLinkAnalytics().subscribe(
      (data) => {
        this.analyticsData = data;
      },
      (error) => {
        console.error('Error loading analytics data:', error);
      }
    );
  }
}
