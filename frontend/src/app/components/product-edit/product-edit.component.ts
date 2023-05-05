import { Component } from '@angular/core';
import { FormControl, FormGroup , FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  productId!:any;
  productname!:string
  price!:number
  description!:string
  productDetails!:any
  myForm = this.fb.group({
    productname:this.productname,
    price:[this.getPrice()],
    description:this.description
  })
  constructor(private fb:FormBuilder,private productService:ProductService,private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params=>{
      this.productId = params.get('id')
      this.productService.getProductDetailsByID(this.productId).subscribe(data=>{
        this.productname = data.productname
        this.price = data.price
        this.description = data.description
      })
    })
  }
  onSubmit(){

    console.log("form data")
    this.productDetails = this.myForm.value
    console.log(this.productDetails)

    if(this.productDetails.productname && this.productDetails.price && this.productDetails.description){
      let value = this.productDetails
      this.productService.updateProductDetails(this.productId,value).subscribe(data=>{
        console.log(data)
      })
      return;
    }
    if(this.productDetails.productname){
      let productname = this.productDetails.productname
      this.productService.updateProductDetails(this.productId,{productname}).subscribe(data=>{
        console.log(data)
      })
    }else if(this.productDetails.price){
      let price = this.productDetails.price
      this.productService.updateProductDetails(this.productId,{price}).subscribe(data=>{
        console.log(data)
      })
    }else if(this.productDetails.description){
      let description = this.productDetails.description
      this.productService.updateProductDetails(this.productId,{description}).subscribe(data=>{
        console.log(data)
      })
    }

  }
  getPrice(){
    return this.price
  }
}
