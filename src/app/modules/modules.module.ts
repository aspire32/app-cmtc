import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage-service.service';
import { AuthModule } from './auth/auth.module';
import { EntresModule } from './entres/entres.module';
import { SortiesService } from './services/sorties.service';
import { VendorsService } from './services/vendors.service';
import { VendorModel } from './models/vendor.model';
import { SortiesModule } from './sorties/sorties.module';
import { TechniciensService } from './services/techniciens.service';
import { TechniciensModule } from './techniciens/techniciens.module';
import { CategoriesModule } from './categories/categories.module';
import { FormsModule } from '@angular/forms';
import { CategriesService } from './services/categries.service';
import { ProductsService } from './services/products.service';
import { ProductsModule } from './products/products.module';
import { ClassesModule } from './classes/classes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default/default.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModulestRoutingModule } from './modules-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {  HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VendorsModule } from './vendors/vendors.module';



@NgModule({
  declarations: [
    DefaultComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardModule,
    ClassesModule,
    ModulestRoutingModule,
    ProductsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    CategoriesModule,
    FontAwesomeModule,
    TechniciensModule,
    SortiesModule,
    VendorsModule,
    EntresModule,
    AuthModule,
  ],
  exports:[
    DefaultComponent,
  ],
  providers:[
    ProductsService,
    CategriesService,
    TechniciensService,
    VendorsService,
    SortiesService,
    TokenStorageService,
    AuthService
  ]
})
export class ModulesModule { }
