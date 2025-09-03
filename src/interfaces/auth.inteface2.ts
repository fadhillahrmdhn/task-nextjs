import { User } from "./user.interface";

//login
export interface LoginRequests {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginData {
  user: User;
  accessToken: string;
  expiresIn: string;
}

//authe me

export interface AuthMedata {
  id: string;
  email: string;
  role: string;
}

// export interface AuthResponse {
//   message: string,
//   statusCode: number,
//   timestamp: string,
//   data: {
//     user: {
//       id: string,
//       name: string,
//       email: string,
//       role: RoleEnum
//     },
//     accessToken: string,
//     expiresIn: string
//   };
// }
