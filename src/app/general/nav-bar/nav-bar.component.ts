import { Component, OnInit, ViewChild } from '@angular/core';
import { userLogin } from 'src/app/_core/models/userLogin';
import { Subscription } from 'rxjs';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';






@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  subService: Subscription;
  @ViewChild("frmDangNhap") formDN: NgForm;

  public isLogin: boolean = false;
  user: string = "";
  constructor(private nguoiDungService: NguoiDungService) { }
  DangNhap(userlogin: any) {
    console.log(userlogin);
    this.subService = this.nguoiDungService.DangNhap(userlogin).subscribe((result) => {
      // console.log(result);

      if (typeof result == 'object') {
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
      }
    })
    location.reload();

  }
  DangXuat() {
    this.user = "";
    this.isLogin = false;
    localStorage.removeItem(this.user);
    // location.reload();
  }
  ngOnInit() {
    if (localStorage.getItem("userLogin")) {
      this.isLogin = true;
      this.user = localStorage.getItem("userLogin");
    }

  }

}