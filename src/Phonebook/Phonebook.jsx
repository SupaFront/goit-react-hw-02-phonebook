import { nanoid } from "nanoid";
import React, { Component } from "react";
import Form from '../Form'
import ContactList from "../ContactList";
import FilterList from "../FilterList";
import styles from './Phonebook.module.css'

export default class Phonebook extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  addContact = contact => {
    if (this.state.contacts.some(item => item.name.toLowerCase() === contact.name.toLowerCase())) {
      alert('This contact is already exist!! Try one more time, 4ort');
      return;
    }
    return this.setState(prevState => ({ contacts: [...prevState.contacts, { ...contact, id: nanoid() }] }))
  }
  removeContact = contactId => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts
    }
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
      )
  
  }
    

  
  onFilterChange = filter => {
    this.setState({ filter });
  }
  
  


  render() {
    const contacts = this.getFilteredContacts();
  
    const { filter } = this.state;
    const {  removeContact, onFilterChange, addContact} = this;
    return <>
      <h2 className={styles.title}>Phonebook</h2>
      <Form addContact={addContact}></Form>
      <FilterList filter={filter} onFilterChange={onFilterChange} />
      <h2 className={styles.title}>Phonebook</h2>
          <ContactList contact={contacts}
          removeContact={removeContact}></ContactList>
          </>
    }
}