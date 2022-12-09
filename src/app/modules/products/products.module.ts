import { ProductEntresComponent } from './product-entres/product-entres.component';
import { EntresModule } from './../entres/entres.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
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
    ProductsListComponent,
    AddproductComponent,
    UpdateproductComponent,
    ProductEntresComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    EntresModule,
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
    ProductsListComponent,
    AddproductComponent,
    UpdateproductComponent,


  ],
  providers:[
    DatePipe,
  ]
})
export class ProductsModule { }
