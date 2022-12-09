import { UserModel } from './../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials:any): any {
    // return this.http.post('http://localhost:8080/auth/signin', {
    //   username: credentials.username,
    //   password: credentials.password
    // }, httpOptions);
    this.getAll().subscribe(
      usrs=>{
        localStorage.setItem("users",JSON.stringify(usrs))
      }
    );

    let localusers:any=localStorage.getItem("users");
    let users:UserModel[]=JSON.parse(localusers)
console.log(users);
      let user=users.find(x => x.username == credentials.username)||{};
    if (user.password == credentials.password){
      return user
    }else {
      return {}
    }
  }

  register(user:any,role:string) {
    console.log(user.password);

    // return this.http.post("http://localhost:8080/auth/signup", {
    //   username: user.username,
    //   email: user.email,
    //   password: user.password,
    //   role:[
    //     role
    //   ]
    // }, httpOptions);

    let localusers:any=localStorage.getItem("users");
    let users:any[]=JSON.parse(localusers)

    users.push({
      username: user.username,
      email: user.email,
      password: user.password,
      role:[
        role
      ]
    })
    localStorage.setItem("users",JSON.stringify(users))
  }
  getAll():Observable<UserModel[]>{
    return this.http
    .get<UserModel[]>
    ('./assets/jsons/users.json')
  }

  deleteByUsername(userName:string){
    // return this.http
    // .delete<any>
    // (`http://localhost:8080/users/${userName}`)

    let localusers:any=localStorage.getItem("users");
    let users:any[]=JSON.parse(localusers)
    // let searchusers= users.find(x => x.username == userName)||{};
    let index= users.find(x => x.username == userName)

    if (index !== -1) {
      users.splice(index, 1);
    }

    localStorage.setItem("users",JSON.stringify(users))


    return users[index];
  }

  findByUsername(userName:string){
    // return this.http
    // .delete<any>
    // (`http://localhost:8080/users/${userName}`)

    let localusers:any=localStorage.getItem("users");
    let users:any[]=JSON.parse(localusers)
    // let searchusers= users.find(x => x.username == userName)||{};
    let index= users.find(x => x.username == userName)



    return users[index];
  }
}
