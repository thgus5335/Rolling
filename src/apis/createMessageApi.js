import instance from '../utils/axios';

export const createMessageApi = async (submitInfo, id) => {
  try {
    const response = await instance.post(`/recipients/${id}/messages/`, submitInfo);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getRecipient = async () => {
  try {
    const response = await instance.get('/recipients/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
