import { Injectable } from "@angular/core";

export interface CodeDetail {
  html: string;
}

export interface Code {
  [key: string]: CodeDetail;
}

@Injectable()
export class CodeInterface {

  code: Code = {
    '1.1_html': {
      html:
        `<div>
          <p>{{name}}</p>
        </div>`
    },
    '1.1_ts': {
      html:
        ` export class FirstExampleComponent implements OnInit {

          private name: string
        
          ngOnInit() {
            this.name = "Hello Angular"
          }
        }`
    },
    '1.2_html': {
      html: 
      `<div>
          <mat-form-field>
            <input matInput placeholder="Input Name" [(ngModel)]="twoway">
          </mat-form-field>
          <h4>Output : {{twoway}}</h4>
        </div>`
        
    },
    '1.2_modts': {
      html:
      `import { FormsModule } from '@angular/forms';

        @NgModule({
          imports: [ FormsModule ]
        })`
    },
    '1.3_html':{
      html: 
      `<div>
          <h4>List of Fruits</h4>
          <mat-list>
            <mat-list-item *ngFor="let fruit of fruits">{{fruit}}</mat-list-item>
          </mat-list>
        </div>
        <div class="row mx-2 my-3">
          <mat-form-field class="col-8">
            <input matInput placeholder="Insert fruit" [(ngModel)]="fruit">
          </mat-form-field>
        <div>`
    },
    '1.3_ts':{
      html:
      `export class FirstExampleComponent implements OnInit {

          private fruits : Array<string>
          private fruit: string
          private selectedOptions: Array<number>
        
          ngOnInit() {
            this.fruits = ["Banana", "Orange", "Apple", "Mango"]
          }

          addFruit() {
            this.fruits.push(this.fruit)
          }
        
          delFruit() {
            this.selectedOptions.forEach(element => {
              let index = this.fruits.indexOf(element.toString())
              this.fruits.splice(index, 1)
            });
          }
        
        }`
    },
    '2.1_html':{
      html:
      `<form (submit)="doSubmit(username.value, password.value)" onsubmit="return false">
          <div>
            <mat-form-field>
              <input matInput placeholder="Username" #username>
            </mat-form-field>
            <mat-form-field>
              <input matInput type="password" placeholder="Password" #password>
            </mat-form-field>
            <div>
              <button mat-raised-button color="primary" type="submit">Submit</button>
            </div>
          </div>
        </form>`
    },
    '2.1_ts':{
      html:
      `import { MatDialog } from '@angular/material';

        export class SecondExampleComponent implements OnInit {

          constructor( public dialog: MatDialog ) { }

          doSubmit(username: string, password: string): void {
            this.dialog.open(DialogComponent, {
              width: '500px',
              data: { username: username, password: password }
            });
          }
        `
    },
    '2.1_dialog':{
      html:
      `<h1 mat-dialog-title>Result</h1>
        <div mat-dialog-content>
          <h6>Username : {{data.username}}</h6>
          <h6>Password : {{data.password}}</h6>
        </div>
        <div mat-dialog-actions class="d-flex justify-content-end">
          <button mat-button (click)="onNoClick()">Close</button>
        </div>`
    },
    '2.2_html':{
      html:
      `<form [formGroup]="regisForm" (submit)="doRegis()">
          <div>
            <mat-form-field>
              <input matInput placeholder="Username" formControlName="username">
            </mat-form-field>
            <app-validator [control]="regisForm.controls['username']"></app-validator>
            <mat-form-field>
              <input matInput placeholder="Password" formControlName="password">
            </mat-form-field>
            <app-validator [control]="regisForm.controls['password']"></app-validator>
            <mat-form-field>
              <input matInput placeholder="E-mail" formControlName="email">
            </mat-form-field>
            <app-validator [control]="regisForm.controls['email']"></app-validator>
          </div>
          <div>
            <button mat-raised-button type="submit">Submit</button>
          </div>
        </form>`
    },
    '2.2_ts':{
      html:
      `import { FormGroup, FormControl, Validators } from '@angular/forms';

        export class SecondExampleComponent implements OnInit {

          private regisForm: FormGroup

          constructor( ) { }

          ngOnInit() {
            this.regisForm = new FormGroup({
              username: new FormControl('', [Validators.required, Validators.minLength(5)]),
              password: new FormControl('', Validators.required),
              email: new FormControl('', [Validators.required, Validators.email])
            })
          }

        }`
    },
    '2.2_validate_html':{
      html: 
      `<mat-error *ngIf="getErrorMsg">{{getErrorMsg}}</mat-error>`
    },
    '2.2_validate_ts':{
      html: 
      `import { AbstractControl } from '@angular/forms';

        export class ValidatorComponent {

          @Input('control') control: AbstractControl;

          private ErrorsMsg = {
            required: 'Please enter your infomation',
            email: 'Please enter a valid E-mail',
            minlength: 'Please enter at least 5 characters'
          }

          get getErrorMsg(): string {
            if (this.control) {
              if (this.control.invalid && this.control.touched) {
                let validateMsg: string
                const errorKey = Object.keys(this.control.errors)
                errorKey.forEach(key => {
                  validateMsg = this.ErrorsMsg[key]
                });
                return validateMsg
              }
            }
          }

        }`
    }
  }

}





