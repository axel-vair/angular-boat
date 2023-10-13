import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGard {
  constructor(private authService: AuthService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth'])
    }
    return true
  }
}
