import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthModalService } from "src/app/services/auth-modal.service";
import { AuthService } from "src/app/services/auth.service";

@Injectable({ providedIn: 'root' })

export class AuthAccess implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loginRequired = route.data['loginRequired'];
        if (loginRequired === undefined || this.authService.isLoggedIn === loginRequired) {
            return true;
        }
        return this.router.createUrlTree([`/403-forbidden`]);
    }
}
