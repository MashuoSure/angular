import { Component } from '@angular/core';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title1:string = 'angular'
  title:string = "angular";
  fun(e){
    this.title = "hello angular"
  }
  txt:string;
  arr:number[] = [1,2,3,4,5,6,7,8,9]
  del(idx){
    this.arr.splice(idx,1)
  }
}
