export const getLoggedUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export const setLoggedUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const logout = () => {
  localStorage.removeItem('user');
}