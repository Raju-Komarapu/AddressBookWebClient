import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  searchText: string = '';
  constructor(private contactServices: ContactService  ) { }

  ngOnInit(): void {
    this.contactServices.getContacts().subscribe((result) => {
      this.contactServices.contacts = result;
      this.contacts = result;
    })

    this.contactServices.contactSubject.subscribe(
      (contacts) => {
        this.contacts = contacts
      }
    )
  }

  reset() {
    this.searchText = '';
  }
}
