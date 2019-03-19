import { Component, ViewChild, OnInit } from '@angular/core';
import {NguoiDung} from '../../_core/models/nguoidung';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  @ViewChild("formDangNhap") formDN: NgForm;
  DangNhap(value: NguoiDung) {
    value.MaLoaiNguoiDung = "QuanTri";
    this.nguoiDungSV.dangNhapNguoiDung(value).subscribe((kq: any) => {
      if (value.MaLoaiNguoiDung == kq.MaLoaiNguoiDung) {
        if (typeof (kq) == "object") {
          localStorage.setItem('AdminDangNhap', JSON.stringify(kq));
          this.auth.DangNhapAdmin();
          this.router.navigate(['admintrangchu/home']);
        } else {
          alert('tài khoản hoặc mật khẩu không đúng !')
        }
      } else {
        this.router.navigate(['admin']);
      }
    }, error => {
      console.log(error);
    });
  }
  constructor(private nguoiDungSV: NguoiDungService , private router: Router, private auth:AuthService ) { }

  ngOnInit() {
  }

}