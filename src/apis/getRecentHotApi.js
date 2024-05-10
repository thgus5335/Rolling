import instance from '../utils/axios';

export const getRecentApi = async () => {
  try {
    const response = await instance.get('/recipients/?limit=100');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotApi = async () => {
  try {
    const response = await instance.get('/recipients/?limit=100&sort=like');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
