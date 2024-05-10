import instance from '../utils/axios';

export const getUserData = async id => {
  try {
    const response = await instance.get(`/recipients/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
