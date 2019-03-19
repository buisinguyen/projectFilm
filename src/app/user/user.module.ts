import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTrangChuComponent } from './layout-trang-chu/layout-trang-chu.component';
import { LayoutPhimComponent } from './layout-phim/layout-phim.component';
import { LayoutChiTietPhimComponent } from './layout-chi-tiet-phim/layout-chi-tiet-phim.component';

import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from '../general/header/header.component';
import { FormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';
import { PhimComponent } from './layout-phim/phim/phim.component';
import { PipeModule } from '../_core/shared/Module/pipe/pipe.module';
import { PhimSapChieuComponent } from './layout-phim/phim/phim-sap-chieu/phim-sap-chieu.component';
import { LayoutDatVeComponent } from './layout-dat-ve/layout-dat-ve.component';
import { LayoutVeComponent } from './layout-dat-ve/layout-ve/layout-ve.component';
import {NgxPaginationModule} from 'ngx-pagination';



// const userRoutes:Routes = [
//     {path:'', component: LayoutTrangChuComponent},
//     {path:'chitietphim', component: LayoutChiTietPhimComponent}
// ]

@NgModule({
  declarations: [LayoutTrangChuComponent, LayoutPhimComponent, LayoutChiTietPhimComponent, PhimComponent, PhimSapChieuComponent, LayoutDatVeComponent, LayoutVeComponent],
  imports: [
    CommonModule,RouterModule,  FormsModule, GeneralModule, PipeModule, NgxPaginationModule
  ],

})
export class UserModule { }
