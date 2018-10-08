import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { RouterModule,Router} from "@angular/router"
import { ChildSecondComponent } from "./components/child-second/child-second.component";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { HttpClient } from "selenium-webdriver/http";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildSecondComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'communtiy',component:CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:'**',component:CommunityComponent},
    ])
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
