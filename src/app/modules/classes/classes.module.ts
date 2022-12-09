import { ClassesComponent } from './classes/classes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesRoutingModule } from './classes-routing.module';



@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  exports:[
    ClassesComponent
  ]
})
export class ClassesModule { }
