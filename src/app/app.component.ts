import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { inject } from 'vue';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule ,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    SidebarComponent,
    FlexLayoutModule,
    MatGridListModule


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form: any;
  /*
  title = 'angular-material-demo';
  */

  tiles = [
    {text: 'One', cols: 3 , rows: 1},
    {text: 'Two', cols: 1 , rows: 2},
    {text: 'Three', cols: 1 , rows: 1},
    {text: 'Four', cols: 2 , rows: 1}

  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      favoriteFood: [''],
      dateOfBirth: ['']
    });
  }
}
