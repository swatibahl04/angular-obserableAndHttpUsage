import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';

@Injectable({
providedIn: "root"
})
export class ProductService
{
  private productUrl = './api/products.json';
  constructor(private httpClient : HttpClient)
  {

  }
  getProducts() : Observable<IProduct[]>
  {
  return this.httpClient.get<IProduct>(this.productUrl);
  }

}