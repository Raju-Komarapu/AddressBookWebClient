import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  exports:[
    HeaderComponent
  ]
})
export class LayoutModule { }
