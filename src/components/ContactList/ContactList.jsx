import { ContactToSelect } from '../ContactToSelect/ContactToSelect';
import css from './ContactList.module.css';

export const ContactList = ({ filterContacts, remove }) => {
  return (
    <ul className={css.contactList}>
      {filterContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <ContactToSelect
            name={contact.name}
            number={contact.number}
            remove={remove}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};
