import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phim } from 'src/app/_core/models/phim';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-chi-tiet-phim',
  templateUrl: './layout-chi-tiet-phim.component.html',
  styleUrls: ['./layout-chi-tiet-phim.component.scss']
})
export class LayoutChiTietPhimComponent implements OnInit,OnDestroy {

  phim: Phim = new Phim();
  thongBao:string = '';
  subParam: Subscription;
  subService: Subscription;
  constructor(private atvRoute: ActivatedRoute, private phimService: QuanLyPhimService) { }

  ngOnInit() {
    //Lấy tham số trên đường dẫn (get param url)
    // this.subParam = this.atvRoute.params.subscribe((thamso: any) => {
    //   this.subService = this.LayChiTietPhim(thamso.id); //Lấy giá trị tham số gọi service load nội dung phim
    // });
    //Lấy giá trị nhiều tham số từ đường dẫn (get queryParams)
    this.subParam = this.atvRoute.queryParams.subscribe((thamso: any) => {
        this.subService = this.LayChiTietPhim(thamso.MaPhim); //Lấy giá trị tham số gọi service load nội dung phim
      });
  }
  

  LayChiTietPhim(maPhim: string) {
    return this.phimService.LayChiTietPhim(maPhim).subscribe((ketqua:any) => {
        if(typeof (ketqua) === 'object')
        {
          this.phim = ketqua;
          console.log(ketqua);
        }else {
          this.thongBao = ketqua;
        }
    }, (error) => {
      console.log(error);
    });
  }
  ngOnDestroy(){
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
  }

}
