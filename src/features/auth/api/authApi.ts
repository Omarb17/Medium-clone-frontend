import { apiClient } from "@/src/shared/api";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../model/types";
import type { User } from "@/src/entities/user/model/types";

export const authApi = {
  register: async (
    data: RegisterRequest
  ): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/register",
      data
    );

    return response.data;
  },

  login: async (
    data: LoginRequest
  ): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      data
    );

    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>("/users/me");

    return response.data;
  },
};
