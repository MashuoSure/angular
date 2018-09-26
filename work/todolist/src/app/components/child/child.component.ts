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
