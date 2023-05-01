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
}
