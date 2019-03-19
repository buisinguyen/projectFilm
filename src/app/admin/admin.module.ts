import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyTinTucComponent } from './quan-ly-tin-tuc/quan-ly-tin-tuc.component';
import { TrangchuAdminComponent } from './trangchu-admin/trangchu-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ChartsModule } from 'ng2-charts';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [AdminLayoutComponent,
    HeaderAdminComponent,
    LoginAdminComponent,
    QuanLyNguoiDungComponent,
    QuanLyPhimComponent,
    QuanLyTinTucComponent,
    TrangchuAdminComponent,
    AdminLayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ChartsModule,
    OrderModule
    


  ],
  exports: [
    LoginAdminComponent,
    AdminLayoutComponent,
    TrangchuAdminComponent,
    HeaderAdminComponent,
    QuanLyPhimComponent,
    QuanLyNguoiDungComponent
  ]
})
export class AdminModule { }
