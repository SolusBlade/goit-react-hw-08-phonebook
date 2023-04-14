import axios from 'axios';

// axios.defaults.baseURL = 'https://6436c2243e4d2b4a12daf574.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerApi = user => {
  return axios.post('/users/signup', user).then(r => r.data);
}
export const loginApi = user => {
  return axios.post('/users/login', user).then(r => {
    return r.data
  });
}
export const logOutApi = () => {
  return axios.post('/users/logout').then(r => {
    return r.data
  });
}
export const getCurrentUserApi = (token) => {
  return axios.get('/users/current', token).then(r => {
    return r.data;
  });
};

export const addContactApi = (contact) => {
    return axios.post('/contacts', contact).then(({ data }) => {
      return data;
    });
};

export const getContactsApi = () => {
    return axios
        .get('/contacts')
        .then(({ data }) =>{
            return data;
        }
    );
};

export const removeContactApi = (id) => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
