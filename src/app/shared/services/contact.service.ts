import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Contact } from '../../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSubject = new BehaviorSubject<Contact[]>([]);
  baseUrl: string = "https://localhost:7279/api/contacts"

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl).pipe(
      map(contacts => contacts.sort((a, b) => a.name.localeCompare(b.name)))
    ).pipe(
      tap(result => {
        this.contactSubject.next(result);
      })
    );
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`,);
  }

  addContact(contact: Contact): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, contact);
  }

  updateContact(contact: Contact) {
    this.http.put(`${this.baseUrl}`, contact).subscribe()
  }

  deleteContact(id: string): void {
    this.http.delete(`${this.baseUrl}?id=${id}`).subscribe();
  }
}
