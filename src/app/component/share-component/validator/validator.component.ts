import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {

  @Input('control') control: AbstractControl;

  ErrorsMsg = {
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

}
