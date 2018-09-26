import { Component } from '@angular/core';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txt:string;
  arr:string[]=[];
  arr1:string[]=[];
  getValue(e){
    if(e.keyCode == 13){
      this.arr.push(this.txt);
      console.log(this.arr);
      this.txt ="";
    }
  }
  // delete(idx){
  //   this.arr.splice(idx,1);
  //   this.arr1.splice(idx,1)
  // }
  // change(idx1){
  //     this.arr1.push(this.arr[idx1]);
  //     this.arr.splice(idx1,1)
  // }




  // txt:string;
  // arr:object[]=[];
  // getValue(e){
  //   if(e.keyyCode == 13){
  //     this.arr.push({title:this.txt,done:false})
  //     this.txt = '';
  //   }
  // }
  // delete(idx){
  // this.arr.splice(idx,1);
  // }

  delete(idx){
    this,arr,splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx.down]
  }

}
