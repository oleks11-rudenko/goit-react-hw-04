import axios from 'axios';

const apiKey = 'ngrGNriS6F8Z3q6W369KAItE5OVfq60ArhnvmkpKals';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export async function fetchImages(query, currentPage) {
  const response = await axios.get('/search/photos/', {
    params: {
      client_id: apiKey,
      query: query,
      page: currentPage,
    },
  });
  return response.data;
}
