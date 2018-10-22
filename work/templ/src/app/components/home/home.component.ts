import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string = '4-马硕';
  FansCount:number = 10;
  FollowCount:number = 20;

  UnsubmittedCount:number = 0;
  CompletedCount:number = 10;
  FinishedCount:number = 0;

}
