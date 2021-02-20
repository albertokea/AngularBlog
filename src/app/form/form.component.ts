import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private postsService: PostService) {
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
      img: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)
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

  async newPost() {
    await this.postsService.addPost(this.form.value)
  }
}
