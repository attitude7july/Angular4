import  {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./products/product-list.component"
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe"
import {StarComponent} from "./shared/star.component"
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './services/product-guard.service';
@NgModule({
  declarations: [WelcomeComponent,AppComponent,ProductListComponent,ConvertToSpacesPipe,StarComponent, ProductDetailComponent],
  imports: [BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot([
//set routing here
{path:"products",component:ProductListComponent},
{path:"products/:id",
canActivate:[ProductGuardService],
component:ProductDetailComponent},
{path:"welcome",component:WelcomeComponent},
{path:" ",redirectTo:"welcome",pathMatch:"full"},
{path:"*",redirectTo:"welcome",pathMatch:"full"}
  ])],
  providers: [ProductService, ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
