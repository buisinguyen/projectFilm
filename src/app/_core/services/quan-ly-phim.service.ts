import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http:HttpClient) { }
  LayDanhSachPhim(): Observable<any[]>{
    const api:string =  `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05`;
    let obServable:any = this.http.get(api);
    return obServable;
  }
  LayChiTietPhim(maPhim:string):Observable<any[]> {
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServable:any = this.http.get(api);
    return obServable; //observable chứa dữ liệu từ server trả về
  }
  LayThongTinPhongVe(MaLichChieu:number):Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    let obServable:any = this.http.get(api);
    return obServable; //observable chứa dữ liệu từ server trả về
  }
}
