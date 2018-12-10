import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CodeInterface } from '../../class/codeInterface';
import { NavbarService } from 'src/app/service/navbar.service';
import { FormBuilder } from '@angular/forms';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpService } from 'src/app/service/http.service';
import { product } from 'src/app/class/storeInterface';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DialogCartComponent } from '../share-component/dialog-cart/dialog-cart.component';
import { NgxSpinner, SPINNER_PLACEMENT, SPINNER_ANIMATIONS } from '@hardpool/ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-example',
  templateUrl: './third-example.component.html',
  styleUrls: ['./third-example.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class ThirdExampleComponent implements OnInit {

  @ViewChild('productSpinner') productSpinner: NgxSpinner

  products: product[]
  matBadge: number = 0
  matBadgeVisible: boolean = true
  cart: product[] = []
  total: number = 0

  constructor(
    public dialog: MatDialog,
    public codeInterface: CodeInterface,
    public nav: NavbarService,
    public _formBuilder: FormBuilder,
    public http: HttpService,
    public snackBar: MatSnackBar,
    public router: Router,
    public render: Renderer2
  ) { }

  ngOnInit() {
    this.render.addClass(document.body, 'background')
    this.nav.hide()
    this.productSpinner.config = {
      animation: SPINNER_ANIMATIONS.spin_3,
      placement: SPINNER_PLACEMENT.block_ui
    }
    this.productSpinner.show()

    setTimeout(() => {
      this.http.getProduct().subscribe(res => { this.products = res; this.productSpinner.hide() })
    }, 1000);

  }

  addToCart(product: product) {
    if (this.cart.length > 0) {
      if (this.cart.includes(product)) {
        this.snackBar.open('มีสินค้าในรถเข็นแล้ว', 'ปิด', {
          duration: 2000,
        });
      } else {
        this.cart.push(product)
        this.snackBar.open('เพิ่ม ' + product.Product_name +' ไปยังรถเข็น', 'ปิด', {
          duration: 2000,
        });
      }
    } else {
      this.cart.push(product)
      this.snackBar.open('เพิ่ม ' + product.Product_name +' ไปยังรถเข็น', 'ปิด', {
        duration: 2000,
      });
    }
    this.CalBadge()
    this.CalTotal()
  }

  CalTotal() {
    let tmp = 0
    this.cart.forEach(item => {
      tmp += item.Product_price
    });
    this.total = tmp
  }

  CalBadge() {
    this.matBadge = Object.keys(this.cart).length
    if (this.matBadge > 0) {
      this.matBadgeVisible = false
    } else {
      this.matBadgeVisible = true
    }
  }

  openCart() {
    const dialogRef = this.dialog.open(DialogCartComponent, {
      width: '1000px',
      data: { cart: this.cart }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cart = []
      this.cart = result.cart
      this.CalBadge()
    });
  }

  openOrderList() {
    this.router.navigateByUrl('/order-list')
  }
}



