import { Component, OnInit } from '@angular/core';
import { Post } from '../post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(120),
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((http:\/\/www\.)|(www\.)|(http:\/\/))[a-zA-Z0-9._-]+\.[a-zA-Z.]{2,5}$/)
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  checkValidator(controlName, validatorName) {
    this.form.get(controlName).hasError(validatorName) && this.form.get(controlName).touched;
  }
}
