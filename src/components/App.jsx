import { GlobalStyle } from './GlobalStyle';
import { Component } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactElem/ContactList";
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();
    const contactItem = {
      id,
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, contactItem],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactList = () => {
    const { filter, contacts } = this.state;
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  deleteContact = e => {
    const contactId = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
      
     
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        {this.state.contacts.length > 0 ? (
          <ContactList
            contacts={this.filteredContactList()}
            onDeleleButton={this.deleteContact} />
        ) : (
          <p>Contact list is empty</p>
        )}
      
      <GlobalStyle />
      </>
      
    );
    
  }
}

export default App;