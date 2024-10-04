import { Component } from '@angular/core';
import { Contact } from './PhoneContact';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  contacts: Contact[] = [];

  addContact(name: string, phoneNumber: string) {
    if (name && phoneNumber) {
      const newContact: Contact = {
        id: this.contacts.length + 1,
        name,
        phoneNumber
      };
      this.contacts.push(newContact);
    }
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
