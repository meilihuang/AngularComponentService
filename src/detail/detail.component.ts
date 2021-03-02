import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataglobalService } from "../app/dataglobal.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(private router: Router, public globalvar: DataglobalService) {
    this.title = globalvar.getTitle();
    this.date = globalvar.getDate();
    this.note = globalvar.getNote();
    this.favo = globalvar.getFavo();
  }

  title;
  date;
  note;
  favo;

  ngOnInit() {
    if (this.title == "") {
      this.title = "Place for your title";
      this.date = "Place for your date";
      this.note = "Place for your note";
    }
  }

//if button like is pressed
  Favorite() {
    if (this.favo == 0) {
      this.globalvar.setFavo(1);
      alert("You like this note!");
    } else {
      this.globalvar.setFavo(0);
      alert("You unlike this note!");
    }
  }
}
