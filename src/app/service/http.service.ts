import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { product, OrderDetail, Orders } from 'src/app/class/storeInterface';

interface order_status{
  status:boolean
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url = 'http://localhost/AngularDB/data.php'

  constructor(public http: HttpClient) { }

  getProduct() {
    let httpParams = new HttpParams().set('case', 'getProduct')
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.post<Array<product>>(this.url, httpParams.toString(), { headers: headers })
  }

  submitOrder(user, cart) {
    let httpParams = new HttpParams().set('case', 'submitOrder')
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    Object.keys(user).forEach(keyUser => {
      httpParams = httpParams.append(keyUser, user[keyUser])
    });
    cart.forEach((product, index) => {

      let product_detail = [product['Product_id'], product['Product_amount']]
      httpParams = httpParams.append('Product_' + index, product_detail.join(', '))
    });

    return this.http.post<order_status>(this.url, httpParams, { headers: headers })
  }

  getOrder() {
    let httpParams = new HttpParams().set('case', 'getOrder')
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.post<Orders>(this.url, httpParams.toString(), { headers: headers })
  }
}
