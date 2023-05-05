import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productId!:any;
  product!:any
  result!:any
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router){}
  ngOnInit(){

    this.activatedRoute.paramMap.subscribe(params=>{
      this.productId = params.get('id')
      this.productService.getProductDetailsByID(this.productId).subscribe(data=>{
        this.product = data
        console.log(data)
      })
      console.log("param id: "+this.productId)
      console.log(this.product)
    })
  }
  deleteProduct(){
    this.productService.deleteProduct(this.productId).subscribe(data=>{
      console.log(data)
      this.result = data
      if(data){
        alert(this.result.message)
        this.router.navigate(['/products'])
      }
    })
  }
}
