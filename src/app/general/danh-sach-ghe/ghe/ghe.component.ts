import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HuyGheService } from '../huy-ghe.service';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() itemGhe: any;
  @Output() pushOutGhe = new EventEmitter();

  public statusChon: boolean = false;
  constructor(private huyghesv:HuyGheService) { }
  DatGhe() {
    if (this.itemGhe.TrangThai == false) {
      if (this.statusChon == false) {
        this.statusChon = true;
      }
      else{
        this.statusChon = false;
      }     
      let gheChon = {
        soghe: this.itemGhe.SoGhe,
        gia: this.itemGhe.Gia,
        trangthai: this.statusChon
      }
      this.pushOutGhe.emit(gheChon);
    }
    else
      this.statusChon = false;
  }
  ngOnInit() {
    this.huyghesv.getBeha().subscribe(res=>{ // Xem lại
      // if(res == null){
      //   return;
      // }
      // if(this.itemGhe.soghe == res){
      //   console.log(res);
      //   this.statusChon = false;
      // }
      if(this.itemGhe.SoGhe == res){
        this.statusChon = false;
      }
    })
  }

}
