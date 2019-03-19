import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NguoiDung } from 'src/app/_core/models/nguoidung';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sing-up-form',
  templateUrl: './sing-up-form.component.html',
  styleUrls: ['./sing-up-form.component.scss']
})
export class SingUpFormComponent implements OnInit, OnDestroy {

  subServiceLayDanhSach: Subscription;
  subService: Subscription;
  checkSaveForm: boolean = false;
  @ViewChild("frmDangKy") formDK: NgForm;
  mangNguoiDung: any[] = [];
  // ngayHomNay: Date = new Date();
  constructor(private nguoiDungService: NguoiDungService) { }
  DangKy(nguoidung: NguoiDung) {
    nguoidung.MaNhom = "GP05";
    nguoidung.MaLoaiNguoiDung = "KhachHang";
    this.checkSaveForm = true;
    //Gọi service thêm người dùng đưa dữ liệu về backend
    this.subService = this.nguoiDungService.dangKyNguoiDung(nguoidung).subscribe((result) => {
      console.log(result)
      // if (typeof result == 'string') {
      //   console.log("Thành công");
      // } else {
      //   //Đăng nhập thất bại
      //   console.log("fail");
      // }
      // console.log(typeof (result));

    })
    this.formDK.reset();
    console.log(nguoidung);


  }

  ngOnInit() {
    // this.subServiceLayDanhSach = this.nguoiDungService.layDanhSachNguoiDung().subscribe((dsNguoiDung: NguoiDung[]) => {
    //   this.mangNguoiDung = dsNguoiDung;


    // })
  }


  ngOnDestroy(): void {
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }
}
