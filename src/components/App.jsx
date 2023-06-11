import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './app.module.css';
import { nanoid } from 'nanoid';

const KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsPars = JSON.parse(localStorage.getItem(KEY));

    if (contactsPars) {
      setContacts(contactsPars);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = params => {
    setContacts(contacts.filter(contact => contact.idKey !== params));
  };

  const onChangeFilter = value => {
    setFilter(value);
  };

  const addContact = params => {
    const { name, number } = params;

    const newContact = {};
    newContact.name = name;
    newContact.idKey = nanoid();
    newContact.number = number;
    const list = contacts.map(contact => contact.name.toLowerCase());
    if (list.includes(name.toLowerCase())) {
      alert(`${name} is already in contact`);
      return;
    }
    // const oldContacts = contacts;
    // const changedContacts = [...oldContacts, newContact];
    // setContacts(changedContacts);

    setContacts([...contacts, newContact]);
  };

  return (
    <div className={css.appWrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className={css.titleContact}>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}
