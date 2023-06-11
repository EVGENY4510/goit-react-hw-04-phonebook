import css from './ContactList.module.css';

export default function ContactList({ contacts, filter, deleteContact }) {
  const displaySearchResult = () => {
    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactLower = contact.name.toLowerCase();
      return contactLower.includes(searchResultLower);
    });
    return filteredContacts.map(contact => (
      <li key={contact.idKey} className={css.item}>
        <p>
          - {contact.name} :<span className={css.span}>{contact.number}</span>
        </p>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => deleteContact(contact.idKey)}
        >
          Delete
        </button>
      </li>
    ));
  };

  return <ul>{displaySearchResult()}</ul>;
}
