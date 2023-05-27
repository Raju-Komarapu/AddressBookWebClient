import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';
import { DeleteContactComponent } from '../modules/home/components/delete-contact/delete-contact.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  selectedId: string | null = null
  contactSubject = new BehaviorSubject<Contact[]>([]);
  baseUrl: string = "https://localhost:7279/api/contacts"

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`,);
  }

  addContact(contact: Contact): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, contact);
  }

  updateContact(contact:Contact){
    this.http.put(`${this.baseUrl}`,contact).subscribe()
  }

  deleteContact(id: string): void {
    this.http.delete(`${this.baseUrl}?id=${id}`).subscribe();
  }
}
