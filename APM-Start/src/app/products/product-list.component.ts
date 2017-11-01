import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    // selector not needed when routing configured
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

    // Can use these for inline html/css
    //template: `<div></div>`
    //styles: ['div {color: #337AB7}']
})

export class ProductListComponent implements OnInit {
    // Fields
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        // if there is a filter, performFilter. if not, return all products
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    // Properties
    pageTitle: string = 'JBYALL Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
    }

    // Methods
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    // OnInit
    // This is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked.
    // Invoked only once when the directive is instantiated.
    // see https://angular.io/api/core/OnInit
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
              products => {
                  this.products = products;
                  this.filteredProducts = this.products;
              },
              error => this.errorMessage = <any>error
            );
        
    }
}
