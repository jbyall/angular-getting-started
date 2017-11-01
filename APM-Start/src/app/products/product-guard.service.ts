// auto generated with:
// >ng g s products/product-guard.service -m app.module
// *g - generate
// *s - service
// *products/product-guard.service - name
// *m - register service in app.module.ts file (this will add import and provider)

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

// Service used for route guarding (validating routes)
@Injectable()
export class ProductGuardService implements CanActivate {


    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;

        // if id is not a number (NaN) or < 1
        if (isNaN(id) || id < 1) {
            alert("Invalid product id:" + id);
            this._router.navigate(['/products']);
            return false; // abort route navigation
        };
        return true; // activate route
    }

}
