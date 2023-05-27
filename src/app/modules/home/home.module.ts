import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './pages/home.component';
import { LayoutModule } from 'src/app/layouts/layout.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ContactDetailsComponent,
    DeleteContactComponent,
    ContactsComponent,
    HomeComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
