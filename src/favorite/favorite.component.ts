import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataglobalService } from '../app/dataglobal.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

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
  }

}