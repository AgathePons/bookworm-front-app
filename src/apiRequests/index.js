import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';

export const createAccount = (
    username,
    email,
    password,
    passwordConfirm,
    callback,
  ) => {
    axios.post(`${apiUrl}/playerAccount`, {
      username: username,
      mail: email,
      password: password,
      passwordConfirm: passwordConfirm,
    })
    .then(({ data }) => {
      callback(data.id);
    })
    .catch((error) => {
      console.log(error);
  });
};

export const getFirstSentence = (callback) => {
  axios.get(`${apiUrl}/sentence/first`)
    .then(({data}) => {
      const firstMessage = [data];
      callback(firstMessage);
    })
    .catch((error) => {
      console.error(error);
    })
}

export const getRandomSentence = (messages, callback) => {
  axios.get(`${apiUrl}/sentence`)
    .then(({data}) => {
      const newMessage = [...messages, data];
      callback(newMessage);
    })
    .catch((error) => {
      console.error(error);
    })
}

export const fetchApi = {
  createAccount,
  getFirstSentence,
};

export default fetchApi;
