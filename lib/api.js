import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const fetchPixGenMedia = async () => {
  try {
    const response = await axios.get(`${API_URL}/media`);
    return response.data;
  } catch (error) {
    console.error('Error fetching media data:', error);
    throw error;
  }
};