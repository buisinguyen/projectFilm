import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
@Component({
  selector: 'app-layout-dat-ve',
  templateUrl: './layout-dat-ve.component.html',
  styleUrls: ['./layout-dat-ve.component.scss']
})
export class LayoutDatVeComponent implements OnInit {

  private subParam: Subscription;
  private subService: Subscription;
  private mangGhe: any[] = [];
  MaLichChieu: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private qlPhimService: QuanLyPhimService) { }

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


}
