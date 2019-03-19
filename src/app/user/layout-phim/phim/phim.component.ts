import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/models/Phim';
import { Router } from '@angular/router';



@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() phim:Phim = new Phim();
  
  constructor(private router:Router) { }

  ngOnInit() {
    // console.log(this.phim);
    // console.log(this.phim.MaPhim);

    
  }
  XemChiTiet(){
    //Thực thi những khối lệnh trước khi chuyển hướng trang
    //.....
    //Chuyển hướng trang thông qua path name
    // this.router.navigate(['/chitietphim',this.phim.MaPhim]); //Tham số 1: là path name, tham số 2 tham số param
    //Tham số 1: path name, tham số thứ 2 là đối tượng queryparam
    this.router.navigate(['/chitietphim'],{queryParams: {MaPhim:this.phim.MaPhim,TenPhim:this.phim.TenPhim}});
  }
}
