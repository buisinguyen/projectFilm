import { NguoiDung } from '../models/nguoidung';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  dangKyNguoiDung(user: NguoiDung) {
    let urlDangKy = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let obServable= this.http.post(urlDangKy, user);
    return obServable;
  }
  layDanhSachNguoiDung() {
    const api:string= `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05`;
    let obServable:any=this.http.get(api);
    return obServable;
  }
  dangNhapNguoiDung(user: NguoiDung) {
    let urlDangNhap = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    let obServe: Observable<any> = this.http.post(urlDangNhap, user);
    return obServe;
  }
  KiemTraDangNhap(): boolean {
    let nguoiDung = localStorage.getItem("localNguoiDung");
    if (nguoiDung != null) {
      return true;
    }
    return false;
  }
  LayThongTinDangNhap(): NguoiDung {
    if (this.KiemTraDangNhap()) {
      let nguoiDung: NguoiDung = JSON.parse(localStorage.getItem('localNguoiDung'));
      return nguoiDung;
    }
    return null;
  }
  DangXuat(): void {
    localStorage.removeItem('localNguoiDung');
  }
  XoaNguoiDung(user: NguoiDung) {
    let urlXoa = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`;
    let obServe: Observable<any> = this.http.delete(urlXoa);
    return obServe;
  }
  capNhatNguoiDung(user: NguoiDung) {
    let urlCapNhat = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let obServe: Observable<any> = this.http.post(urlCapNhat, user);
    return obServe;
  }
  layLichSuDatVe(user: NguoiDung) {
    let urlLichSu = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${user.TaiKhoan}`;
    let obServe: Observable<any> = this.http.post(urlLichSu, user);
    return obServe;
  }
  constructor(private http: HttpClient) { }
}
