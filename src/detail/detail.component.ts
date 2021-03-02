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
  }

  title;
  date;
  note;

  ngOnInit() {
    if (this.title == "") {
      this.title = "Place for your title";
      this.date = "Place for your date";
      this.note = "Place for your note";
    }
  }
}
