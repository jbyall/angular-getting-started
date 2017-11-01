// For dependency injection
import { Injectable } from '@angular/core';

// For calls to API/web service
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// For exception handling
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

// For custom types
import { IProduct } from "./product";

//This service is a wrapper for making http calls
// to an API/web service
@Injectable()
export class ProductService {
    // In real-world application, this would be a URI to an API
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}

    // This method is called by any class that needs this data
    getProducts(): Observable<IProduct[]>{
        // Get data from API/web service
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
