import { Injectable } from '@angular/core';
import { Phim } from '../models/Phim';
import{ HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  layDanhSachPhim() {
    const api:string=`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05`
    let obServable:any=this.http.get(api);
    return obServable;
  }
  LayChiTietPhim(MaPhim):Observable<any[]>{
    const api :string=`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`
    let obServable:any=this.http.get(api);
    return obServable; //chứa dữ liệu server trả về
  }
  LayChiTietPhongVe(MaLichChieu:number):Observable<any[]>{
    const api :string=`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`
    let obServable:any=this.http.get(api);
    return obServable; //chứa dữ liệu server trả về
  }
  ThemPhim(phim:any){
    const api:string=`http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let obServe = this.http.post(api, phim);
    return obServe;
  }
  ThemHinhAnh(fileHinh, tenPhim) {
    const urlThemPhim:string = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;
    let formData = new FormData();
    formData.append('Files', fileHinh);
    formData.append('TenPhim', tenPhim);
    let obServe: Observable<any> = this.http.post(urlThemPhim, formData);
    return obServe;
  }
  XoaPhim(phim: Phim) {
    let urlXoa = `http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phim}`;
    let obServe= this.http.delete(urlXoa);
    return obServe;
  }
  capNhatPhim(phim: any) {
    let urlCapNhat = `http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let obServe= this.http.post(urlCapNhat, phim);
    return obServe;
  }
  DatVe(ve: any) {
    let urlDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let obServe = this.http.post(urlDatVe, ve);
    return obServe;
  }
  constructor(private http: HttpClient) { }
}
