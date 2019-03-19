import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { TinTucService } from 'src/app/_core/services/tin-tuc.service';
declare var $: any;
@Component({
  selector: 'app-quan-ly-tin-tuc',
  templateUrl: './quan-ly-tin-tuc.component.html',
  styleUrls: ['./quan-ly-tin-tuc.component.scss']
})
export class QuanLyTinTucComponent implements OnInit {
  @ViewChild("formThemTin") formTT:NgForm;
  @ViewChild("formCapNhat") formCN:NgForm;
  mangTin:any[]=[];
  //thêm tin tức
  ThemTin(value){
    this.TinTucSV.ThemTin(value).subscribe((kq)=>{
      swal({
        type: 'success',
        title: 'Thêm tin tức thành công',
        showConfirmButton: false,
        timer: 2000
      })
      this.mangTin=[];
      this.LayTinTuc();
      this.formTT.reset();
      $('#btnDongForm').trigger('click');
    },(error)=>{
      console.log(error);
    })
  };
  //lấy danh sách tin tức
  LayTinTuc(){
    this.TinTucSV.LayTin().subscribe((kq)=>{
      console.log(kq);
      for (let i in kq) {
        this.mangTin.push(kq[i]);
      }
    },(error)=>{
      console.log(error);
      
    })
  }
  Sua(thamso){
    let ma = thamso.getAttribute("data-ma");
    let tieude = thamso.getAttribute("data-tieuDe");
    let hinhanhtd = thamso.getAttribute("data-hinhAnhTieuDe");
    let noidung = thamso.getAttribute("data-noiDung");
    let hinhanhnd = thamso.getAttribute("data-hinhAnhNoiDung");
    this.formCN.setValue({
      Ma:ma,
      TieuDe:tieude,
      HinhAnhTieuDe:hinhanhtd,
      NoiDung:noidung,
      HinhAnhNoiDung:hinhanhnd,
    })
  
  }
  CapNhat(value){
    this.TinTucSV.CapNhatTin(value).subscribe((kq)=>{
      swal({
        type: 'success',
        title: 'Cập Nhật tin tức thành công',
        showConfirmButton: false,
        timer: 2000
      })
      this.mangTin=[];
      this.LayTinTuc();
      this.formTT.reset();
      $('#btnDongformCN').trigger('click');
    },(error)=>{
      console.log(error);
      
    })
  }
    constructor(private TinTucSV:TinTucService) { }
  
    ngOnInit() {
      setTimeout(() => {
        this.LayTinTuc();
      }, 500);
      
    }
  
  }
  