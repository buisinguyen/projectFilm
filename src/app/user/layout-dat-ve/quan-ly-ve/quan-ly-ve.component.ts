import { Component, OnInit } from '@angular/core';
import { HuyGheService } from 'src/app/general/danh-sach-ghe/huy-ghe.service';
import { Ve } from 'src/app/_core/models/Ve';

@Component({
  selector: 'app-quan-ly-ve',
  templateUrl: './quan-ly-ve.component.html',
  styleUrls: ['./quan-ly-ve.component.scss']
})
export class QuanLyVeComponent implements OnInit {
  public bien:any;
  list:Array<Ve> = [];
  constructor(private huygheservice:HuyGheService) { }

  ngOnInit() {
  }
  HienThi(res:Ve){
    let check = true;
    this.list.forEach(element => {
      if(res.soghe == element.soghe){
        this.xoaMotItem(res.soghe);
        console.log(this.list);
        check = false;
      }
    });
    (check)?this.list.push(res):"";
    // console.log(this.list);
  }
  xoaMotItem(soghe){
    this.list = this.list.filter(i => i.soghe != soghe); // Vòng while
    console.log(soghe);
  }
  HuyGhe(soghe){
    console.log(soghe);
    //todo
    this.huygheservice.setBeha(soghe);
    this.xoaMotItem(soghe);
  }
}
