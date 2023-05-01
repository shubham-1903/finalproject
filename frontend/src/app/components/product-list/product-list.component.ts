import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productId!:any;
  product!:any
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params=>{
      this.productId = params.get('id')
      this.productService.getProductDetailsByID(this.productId).subscribe(data=>{
        this.product = data
      })
      console.log("param id: "+this.productId)
      console.log(this.product)
    })
  }
}
