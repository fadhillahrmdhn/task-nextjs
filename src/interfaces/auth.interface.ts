import type { RoleEnum } from "@/enums";
import type { LoginFormValues, LoginResponse } from "./";

export interface AuthUser {
  id: string;
  email: string;
  role: RoleEnum;
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setLoading: (loading: boolean) => void;
  login: ({ value }: { value: LoginFormValues }) => Promise<LoginResponse>;
  logout: () => void;
}

export interface AuthMe {
  message: string;
  statusCode: number;
  timestamp: string;
  data: {
    id: string;
    email: string;
    role: RoleEnum;
  };
}

export interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
