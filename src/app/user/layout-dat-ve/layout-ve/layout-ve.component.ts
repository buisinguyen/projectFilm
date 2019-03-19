import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-ve',
  templateUrl: './layout-ve.component.html',
  styleUrls: ['./layout-ve.component.scss']
})
export class LayoutVeComponent implements OnInit {
  @Input() ghe:any = {};
  dangDat:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  DatGhe(){
    this.dangDat = !this.dangDat;
  }

}

