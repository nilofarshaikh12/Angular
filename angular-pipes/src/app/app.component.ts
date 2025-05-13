import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPipes';

  msg= 'i am learning pipes';

  date=new Date();

  amount=100;

  student={
    name:'sam',
    city:'pune',
    contact:254636,
    state:'maharashtra'
  }
}
