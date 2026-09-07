import { apiClient } from '../client';

export interface LoginCredentials {
  email: string;
  password: string;
}

export function login(credentials: LoginCredentials) {
  return apiClient.post('/login', credentials);
}