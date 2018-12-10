import { Component, OnInit,Renderer2 } from '@angular/core';
import { CodeInterface } from '../../class/codeInterface';
import { NavbarService } from 'src/app/service/navbar.service';
import { MatSnackBar } from '@angular/material';
import { DialogComponent } from '../share-component/dialog/dialog.component'
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-example',
  templateUrl: './second-example.component.html',
  styleUrls: ['./second-example.component.css']
})
export class SecondExampleComponent implements OnInit {

  regisForm: FormGroup

  constructor(
    public codeInterface: CodeInterface,
    public nav: NavbarService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public render: Renderer2
  ) { }

  ngOnInit() {
    this.render.addClass(document.body, 'background')
    this.nav.show()
    this.regisForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  doSubmit(username: string, password: string): void {
    this.dialog.open(DialogComponent, {
      width: '500px',
      data: { username: username, password: password }
    });
  }

  doRegis() {
    if (this.regisForm.valid) {
        this.snackBar.open('Your registration was successful!', 'Close', {
          duration: 2000,
        });
    } else {
      this.snackBar.open('Please check your information again', 'Close', {
        duration: 2000,
      });
    }
  }


}
