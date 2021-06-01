import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gkinterior';
   images:string[]=new Array(41)
   
   ngOnInit(){

  this.images[0]="photo"
  for(var i = 1;i<41;i++){
    this.images[i]="photo"+i
  }
  
}
}
