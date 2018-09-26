import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
/*// export class ChildComponent {
//   @Output()
//   getIndex = new EventEmitter();
//   @Input()
//   arrData: Array<any>;
//   constructor() {}
//   ngOnInit() {}

//   data;
//   arrData2 = [];
//   donelist(i) {
//     this.getIndex.emit(i);
//     this.arrData2.push(this.arrData[i]);
//     this.arrData.splice(i, 1);
//   }
//   todolist(i) {
//     this.getIndex.emit(i);
//     this.arrData.push(this.arrData2[i]);
//     this.arrData2.splice(i, 1);
//   }
//   delData1(i) {
//     this.getIndex.emit(i);
//     this.arrData.splice(i, 1);
//   }
//   delData2(i) {
//     this.getIndex.emit(i);
//     this.arrData2.splice(i, 1);
//   }
// }*/
export class ChildComponent implements OnInit {
  @Output()
  delIndexData = new EventEmitter();
  @Output()
  changeIndex = new EventEmitter();
  @Input()
  arrData;
  @Input()
  counter;
  constructor() {}
  ngOnInit() {}
  delData(i) {
    this.delIndexData.emit(i);
  }
  change(i) {
    this.arrData[i].done = !this.arrData[i].done;
    this.changeIndex.emit(i);
  }
}
