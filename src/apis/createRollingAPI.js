import instance from '../utils/axios';

const postRolling = async postData => {
  try {
    const response = await instance.post('/recipients/', postData, {});
    return response.data.id;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default postRolling;
