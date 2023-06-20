import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  addContactForm!: FormGroup;
  @Input() contact!: Contact;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.addContactForm = this.formBuilder.group({
      name: [this.contact?.name || '', Validators.required],
      email: [this.contact?.email || '', [Validators.required, Validators.email]],
      mobile: [this.contact?.mobile || '', Validators.required],
      landline: [this.contact?.landline || ''],
      website: [this.contact?.website || ''],
      address: [this.contact?.address || '']
    })
  }

  onSubmit() {
    this.addContactForm.markAllAsTouched();
    if (this.addContactForm.valid) {
      this.modalRef.hide();
      let contact: Contact = {
        id: this.contact?.id || '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: this.addContactForm.value.name,
        email: this.addContactForm.value.email,
        mobile: this.addContactForm.value.mobile,
        landline: this.addContactForm.value.landline,
        website: this.addContactForm.value.website,
        address: this.addContactForm.value.address
      }
      if (this.contact) {
        this.contactService.updateContact(contact);
        const index = this.contactService.contacts.findIndex(contact => contact.id === this.contact.id);
        if (index !== -1) {
          this.contactService.contacts[index] = contact;
          this.contactService.contactSubject.next(this.contactService.contacts);
          this.router.navigate([`/home/contacts/${contact.id}`])
        }
      }
      else {
        this.contactService.addContact(contact).subscribe(
          (contactId) => {
            this.contactService.getContact(contactId).subscribe(
              (contact) => {
                this.contactService.contacts.push(contact);
                this.contactService.contactSubject.next([...this.contactService.contacts]);
                this.router.navigate([`/home/contacts/${contactId}`])
              }
            )
          }
        )
      }
    }
  }
}
