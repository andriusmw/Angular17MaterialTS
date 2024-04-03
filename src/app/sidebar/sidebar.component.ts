import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule

  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
