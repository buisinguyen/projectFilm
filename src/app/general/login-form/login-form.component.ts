import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { userLogin } from 'src/app/_core/models/userLogin';
import { Subscription } from 'rxjs';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/_core/models/nguoidung';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  subService: Subscription;
  @ViewChild("frmDangNhap") formDN: NgForm;

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
  }
  DangNhap(userlogin: any) {
    console.log(userlogin);
    this.subService = this.nguoiDungService.DangNhap(userlogin).subscribe((result) => {
      console.log(result);

      if (typeof result == 'object') {
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        swal('Thông báo', 'Đăng nhập thành công !', 'success');
      } else {
        swal('Thông báo', result, 'error');

      }

    })
    // console.log(userLogin);

  }
  ngOnDestroy(): void {
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }
}
