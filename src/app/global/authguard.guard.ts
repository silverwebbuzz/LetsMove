import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  constructor(private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(localStorage.getItem('permission'));
    if (currentUser) {
        // check if route is restricted by role
        const userpermissionArray = currentUser.permission;
        userpermissionArray.push('home');
        const currentMethod = route.data.moduleName;
        if(userpermissionArray && userpermissionArray.indexOf(currentMethod) !== -1){
            return true;
        }else{
            this.router.navigate(['/error'])
        }
       
    }else{
        this.router.navigate(['/landing']);
    }

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // return false;
}

  
}
