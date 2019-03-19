import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Phim } from 'src/app/_core/models/Phim';
// import { Phim } from 'src/app/_core/models/Phim';
import { Subscription } from 'rxjs';
import { PhimSapChieu } from 'src/app/_core/models/phimSapChieu';
import { PhimSapChieuService } from 'src/app/_core/services/phim-sap-chieu.service';
// import { Title } from '@angular/platform-browser';
// import { configTitle } from 'src/app/_core/common/configTitle';


@Component({
  selector: 'app-layout-phim',
  templateUrl: './layout-phim.component.html',
  styleUrls: ['./layout-phim.component.scss']
})
export class LayoutPhimComponent implements OnInit, OnDestroy {
  dsPhim: Phim[] = [];
  dsPhimSC:PhimSapChieu[] = [];
  subServiceLayDanhSachPhim: Subscription;
  subServicePhimSapChieu: Subscription;
  constructor(private phimService: QuanLyPhimService, private phimSapChieuService: PhimSapChieuService) { }

  ngOnInit() {
    this.subServiceLayDanhSachPhim = this.phimService.LayDanhSachPhim().subscribe(res => {
      // console.log(res);
      
      this.dsPhim = res;
    })
    this.subServicePhimSapChieu = this.phimSapChieuService.LayDanhSachPhim().subscribe(res =>{
      this.dsPhimSC = res
    })
  }
  ngOnDestroy() {
    this.subServiceLayDanhSachPhim.unsubscribe();
    this.subServicePhimSapChieu.unsubscribe();
  }
}
