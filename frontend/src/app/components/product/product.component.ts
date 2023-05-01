import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products!:Product[]
  constructor(private productService:ProductService){}
  ngOnInit(){
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe((data)=>{
      console.log(data)
      this.products = data
    })
  }
}
