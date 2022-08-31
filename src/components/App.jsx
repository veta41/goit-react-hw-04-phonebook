import { GlobalStyle } from './GlobalStyle';
import { Box } from 'components/Box';
import {useState,useEffect} from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList";


function App(){

  const [contacts, setContacts] = useState(() => 
  JSON.parse(localStorage.getItem('contacts')) ?? 
  
  [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  );

  const [filter, setFilter] = useState('');

   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])


  
  const deleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
      };

  

      const addContact = data => {
        const contact = {
          id: nanoid(),
          name: data.name,
          number: data.number,
        };
    
        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
          alert(`${data.name} is already in contacts`);
          return;
        };
    
        setContacts(prevState => [contact, ...prevState]
        );
      };
    
      const changeFilter = event => {
        setFilter(event.currentTarget.value);    
       };
    
      
      const normalizedFilter = filter.toLocaleLowerCase();
      const filteredContactList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );

    return (
      <Box
      display = 'flex'
      flexDirection = 'column'
      alignItems = 'center'
      justifyContent = 'center'
      fontSize = {24}
      padding= {15}
      >
     <div>
      <h1>Phonebook</h1>
      </div>
       
       
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContactList}
            onDeleleButton={deleteContact} />
        ) : (
          <p>Contact list is empty</p>
        )}
      
      <GlobalStyle />
      
      </Box>
      
    );
    
  }


export default App;