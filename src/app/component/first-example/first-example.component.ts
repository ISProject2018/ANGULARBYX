import { Component, OnInit, Renderer2 } from '@angular/core';
import { CodeInterface } from '../../class/codeInterface';
import { NavbarService } from 'src/app/service/navbar.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css']
})
export class FirstExampleComponent implements OnInit {

  name: string
  twoway: string
  fruits: Array<string>
  fruit: string
  selectedOptions: Array<number>

  constructor(public codeInterface: CodeInterface, public nav: NavbarService, public snackBar: MatSnackBar, public render: Renderer2) {
  }

  ngOnInit() {
    this.render.addClass(document.body, 'background')
    this.nav.show()
    this.name = "Hello Angular"
    this.fruits = ["Banana", "Orange", "Apple", "Mango"]
  }

  addFruit() {
    this.fruits.push(this.fruit)
    this.snackBar.open(this.fruit + ' was added', 'Close', { duration: 2000 })
    this.fruit = ''
  }

  delFruit() {
    this.selectedOptions.forEach(element => {
      let index = this.fruits.indexOf(element.toString())
      this.fruits.splice(index, 1)
    });
  }

}
