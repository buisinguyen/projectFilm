import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Phim } from '../models/Phim';
import { PhimSapChieu } from '../models/phimSapChieu';



@Injectable({
  providedIn: 'root'
})
export class PhimSapChieuService {
  // dsPhimSapChieu:PhimSapChieu[] = [
  //   {
  //     "MaPhim": 66,
  //     "TenPhim": "Captain Marvel",
  //     "Trailer": "https://www.youtube.com/watch?v=1HpZevFifuo",
  //     "MoTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
  //     "NgayKhoiChieu": "2018-07-29T00:00:00",
  //     "HinhAnh": "../../../assets/img/CaptainMarvel.png"
  //     },
  //     {
  //       "MaPhim": 61,
  //       "TenPhim": "Ant-Man1",
  //       "Trailer": "https://www.youtube.com/watch?v=1HpZevFifuo",
  //       "MoTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
  //       "NgayKhoiChieu": "2018-07-29T00:00:00",
  //       "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/ant-man1.jpg"
  //       },
  // ]

  constructor(private http:HttpClient) { }
  LayDanhSachPhim(): Observable<any[]>{
    const api:string =  `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
    let obServable:any = this.http.get(api);
    return obServable;
  }
  LayChiTietPhim(maPhim:string):Observable<any[]> {
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServable:any = this.http.get(api);
    return obServable;
  }
}
