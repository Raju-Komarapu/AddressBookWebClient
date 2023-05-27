import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';
import { ContactFormComponent } from 'src/app/modules/home/components/contact-form/contact-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modelRef?: BsModalRef;
  constructor(private modalService: BsModalService) { 
  }
  
  openContactForm() {
    this.modelRef = this.modalService.show(ContactFormComponent)
  }
}
