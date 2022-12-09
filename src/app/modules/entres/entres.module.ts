import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EntresRoutingModule } from './entres-routing.module';
import { EditEntresComponent } from './edit-entres/edit-entres.component';
import { AddEntresComponent } from './add-entres/add-entres.component';
import { ListEntresComponent } from './list-entres/list-entres.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, } from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    EditEntresComponent,
    AddEntresComponent,
    ListEntresComponent
  ],
  imports: [
    CommonModule,
    EntresRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,

    ReactiveFormsModule,
    NgSelectModule,
    Ng2FlatpickrModule,

    NgxMatDatetimePickerModule, NgxMatTimepickerModule,

    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,MatNativeDateModule,
    MatExpansionModule
  ],
  exports:[
    EditEntresComponent,
    AddEntresComponent,
    ListEntresComponent
  ],
  providers:[
    DatePipe
  ]
})
export class EntresModule { }
