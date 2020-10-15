import { AdminService } from './admin/admin.service';
import { AdminComponent } from './admin/admin.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  private adminService:AdminService
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean {
      var check=localStorage.getItem('status')
      var check1=localStorage.getItem('fname')
    if (check == 'true' && check1=='Tijesu' ){
      return true
    }else{
      return false
    }
  }
  
}
