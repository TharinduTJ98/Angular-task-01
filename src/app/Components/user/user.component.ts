import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() userMessage!: any
  @Output() message = new EventEmitter<string>();
  constructor(private router: Router){

  }

  navigateToHome(): void{
    this.router.navigate(['/home']);
  }

  sendMessage(): void{
    this.message.emit('Hello i-wonder team');
  }
}
