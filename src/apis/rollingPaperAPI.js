import instance from '../utils/axios';

const getRequest = async endPoint => {
  try {
    const response = await instance.get(`/recipients/${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    location.href = '../pages/NotFoundPage';
    throw error;
  }
};

const deleteRequest = async endPoint => {
  try {
    const response = await instance.delete(`/${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRollingPaper = async recipientId => {
  return getRequest(`${recipientId}/`);
};

export const getMessage = async (recipientId, limit, offset) => {
  const response = await getRequest(`${recipientId}/messages/?limit=${limit}&offset=${offset}`);
  return response.results;
};

export const deleteRollingPaper = async recipientId => {
  return deleteRequest(`recipients/${recipientId}/`);
};

export const deleteMessage = async messageId => {
  return deleteRequest(`messages/${messageId}/`);
};

export const getReaction = async recipientId => {
  const response = await getRequest(`${recipientId}/reactions/?limit=8`);
  return response.results;
};

export const getTopReaction = async recipientId => {
  const response = await getRequest(`${recipientId}/reactions/?limit=3`);
  return response.results;
};

export const postReaction = async (recipientId, emoji) => {
  const postData = {
    emoji: emoji,
    type: 'increase',
  };
  const response = await instance.post(`/recipients/${recipientId}/reactions/`, postData);
  return response.emoji;
};
