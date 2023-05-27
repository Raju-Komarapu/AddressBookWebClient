import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, OnSameUrlNavigation, Route, Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  selectedId: any;
  constructor(private contactServices: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedId = this.contactServices.selectedId;
      }
      this.selectedId = this.contactServices.selectedId;
    });

    this.contactServices.getContacts().subscribe((result) => {
      this.contactServices.contacts = result;
      this.contacts = result;
    })
    
    this.contactServices.contactSubject.subscribe(
      (contacts) => this.contacts = contacts
    )
  }
}
