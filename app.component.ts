// src/app/app.component.ts
import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <nb-actions>
          <nb-action icon="nb-home" [routerLink]="['/']">Home</nb-action>
          <nb-action icon="nb-plus" [routerLink]="['/create-link']">Create Link</nb-action>
          <nb-action icon="nb-bar-chart" [routerLink]="['/analytics']">Analytics</nb-action>
        </nb-actions>
      </nb-layout-header>

      <nb-sidebar>
        <nb-menu [items]="menu"></nb-menu>
      </nb-sidebar>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AppComponent {
  menu: NbMenuItem[] = [
    {
      title: 'Menu Item 1',
      icon: 'nb-star',
      link: '/menu-item-1',
    },
    {
      title: 'Menu Item 2',
      icon: 'nb-heart',
      link: '/menu-item-2',
    },
    // Add more menu items as needed
  ];
}
