import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const saveContact = localStorage.getItem('contacts');
    if (saveContact) {
      this.setState({ contacts: JSON.parse(saveContact) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  change = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  submit = (name, number) => {
    const { contacts } = this.state;
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  remove = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => contactId !== id),
    }));
  };
  showContactToSelect = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const filterContacts = this.showContactToSelect();
    return (
      <>
        <ContactForm onSubmit={this.submit} />
        <Filter change={this.change} filter={filter} />
        <ContactList filterContacts={filterContacts} remove={this.remove} />
      </>
    );
  }
}
