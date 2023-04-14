import axios from 'axios';
import { getContacts } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { selectorToken } from 'redux/auth/authSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  useEffect(() => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    dispatch(getContacts());
  }, [dispatch, token]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
