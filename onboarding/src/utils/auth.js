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

export const isManager = () => {
  const user = getLoggedUser();
  return user && user.type === 'manager';
}

export const isCollaborator = () => {
  const user = getLoggedUser();
  return user && user.type === 'collaborator';
}

export const requireManager = (navigate) => {
  if (!isManager()) {
    navigate('/');
    return false;
  }
  return true;
}

export const requireCollaborator = (navigate) => {
  if (!isCollaborator()) {
    navigate('/');
    return false;
  }
  return true;
}