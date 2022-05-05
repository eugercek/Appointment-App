export interface User {
  email: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  Manager = "manager",
  Animator = "animator",
  Customer = "customer",
}
