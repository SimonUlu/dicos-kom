import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="is-flex is-justify-content-flex-end">
        <a class="button mr-2" *ngFor="let item of navigation" mat-button [routerLink]="item.link">{{item.text}}</a>

        <a class="button mr-2" *ngIf="!userIsAuthenticated" mat-button routerLink="/views/login">🔑 Login</a>
        <a class="button mr-2" *ngIf="userIsAuthenticated" mat-button routerLink="/views/login">🔑 Logout</a>
    </div>
  `,
  styles: ``
})
export class DesktopNavComponent implements OnInit{

  @Input() userIsAuthenticated: boolean = false;
  @Input() navigation: any[] = [];

  ngOnInit(): void {
      
  }
}
