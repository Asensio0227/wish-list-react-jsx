export const getLocalStorage = () => {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
};

export const removeUserFromLocalStorage = () => {
  return localStorage.removeItem('list')
};

