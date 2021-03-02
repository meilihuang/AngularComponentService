import { Injectable } from '@angular/core';

@Injectable()
export class DataglobalService {

  private title : String = "";
  private date : String = "";
  private note : String = "";
  private favo : Number = 0;

  constructor() { }

  public getTitle(){
    return this.title;
  }

  public getDate(){
    return this.date;
  }

  public getNote(){
    return this.note;
  }

  public getFavo(){
    return this.favo;
  }

  public setTitle(ntitle: String){
   this.title = ntitle ;
  }

  public setDate(ndate: String){
   this.date = ndate ;
  }

  public setNote(nnote: String){
   this.note = nnote ;
  }

  public setFavo(nfavo: Number){
    this.favo = nfavo;
  }

}