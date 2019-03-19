import { Component, OnInit, Input } from '@angular/core';
import { PhimSapChieu } from 'src/app/_core/models/phimSapChieu';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {
  @Input() phimSapChieu:PhimSapChieu = new PhimSapChieu();
  constructor() { }

  ngOnInit() {
  }

}
