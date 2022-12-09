import { Router } from '@angular/router';
import {TokenStorageService } from './../../services/token-storage-service.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
const USER_KEY = 'auth-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  basePath
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  users:any
  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router,
    ) {
      this.basePath = window.location.host.includes('localhost') ? '' : '/app-cmtc';

     }

  ngOnInit(): void {

    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    // this.router.navigate(["/products"]);
    this.reloadPage()
    }
  }

  onSubmit(): void {

    let checkuser=this.authService.login(this.form)
    // .subscribe(
    //   data => {
        // console.log(data);
        // this.tokenStorage.saveToken(data.token);
        if(checkuser){
          // let user=this.authService.findByUsername(this.form.username)
          console.log(checkuser);

          this.tokenStorage.saveUser(checkuser);
          //   ;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        }else{
          this.router.navigate(["/auth/login"]);
        }
    //   },
    //   err => {

    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }
  reloadPage(): void {
    if(this.roles){
      if(this.roles[0]=="ROLE_TECHNICIEN"){
        this.router.navigate(["/sorties"]);
      }else{
        this.router.navigate(["/products"]);
      }
    }else{
      this.router.navigate(["/auth/login"]);

    }

}
}
