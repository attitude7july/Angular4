import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot):boolean{
  //snapshot
  let id =+route.url[1].path;
  if(isNaN(id)||id<1){
  this.router.navigate(['/products']);
    return false;
  };
    return true;
  };
}
