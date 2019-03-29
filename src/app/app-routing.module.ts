import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { TrangchuAdminComponent } from './admin/trangchu-admin/trangchu-admin.component';
import { QuanLyPhimComponent } from './admin/quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyTinTucComponent } from './admin/quan-ly-tin-tuc/quan-ly-tin-tuc.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { LayoutTrangChuComponent } from './user/layout-trang-chu/layout-trang-chu.component';
import { LayoutPhimComponent } from './user/layout-phim/layout-phim.component';
import { LayoutChiTietPhimComponent } from './user/layout-chi-tiet-phim/layout-chi-tiet-phim.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginGuardService } from './_core/services/login-guard.service';
import { DanhSachGheComponent } from './general/danh-sach-ghe/danh-sach-ghe.component';
import { LayoutDatVeComponent } from './user/layout-dat-ve/layout-dat-ve.component';

const routes: Routes = [

  {
    path: "admin", component: LoginAdminComponent
  },
  {
    path: "admintrangchu", component: AdminLayoutComponent, canActivate: [LoginGuardService], children: [
      { path: 'home', component: TrangchuAdminComponent },
      { path: 'quanlyphim', component: QuanLyPhimComponent },
      { path: 'quanlynguoidung', component: QuanLyNguoiDungComponent },
      { path: 'quanlytintuc', component: QuanLyTinTucComponent },
      { path: 'admin', component: LoginAdminComponent }
    ]
  },
  {
    path: '', component: LayoutTrangChuComponent, children:[
      {path: 'trangchu', component:LayoutPhimComponent},
      {path: '', component: LayoutPhimComponent},
      {path: 'chitietphim', component: LayoutChiTietPhimComponent},
      {path: 'danhsachghe',component:LayoutDatVeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
