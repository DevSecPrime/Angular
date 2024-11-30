import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<div>This is first ng module project  </div>`,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'this is title'
  constructor(){
    console.log("first called constructor");
  }

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.chnageTitleHandler()
  console.log('the function is called here');

}

  chnageTitleHandler(){
    this.title = 'Aryan`s code'
  }
}
