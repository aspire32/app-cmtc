import { TokenStorageService } from './../services/token-storage-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchatGuard implements CanActivate {
  constructor(private token:TokenStorageService,private route:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roles:[]=this.token.getUser().roles;
      this.route.navigate([roles]);
      return false
    }

}
