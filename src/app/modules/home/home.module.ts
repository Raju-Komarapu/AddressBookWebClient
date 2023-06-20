import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './pages/home.component';
import { LayoutModule } from 'src/app/layouts/layout.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoContactsComponent } from './components/no-contacts/no-contacts.component';

@NgModule({
  declarations: [
    ContactDetailsComponent,
    ContactsComponent,
    HomeComponent,
    ContactFormComponent,
    NoContactsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
