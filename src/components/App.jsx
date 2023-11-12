import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');
  const loginInputId = nanoid();
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const change = evt => {
    const { value } = evt.target;
    setFilter(value);
  };
  const submit = (name, number) => {
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    reset();
  };
  const remove = contactId => {
    const updateContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updateContacts);
  };
    const showContactToSelect = () => {
      const filterNormalize = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterNormalize)
      );
    };
    
    const reset = () => {
      setFilter('');
    };

    const filterContacts = showContactToSelect();

  return (
    <>
      <ContactForm onSubmit={submit} />
      <Filter change={change} filter={filter} loginInputId = {loginInputId}/>
      <ContactList filterContacts={filterContacts} remove={remove} />
    </>
  );
}