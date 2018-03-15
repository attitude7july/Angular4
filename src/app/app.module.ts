import  {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './features/product.module';
import { WelcomeComponent } from './home/welcome.component';
@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    ],
  imports: [BrowserModule,FormsModule,HttpClientModule, ProductModule,
  RouterModule.forRoot([
{path:"welcome",component:WelcomeComponent},
{path:"",redirectTo:"welcome",pathMatch:"full"},
{path:"*",redirectTo:"welcome",pathMatch:"full"},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
