import type { RoleEnum } from "@/enums";

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
}
