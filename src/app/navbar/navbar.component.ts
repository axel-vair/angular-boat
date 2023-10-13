import {Component, OnInit} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatToolbarModule],
})

export class NavbarComponent implements OnInit{
  constructor() {
  }

  ngOnInit() {
  }
}
