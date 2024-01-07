// src/app/link-details/link-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.css'],
})
export class LinkDetailsComponent implements OnInit {
  linkId: string="";
  linkDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
this.route.paramMap.subscribe((params) => {
  this.linkId = params.get('id') || '';
  this.loadLinkDetails();
});

  }

  loadLinkDetails() {
    this.apiService.getLinkDetails(this.linkId).subscribe(
      (data) => {
        this.linkDetails = data;
      },
      (error) => {
        console.error('Error loading link details:', error);
        // Handle error as needed, e.g., show a message to the user
      }
    );
  }
}
