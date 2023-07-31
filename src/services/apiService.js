import axios from 'axios';

//Унікальний ключ доступу до Themoviedb.org API
const KEY = '1d0ad6699455ffbc52bd586fd70b6548';

//Функція, що фетчить список популярних фільмів (для сторінки Home)
export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

//Функція, що фетчить інформацію про конкретный фільм (для сторінки MovieDetails)
export const fetchMovie = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//Функція, що фетчить список фільмів за ключевим словом (для сторінки Movies)
export const fetchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios({
    params: {
      api_key: KEY,
      query,
    },
  });
  return data;
};

//Функція, що фетчить інформацію про акторский склад конкретного фільму (для компонента Cast)
export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//Функція, що фетчить інформацію про відгуки на конкретний фільм (для компонента Reviews)
export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//Приклади корректних запитів
// https://api.themoviedb.org/3/movie/447277?api_key=1d0ad6699455ffbc52bd586fd70b6548

// https://api.themoviedb.org/3/trending/movie/day?api_key=1d0ad6699455ffbc52bd586fd70b6548

//https://api.themoviedb.org/3/movie/447277/reviews?api_key=1d0ad6699455ffbc52bd586fd70b6548
