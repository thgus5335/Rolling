// import axios from 'axios';
import instance from '../utils/axios';
const API_URL = 'https://api.imgur.com/3/image';

const uploadImage = async ({ file }) => {
  const clientId = process.env.REACT_APP_IMGUR_CLIENT_ID;
  const auth = 'Client-ID ' + clientId;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await instance.post(API_URL, formData, {
      headers: {
        Authorization: auth,
        'Content-Type': 'multipart/form-data',
      },
    });

    const imageUrl = response.data.data.link;

    return imageUrl;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default uploadImage;
