import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  log(msg){
    console.log(`这是${this.index++}次调用`)
  }

  constructor() {
    this.log("comstructor")
   }
  @Input ()arr:Array<number>;
  @Output() delIndex :EventEmitter<number> = new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }

  ngOnInit() {
  }

}
