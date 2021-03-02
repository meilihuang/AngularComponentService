import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { DataglobalService } from "./dataglobal.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalvar: DataglobalService) {
    this.title = globalvar.getTitle();
    this.date = globalvar.getDate();
    this.note = globalvar.getNote();
  }

  name = "Angular " + VERSION.major;
  title;
  date;
  note;
  detail: boolean = false;
  favorite: boolean = false;
  home: boolean = false;

  Input() {
    if (this.title == "" || this.date == " " || this.note == "") {
      alert("You must fill in all the blanks");
    } else {
      this.globalvar.setTitle(this.title);
      this.globalvar.setDate(this.date);
      this.globalvar.setNote(this.note);
      alert("Your note has been saved!");
    }
  }

  DetailNote() {
    this.detail = true;
    this.router.navigate(["/detail"]);
  }

  FavoriteNote() {
    this.favorite = true;
    this.router.navigate(["/favorite"]);
  }

  Home() {
    this.detail = false;
    this.favorite = false;
    this.router.navigate(["/"]);
  }
}
