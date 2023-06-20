import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId!: string;
  contact!: Contact;
  modalRef?: BsModalRef
  constructor(
    private contactServices: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    public modalService: BsModalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.contactId = params.get('id') as string;
        this.contactServices.contactSubject.subscribe(
          (result) => {
            let index = result.findIndex(contact => contact.id === this.contactId);
            this.contact = result[index];
          })
      });
  }

  openContactForm(contact: Contact) {
    this.modalRef = this.modalService.show(ContactFormComponent, { initialState: { contact: contact } })
  }

  deleteContact(id: string) {
    this.contactServices.deleteContact(id);
    let index = this.contactServices.contacts.findIndex(obj => obj.id === id);
    this.contactServices.contacts.splice(index, 1);
    this.contactServices.contactSubject.next([...this.contactServices.contacts]);
    this.router.navigate([`/home/contacts`]);
  }
}
