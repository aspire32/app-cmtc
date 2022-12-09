import { AchatGuard } from './guards/achat.guard';
import { AdminGuard } from './guards/admin.guard';
import { DefaultComponent } from './../default/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch: 'full',
  }
,{
  path:'products',component:DefaultComponent,
  loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
},{
  path:'categories',component:DefaultComponent,
  loadChildren:()=>import('./categories/categories.module').then(m=>m.CategoriesModule)
},{
  path:'technicians',component:DefaultComponent,
  loadChildren:()=>import('./techniciens/techniciens.module').then(m=>m.TechniciensModule)
},{
  path:'sorties',component:DefaultComponent,
  loadChildren:()=>import('./sorties/sorties.module').then(m=>m.SortiesModule)
},{
  path:'vendors',component:DefaultComponent,
  loadChildren:()=>import('./vendors/vendors.module').then(m=>m.VendorsModule)
}
,{
  path:'entres',component:DefaultComponent,
  loadChildren:()=>import('./entres/entres.module').then(m=>m.EntresModule)
}
,{
  path:'auth',
  loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulestRoutingModule { }
