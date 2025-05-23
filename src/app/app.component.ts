import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule,MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatSidenav, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = false;


  constructor(private observer: BreakpointObserver) {}


  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
