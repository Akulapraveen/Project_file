// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortLinkComponent } from './Component/shortlink.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LinkDetailsComponent } from './link-details/link-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-link', component: ShortLinkComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'link-details', component: LinkDetailsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
