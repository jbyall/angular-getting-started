// auto generated with:
// > ng g m products/product --flat -m app.module
// *g - generate
// *m - module
// --flat - prevents cli from creating new folder
// *-m app.module - adds import to app.module.ts
import { NgModule } from '@angular/core';
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { RouterModule } from "@angular/router";
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
      // Tells router module not to reregister ProductGuardService
      RouterModule.forChild([
          { path: 'products', component: ProductListComponent },
          {
              path: 'products/:id',
              canActivate: [ProductGuardService],
              component: ProductDetailComponent
          },
      ]),
      SharedModule
  ],
  declarations: [
      ProductListComponent,
      ProductDetailComponent,
      ConvertToSpacesPipe,
  ],
  providers: [
      ProductService,
      ProductGuardService
  ] 
})
export class ProductModule { }
