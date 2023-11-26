import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ContextService } from 'src/services/context/context';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly _contextService: ContextService,
        private readonly _router: Router) 
    {}

    canActivate(): boolean {
        return this.canActivateByLogin()
    }

    private canActivateByLogin(): boolean{
        const canAuthenticate = this._contextService.context?.isAuthenticated;
        if(!canAuthenticate)
            this._router.navigateByUrl('/login');
        
        return canAuthenticate;
    }
}