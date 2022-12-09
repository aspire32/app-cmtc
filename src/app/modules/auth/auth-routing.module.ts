import { AddUsersComponent } from './add-users/add-users.component';
import { DefaultComponent } from 'src/app/default/default/default.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: DefaultComponent,
  children:[
    { path: 'lists', component: ListUsersComponent },
    { path: 'add', component: AddUsersComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
