import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SortiesRoutingModule } from './sorties-routing.module';
import { AddSortieComponent } from './add-sortie/add-sortie.component';
import { ListSortiesComponent } from './list-sorties/list-sorties.component';
import { UpdateSortieComponent } from './update-sortie/update-sortie.component';
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
    AddSortieComponent,
    ListSortiesComponent,
    UpdateSortieComponent
  ],
  imports: [
    CommonModule,
    SortiesRoutingModule,
    FormsModule,
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
    AddSortieComponent,
    ListSortiesComponent,
    UpdateSortieComponent
  ],
  providers:[
    DatePipe
  ]
})
export class SortiesModule { }
