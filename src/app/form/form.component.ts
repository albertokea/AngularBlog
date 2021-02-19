import { Component, OnInit } from '@angular/core';
import { Post } from '../post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: Post

  constructor() { }

  ngOnInit(): void {
  }

}
