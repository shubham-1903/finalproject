import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private fg:FormBuilder,private productService:ProductService){}
  createForm = this.fg.group({
    productid:['',Validators.required],
    productname:['',Validators.required],
    price:['',Validators.required],
    modelyear:['',Validators.required],
    description:['',Validators.required]
  })
  productData!:any
  onSubmit(){
    let data = {
      productid:Number(this.createForm.value.productid),
      productname:this.createForm.value.productname,
      modelyear:Number(this.createForm.value.modelyear),
      price:Number(this.createForm.value.price),
      description:this.createForm.value.description
    }
    this.productService.createProduct(data).subscribe(data=>{
      console.log(data)
      this.productData = data
    })
    // console.log(data)
    // console.log(this.createForm);
    console.log(this.productData)
    if(this.productData){
      console.log("hii")
      console.log(this.productData.success)
    }
  }
}
