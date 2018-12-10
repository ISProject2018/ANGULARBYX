import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { OrderDetail, Orders } from '../../class/storeInterface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['Product_name', 'Product_amout','Product_price'];

  Orders: Orders

  constructor(public http: HttpService, public render: Renderer2) { }

  ngOnInit() {
    this.http.getOrder().subscribe(res => { this.Orders = res })
    this.render.addClass(document.body,'background')
  }
  
}

