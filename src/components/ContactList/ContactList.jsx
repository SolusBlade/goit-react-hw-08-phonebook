import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { selectorFilteredContacts } from 'redux/contacts/contactsSelectors';
import { removeContact } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectorFilteredContacts);

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={s.contactItem}>
            <p className={s.text}>{name}:</p>
            <p className={s.text}>{number}</p>
            <button
              className={s.contactBtn}
              onClick={() => dispatch(removeContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
