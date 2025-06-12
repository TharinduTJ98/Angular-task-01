import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit{
  user = {
    name: '',
    email: ''
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap.get('id');
    alert(`Template driven router param is ${routerParams}`)
  }  
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data:', this.user);
    }
  }

}
