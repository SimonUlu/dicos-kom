import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DesktopNavComponent } from '../../components/desktop-nav/desktop-nav.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SharedModule, CommonModule, DesktopNavComponent, FooterComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent implements OnInit{

  userIsAuthenticated: boolean = false;
  private authStatusSub?: Subscription;

  navigation = [
    {text: "🍱 Home", link: "/"},
    {text: "⚡ List", link: "/views/list"}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), 
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

  ngOnInit(): void {
      this.authStatusSub = this.authService.getAuthState().subscribe(authState => {
        this.userIsAuthenticated = authState;
      })

      console.log(this.userIsAuthenticated);
  }

  signOut() {
    this.authService.logOutUser();
  }


}
