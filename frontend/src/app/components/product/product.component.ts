import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products!:Product[]
  productname!:any
  price!:any
  description!:any
  @ViewChild('card') card!:ElementRef
  constructor(private productService:ProductService){}
  ngOnInit(){
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe((data)=>{
      console.log(data[0].productname)
      console.log(data)
      this.products = data
    })
  }
  getFilteredProduct(min:string,max:string){
    console.log("filtered product called...");
    console.log(min);
    this.productService.filterProductByPriceRange(min,max).subscribe((data)=>{
      this.products = data
      console.log(data)
    })
  }
  onEdit(){
      console.log(this.card.nativeElement.children['title'].innerText)
    // this.productname = this.products.productname
  }
}
