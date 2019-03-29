import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Ve } from 'src/app/_core/models/Ve';
import { HuyGheService } from 'src/app/general/danh-sach-ghe/huy-ghe.service';
@Component({
  selector: 'app-layout-dat-ve',
  templateUrl: './layout-dat-ve.component.html',
  styleUrls: ['./layout-dat-ve.component.scss']
})
export class LayoutDatVeComponent implements OnInit {

  public bien:any;
  list:Array<Ve> = [];

  private subParam: Subscription;
  private subService: Subscription;
  private mangGhe: any[] = [];
  MaLichChieu: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private qlPhimService: QuanLyPhimService, private huygheservice:HuyGheService) { }

  ngOnInit() {
    this.subParam = this.activatedRoute.params.subscribe(params => {
      this.MaLichChieu = params.id;
      this.LayChiTietPhongVe();
    })
  }
  LayChiTietPhongVe() {
    this.subService = this.qlPhimService.LayThongTinPhongVe(this.MaLichChieu).subscribe((result: any) => {
      if (result) {
        this.mangGhe = result.DanhSachGhe;

      }
    })
  }
  ngOnDestroy(): void {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }
  HienThi(res: Ve) {
    let check = true;
    this.list.forEach(element => {
      if (res.soghe == element.soghe) {
        this.xoaMotItem(res.soghe);
        console.log(this.list);
        check = false;
      }
    });
    (check) ? this.list.push(res) : "";
    // console.log(this.list);
  }
  xoaMotItem(soghe) {
    this.list = this.list.filter(i => i.soghe != soghe); // Vòng while
    console.log(soghe);
  }
  HuyGhe(soghe) {
    console.log(soghe);
    //todo
    this.huygheservice.setBeha(soghe);
    this.xoaMotItem(soghe);
  }

}
