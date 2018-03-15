import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { ProductListComponent } from '../products/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from '../services/product-guard.service';
import { WelcomeComponent } from '../home/welcome.component';
import { ProductService } from '../services/product.service';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
