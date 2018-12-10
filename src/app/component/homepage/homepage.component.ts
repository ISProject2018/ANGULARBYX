import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public navbar: NavbarService, public render: Renderer2) {

   }

  ngOnInit() {
    this.render.removeClass(document.body, 'background')
    this.navbar.hide()
  }

}
