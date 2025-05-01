import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductList} from '../_models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  dataUrl: string = "assets/productData.json";

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.dataUrl);
  }
}
