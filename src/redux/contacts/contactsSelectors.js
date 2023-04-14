import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.items;
export const selectorFilter = state => state.contacts.filter;

export const selectorFilteredContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    if (filter === '') return contacts;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  }
);