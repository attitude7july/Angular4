import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../services/product.service";
@Component({
templateUrl:"product-list.component.html",
styleUrls:["./product-list.css"]
})
//life cycle hook OnInit
export class ProductListComponent implements OnInit{

  errorMessage:string;
  star:string="";
  pageTitle:string ="Product List";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  _listFilter:string;
  private _productRepository:ProductService;
  get listFilter():string{

    return this._listFilter;
  }
  set listFilter(value:string){

    this._listFilter=value;
    this.filteredProducts=this._listFilter?this.performFilter(this._listFilter):this.products;
  }
  constructor(private productService :ProductService){
    this._productRepository=productService;
  }
  filteredProducts:IProduct[];
  products:IProduct[]=[];
toggleImage():void{

this.showImage=!this.showImage;


};
ngOnInit():void{
console.log("init");
this._productRepository.getProducts().subscribe(products=>{
  this.products=products;
  this.filteredProducts=this.products;
},
  error=>this.errorMessage=<any>error);

};
performFilter(filterBy:string):IProduct[]{
filterBy=filterBy.toLowerCase();
return this.products.filter((product:IProduct)=>
     product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
};

onRatingClick(message:string):void{
this.star=message;
}
}
