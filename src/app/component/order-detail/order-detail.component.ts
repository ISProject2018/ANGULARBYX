import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/class/storeInterface';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { NgxSpinner, SPINNER_PLACEMENT } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @ViewChild("Spinner") Spinner: NgxSpinner

  cart: product[]
  user_name: string
  user_surname: string
  user_email: string
  user_address: string
  user_tel: string

  constructor(
    public cartService: CartService,
    public http: HttpService,
    public render: Renderer2,
    public router: Router
  ) { }

  ngOnInit() {
    this.Spinner.config = {
      placement: SPINNER_PLACEMENT.inplace,
      size: '1rem',
    }
    this.render.addClass(document.body, 'background')
    this.cart = this.cartService.getCartItem
  }

  doSubmit() {
    this.Spinner.show()
    let user = {
      user_name: this.user_name,
      user_surname: this.user_surname,
      user_email: this.user_email,
      user_address: this.user_address,
      user_tel: this.user_tel
    }
    setTimeout(() => {
      this.http.submitOrder(user, this.cart).subscribe(res => {
        if (res.status = true) {
          this.Spinner.hide()
          this.router.navigateByUrl('/third')
        }
      })
    }, 1000)
  }
}

