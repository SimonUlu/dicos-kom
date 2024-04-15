import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Firestore } from '@angular/fire/firestore'
import { SharedModule } from './shared/shared.module';
import { ShellComponent } from './shared/shell/shell.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, SharedModule, ShellComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dic';

  constructor(private fireStore: Firestore) {

  }
}
