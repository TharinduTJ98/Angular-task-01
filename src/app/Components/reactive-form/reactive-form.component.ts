import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required])
  });

  submitted = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap.get('id');
    alert(`Reactive Form router param is ${routerParams}`)
  } 

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      console.log('Form Data:', this.userForm.value);
    }
  }
}
