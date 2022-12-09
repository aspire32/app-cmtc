import { TokenStorageService } from './../../services/token-storage-service.service';
import { Router } from '@angular/router';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  showProductForm=true;

  users:UserModel[]=[]



  constructor(private auth:AuthService,

    private router:Router,
    private tokenStorage:TokenStorageService
    ) {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(["/auth/login"]);
      }
    }


    ngOnInit(): void {
      this.loadProduct()


    }
    loadProduct(){
      this.auth.getAll().subscribe(
        users=>{
              let checkusers=localStorage.getItem("users");
              if(checkusers?.length||0>2){
                let localusers:any=localStorage.getItem("users");
                this.users=JSON.parse(localusers);
              }else{
                this.users=users;
                localStorage.setItem("users",JSON.stringify(this.users));
              }

        }
      );
    }

  showProductFormChange(value:boolean){
    this.showProductForm=value;
  //  document.getElementsByClassName("modal-backdrop").item(0)?.remove();
  //  document.getElementsByTagName("body").item(0)?.classList.remove("modal-open");
  //  document.getElementsByTagName("body").item(0)?.removeAttribute("style")
  }
  showForm(){
    this.showProductForm=true
  }

  delete(username:any){
    this.auth.deleteByUsername(username)
    // .subscribe(x=>{
      this.router.navigate(['/auth',"users","lists"]);
    this.loadProduct()
    // })
  }

}
