import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thong-tin-ve',
  templateUrl: './thong-tin-ve.component.html',
  styleUrls: ['./thong-tin-ve.component.scss']
})
export class ThongTinVeComponent implements OnInit {
  @Input() DSGhe:[];
  @Output() Huy = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
    // console.log(this.DSGhe);
  }

  HuyGhe(soghe){
    this.Huy.emit(soghe);
  }
}
