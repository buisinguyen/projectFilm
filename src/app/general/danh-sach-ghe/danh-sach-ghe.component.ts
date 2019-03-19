import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  contries: any[] = [{name:'Vietnam'}, {name: 'Thailand'}, {name:'USA'}];
  results:any[] = [];
  text:string = '';
  search(event) {
    let tukhoa = event.query;
    this.results = this.contries.filter(n => n.name.search(tukhoa)!=-1)
    };


  public DSGhe: any[] = [{ SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
  { SoGhe: 3, TenGhe: "số 3 ", Gia: 100, TrangThai: false },
  { SoGhe: 4, TenGhe: "số 4 ", Gia: 100, TrangThai: false },
  { SoGhe: 5, TenGhe: "số 5 ", Gia: 100, TrangThai: false },
  { SoGhe: 6, TenGhe: "số 6 ", Gia: 100, TrangThai: false },
  { SoGhe: 7, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
  { SoGhe: 8, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
  { SoGhe: 9, TenGhe: "số 9 ", Gia: 100, TrangThai: false },
  { SoGhe: 10, TenGhe: "số 10 ", Gia: 100, TrangThai: false },
  { SoGhe: 11, TenGhe: "số 11 ", Gia: 100, TrangThai: false },
  { SoGhe: 12, TenGhe: "số 12 ", Gia: 100, TrangThai: false },
  { SoGhe: 13, TenGhe: "số 13 ", Gia: 100, TrangThai: false },
  { SoGhe: 14, TenGhe: "số 14 ", Gia: 100, TrangThai: false },
  { SoGhe: 15, TenGhe: "số 15 ", Gia: 100, TrangThai: false },
  { SoGhe: 16, TenGhe: "số 16 ", Gia: 100, TrangThai: false },
  { SoGhe: 17, TenGhe: "số 17 ", Gia: 100, TrangThai: false },
  { SoGhe: 18, TenGhe: "số 18 ", Gia: 100, TrangThai: false },
  { SoGhe: 19, TenGhe: "số 19 ", Gia: 100, TrangThai: false },
  { SoGhe: 20, TenGhe: "số 20 ", Gia: 100, TrangThai: false },
  { SoGhe: 21, TenGhe: "số 21 ", Gia: 100, TrangThai: false },
  { SoGhe: 22, TenGhe: "số 22 ", Gia: 100, TrangThai: false },
  { SoGhe: 23, TenGhe: "số 23 ", Gia: 100, TrangThai: false },
  { SoGhe: 24, TenGhe: "số 24 ", Gia: 100, TrangThai: false },
  { SoGhe: 25, TenGhe: "số 25 ", Gia: 100, TrangThai: false },
  { SoGhe: 26, TenGhe: "số 26 ", Gia: 100, TrangThai: false },
  { SoGhe: 27, TenGhe: "số 27 ", Gia: 100, TrangThai: false },
  { SoGhe: 28, TenGhe: "số 28 ", Gia: 100, TrangThai: false },
  { SoGhe: 29, TenGhe: "số 29 ", Gia: 100, TrangThai: false },
  { SoGhe: 30, TenGhe: "số 30 ", Gia: 100, TrangThai: false },
  { SoGhe: 31, TenGhe: "số 31 ", Gia: 100, TrangThai: false },
  { SoGhe: 32, TenGhe: "số 32 ", Gia: 100, TrangThai: false },
  { SoGhe: 33, TenGhe: "số 33 ", Gia: 100, TrangThai: false },
  { SoGhe: 34, TenGhe: "số 34 ", Gia: 100, TrangThai: false },
  { SoGhe: 35, TenGhe: "số 35 ", Gia: 100, TrangThai: false },
  { SoGhe: 36, TenGhe: "số 36 ", Gia: 100, TrangThai: false },
  { SoGhe: 37, TenGhe: "số 37 ", Gia: 100, TrangThai: false },
  { SoGhe: 38, TenGhe: "số 38 ", Gia: 100, TrangThai: false },
  { SoGhe: 39, TenGhe: "số 39 ", Gia: 100, TrangThai: false },
  { SoGhe: 40, TenGhe: "số 40 ", Gia: 100, TrangThai: false },
  { SoGhe: 41, TenGhe: "số 41 ", Gia: 100, TrangThai: false },
  { SoGhe: 42, TenGhe: "số 42 ", Gia: 100, TrangThai: false },
  { SoGhe: 43, TenGhe: "số 43 ", Gia: 100, TrangThai: false },
  { SoGhe: 44, TenGhe: "số 44 ", Gia: 100, TrangThai: false },
  { SoGhe: 45, TenGhe: "số 45 ", Gia: 100, TrangThai: false },
  { SoGhe: 46, TenGhe: "số 46 ", Gia: 100, TrangThai: false },
  { SoGhe: 47, TenGhe: "số 47 ", Gia: 100, TrangThai: false },
  { SoGhe: 48, TenGhe: "số 48 ", Gia: 100, TrangThai: false },
  { SoGhe: 49, TenGhe: "số 49 ", Gia: 100, TrangThai: false },
  { SoGhe: 50, TenGhe: "số 50 ", Gia: 100, TrangThai: false },
  { SoGhe: 51, TenGhe: "số 51 ", Gia: 100, TrangThai: false },
  { SoGhe: 52, TenGhe: "số 52 ", Gia: 100, TrangThai: false },
  { SoGhe: 53, TenGhe: "số 53 ", Gia: 100, TrangThai: false },
  { SoGhe: 54, TenGhe: "số 54 ", Gia: 100, TrangThai: false },
  { SoGhe: 55, TenGhe: "số 55 ", Gia: 100, TrangThai: false },
  { SoGhe: 56, TenGhe: "số 56 ", Gia: 100, TrangThai: false },
  { SoGhe: 57, TenGhe: "số 57 ", Gia: 100, TrangThai: false },
  { SoGhe: 58, TenGhe: "số 58 ", Gia: 100, TrangThai: false },
  { SoGhe: 59, TenGhe: "số 59 ", Gia: 100, TrangThai: false },
  { SoGhe: 60, TenGhe: "số 60 ", Gia: 100, TrangThai: false },
  { SoGhe: 61, TenGhe: "số 61 ", Gia: 100, TrangThai: false },
  { SoGhe: 62, TenGhe: "số 62 ", Gia: 100, TrangThai: false },
  { SoGhe: 63, TenGhe: "số 63 ", Gia: 100, TrangThai: false },
  { SoGhe: 64, TenGhe: "số 64 ", Gia: 100, TrangThai: false },
  { SoGhe: 65, TenGhe: "số 65 ", Gia: 100, TrangThai: false },
  { SoGhe: 66, TenGhe: "số 66 ", Gia: 100, TrangThai: false },
  { SoGhe: 67, TenGhe: "số 67 ", Gia: 100, TrangThai: false },
  { SoGhe: 68, TenGhe: "số 68 ", Gia: 100, TrangThai: false },
  { SoGhe: 69, TenGhe: "số 69 ", Gia: 100, TrangThai: false },
  { SoGhe: 70, TenGhe: "số 70 ", Gia: 100, TrangThai: false },
  { SoGhe: 71, TenGhe: "số 71 ", Gia: 100, TrangThai: false },
  { SoGhe: 72, TenGhe: "số 72 ", Gia: 100, TrangThai: false },
  { SoGhe: 73, TenGhe: "số 73 ", Gia: 100, TrangThai: false },
  { SoGhe: 74, TenGhe: "số 74 ", Gia: 100, TrangThai: false },
  { SoGhe: 75, TenGhe: "số 75 ", Gia: 100, TrangThai: false },
  { SoGhe: 76, TenGhe: "số 76 ", Gia: 100, TrangThai: false },
  { SoGhe: 77, TenGhe: "số 77 ", Gia: 100, TrangThai: false },
  { SoGhe: 78, TenGhe: "số 78 ", Gia: 100, TrangThai: false },
  { SoGhe: 79, TenGhe: "số 79 ", Gia: 100, TrangThai: false },
  { SoGhe: 80, TenGhe: "số 80 ", Gia: 100, TrangThai: false },
  { SoGhe: 81, TenGhe: "số 81 ", Gia: 100, TrangThai: false },
  { SoGhe: 82, TenGhe: "số 82 ", Gia: 100, TrangThai: false },
  { SoGhe: 83, TenGhe: "số 83 ", Gia: 100, TrangThai: false },
  { SoGhe: 84, TenGhe: "số 84 ", Gia: 100, TrangThai: false },
  { SoGhe: 85, TenGhe: "số 85 ", Gia: 100, TrangThai: false },
  { SoGhe: 86, TenGhe: "số 86 ", Gia: 100, TrangThai: false },
  { SoGhe: 81, TenGhe: "số 81 ", Gia: 100, TrangThai: false },
  { SoGhe: 88, TenGhe: "số 88 ", Gia: 100, TrangThai: false },
  { SoGhe: 89, TenGhe: "số 89 ", Gia: 100, TrangThai: false },
  { SoGhe: 90, TenGhe: "số 90 ", Gia: 100, TrangThai: false },
  ]
  public listGheDuocChon = [];
  @Input() HuyGhe;
  @Output() pushOutDS = new EventEmitter();
  constructor() { }
  GetGhe(thamso) {
    // if (thamso.trangthai == true) {
    //   this.listGheDuocChon.push(thamso);
    // }
    // else {
    //   for (let index in this.listGheDuocChon) {
    //     if (this.listGheDuocChon[index].soghe === thamso.soghe) {
    //       this.listGheDuocChon.splice(parseInt(index), 1);
    //     }
    //   }
    // }
    // console.log(this.listGheDuocChon);
    
    this.pushOutDS.emit(thamso);
    // for(let i=0;i<this.listGheDuocChon.length;i++){
    //   if(this.listGheDuocChon[i].SoGhe == thamso.SoGhe){}
    // }
  }

  ngOnInit() {
  }

}
