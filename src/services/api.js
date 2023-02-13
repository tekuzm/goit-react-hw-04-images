import axios from 'axios';

// Use axios

// const API_KEY = '32114919-b1da84808ca0f604bcef4a7c4';
// axios.defaults.baseURL = `https://pixabay.com/api/`;

// const searchImages = async (query, page) => {
//   const response = await axios(
//     `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );

//   return response.data.hits;
// };

// export default searchImages;

// Use instance

const API_KEY = '32114919-b1da84808ca0f604bcef4a7c4';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const searchImages = async (q, page) => {
  const response = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return response.data;
};

export default searchImages;
