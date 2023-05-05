import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get<Product[]>('/api/products')
  }
  getProductDetailsByID(id:any){
    let url = '/api/products'
    return this.http.get<Product>(`${url}/${id}`)
  }
  filterProductByPriceRange(min:string,max:string){
    let url = '/api/products/range'
    return this.http.get<Product[]>(`${url}?minPrice=${min}&maxPrice=${max}`)
  }
  updateProductDetails(id:any,details:any){
    let url = '/api/products'
    return this.http.put(`${url}/${id}`,details)
  }
  createProduct(productdetails:any){
    let url = '/api/products'
    return this.http.post(url,productdetails)
  }
  deleteProduct(id:any){
    let url = '/api/products'
    return this.http.delete(`${url}/${id}`)
  }
}
