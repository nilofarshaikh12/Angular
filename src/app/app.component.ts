import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports:[NgIf]

})
export class AppComponent {
  title = 'angularDemo2';
  show=true

  //array
  students=["ram","sam","neha","priya"];

  //array of objects
  studentdata=[
    {
      name:"ram",
      age:20
    },
    {
      name:"sam",
      age:30
    }
  ]

//ngIf
  block=0
  updateBlock(){
    this.block++;
  }

  //switch case

  color="black"

  changeColor(color:string){
    this.color=color
  }
}
