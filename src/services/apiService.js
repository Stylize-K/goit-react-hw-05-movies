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

//Функція, що фетчить інформацію про конкретный фільм
export const fetchMovie = async (movieId) => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//Приклади корректних запитів
// https://api.themoviedb.org/3/movie/447277?api_key=1d0ad6699455ffbc52bd586fd70b6548
// https://api.themoviedb.org/3/trending/movie/day?api_key=1d0ad6699455ffbc52bd586fd70b6548
