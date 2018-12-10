import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { product } from 'src/app/class/storeInterface';
import { NgxSpinner, SPINNER_PLACEMENT } from '@hardpool/ngx-spinner';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

declare var $: any;

export interface DialogData {
  cart: product[]
}

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.css']
})
export class DialogCartComponent implements OnInit {

  @ViewChild("orderSpinner") orderSpinner: NgxSpinner

  total: number
  cartModal: product[]

  constructor(
    public dialogRef: MatDialogRef<DialogCartComponent>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public cartService: CartService
  ) {
    dialogRef.disableClose = true
  }

  ngOnInit() {
    this.orderSpinner.config = {
      placement: SPINNER_PLACEMENT.inplace,
      size: '1rem',
    }

    this.cartModal = this.data.cart
    this.cartModal.forEach(element => {
      element.Product_amount = 1
    });

    $(document).ready(function () {
      var config = {
        decrementButton: "<strong>-</strong>",
        incrementButton: "<strong>+</strong>",
        groupClass: "input-group-sm",
        buttonsClass: "btn-primary",
        buttonsWidth: "0.5em",
        textAlign: "center",
        autoDelay: 500
      }
      $("input[type='number']").inputSpinner(config)
    })

    this.CalTotal()
  }

  closeCart() {
    this.dialogRef.close({ cart: this.cartModal });
  }

  removeItem(product: product) {
    let index = this.cartModal.indexOf(product)
    this.cartModal.splice(index, 1)
    this.CalTotal()
  }

  CalTotal() {
    let tmp = 0
    this.cartModal.forEach(item => {
      tmp += (item.Product_price * item.Product_amount)
    });
    this.total = tmp
  }

  changeAmount(index: number, amount: number) {
    this.cartModal[index].Product_amount = amount
    this.CalTotal()
  }

  progressOrder() {
    this.orderSpinner.show()
    setTimeout(() => {
      this.cartService.confirmCart(this.cartModal)
      this.dialogRef.close({ cart: this.cartModal });
      this.router.navigateByUrl('/order-detail')
    },1000)
  }

}
