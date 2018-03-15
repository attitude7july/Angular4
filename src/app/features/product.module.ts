import { NgModule } from '@angular/core';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { ProductListComponent } from '../products/product-list.component';
import { ProductGuardService } from '../services/product-guard.service';
import { WelcomeComponent } from '../home/welcome.component';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      //set routing here
      {path:"products",component:ProductListComponent},
      {path:"products/:id",
      canActivate:[ProductGuardService],
      component:ProductDetailComponent},
        ]),
  ],

  providers:[ProductService,ProductGuardService]
})
export class ProductModule { }
