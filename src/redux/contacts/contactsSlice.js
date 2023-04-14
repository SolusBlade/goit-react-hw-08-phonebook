import { createSlice } from '@reduxjs/toolkit';

import { addContact, getContacts, removeContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },

  reducers: {
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(value) {
        return {
          payload: value.toLowerCase(),
        };
      },
    },
  },
  
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const {changeFilter} = contactsSlice.actions;
export default contactsSlice.reducer;

