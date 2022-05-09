export interface User {
  phone: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  Manager = "manager",
  Animator = "animator",
  Customer = "customer",
}

export interface Animator {
  id: number;
  name: string;
  phone_number: string;
  expertise: string;
}

export interface Customer {
  id: number;
  name: string;
  age: number;
  room_number: number;
  contact_phone: string;
}

export interface EquipmentPerson {
  ssn: number;
  name: string;
  surname: string;
  contact_phone: string;
}