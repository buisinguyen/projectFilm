import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { LoginFormComponent } from './login-form/login-form.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import {  RouterModule } from '@angular/router';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './danh-sach-ghe/ghe/ghe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavBarComponent, HeaderComponent, FooterComponent, GheComponent, LoginFormComponent, SingUpFormComponent, DanhSachGheComponent],
  imports: [
    CommonModule, MatMenuModule, RouterModule, FormsModule
  ],
  exports: [NavBarComponent, HeaderComponent, FooterComponent, GheComponent, LoginFormComponent, SingUpFormComponent, DanhSachGheComponent]
})
export class GeneralModule { }
