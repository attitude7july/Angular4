import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string ="Product Detail";
  product :IProduct;
  constructor(private _route:ActivatedRoute,private _router:Router) {

//snapshot
console.log(this._route.snapshot.paramMap.get("id"));

//observable

  }

  ngOnInit() {

    //+ sign is used to convert id to number
    let id=+this._route.snapshot.paramMap.get("id");
    //2015 back text `
    this.pageTitle +=`${id}`;
    this.product= {
      "productId": id,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    };
  };

  onBack():void{

    this._router.navigate(['./products']);
  }

}
