const API_URL = 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const { type } = JSON.parse(user);
    return {
      'Content-Type': 'application/json',
      'X-User-Type': type // Envia tipo do usuário
    };
  }
  return { 'Content-Type': 'application/json' };
};

export const api = {
  // Auth
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  // Users (apenas managers)
  getUsers: async () => {
    const response = await fetch(`${API_URL}/users`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getUser: async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  createUser: async (userData) => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // Tasks
  getTasks: async (collaboratorId) => {
    const url = collaboratorId 
      ? `${API_URL}/tasks?collaborator_id=${collaboratorId}`
      : `${API_URL}/tasks`;
    const response = await fetch(url, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  updateTask: async (id, status) => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return response.json();
  },

  getTemplate: async (role) => {
    const response = await fetch(`${API_URL}/tasks/templates/${role}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};