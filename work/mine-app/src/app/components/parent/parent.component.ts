import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data =[1,2,3,4,5,6];
  data1 =[11,22,33,44,55,66]
  constructor() { }
  del(i){
    console.log(i);
    this.data1.splice(i,1);
  }
  ngOnInit() {
  }

}
