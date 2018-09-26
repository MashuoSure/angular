import { Component } from '@angular/core';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  txt:string;
  str:string[] = [];
  fun(e){
    if(e.keyCode == 13){
    this.str.push(this.txt);
    this.txt = "";
  }
}
  del(idx:number){
    console.log(idx);
    this.str.splice(idx,1);
  }
}
