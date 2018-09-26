import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-second",
  templateUrl: "./child-second.component.html",
  styleUrls: ["./child-second.component.css"]
})
export class ChildSecondComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Output()
  getValues = new EventEmitter();
  title: string = "todolist";
  txt: string;

  index: number;
  getIndex(i) {
    this.index = i;
  }
  getValue(e) {
    if (e.keyCode == 13) {
      this.Get();
      this.txt = "";
    }
  }
  Get() {
    this.getValues.emit(new Msg(this.txt, false));
  }
}
export class Msg {
  constructor(public title: string, public done: boolean) {}
}
