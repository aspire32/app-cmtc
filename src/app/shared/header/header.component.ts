import { Router } from '@angular/router';
import { TokenStorageService } from './../../modules/services/token-storage-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  logout(){
    this.token.signOut();
    this.router.navigate(["/auth/login"]);
    console.log(this.token.getUser());

  }

}
