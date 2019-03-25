import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,],
  exports: [MatDatepickerModule],
  // declarations: [
  //   SearchComponent,
  // ],
})

export class MaterialModule { }