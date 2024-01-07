// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbActionsModule, NbSidebarModule } from '@nebular/theme'; // Add NbSidebarModule here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortLinkComponent } from './Component/shortlink.component';
import { LinkDetailsComponent } from './link-details/link-details.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortLinkComponent,
    LinkDetailsComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbSidebarModule.forRoot(), // Add this line to import NbSidebarModule
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
