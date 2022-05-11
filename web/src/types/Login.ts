import internal from "stream";

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
export type ActivityTypes = "Mass" | "Individual"

export interface IndividualActivity {
  name: string;
  internetLink: string;
  ageRequirement: number;
}
export interface MassActivity {
  name: string;
  internetLink: string;
  capacity: number;
}

export interface Activity {
  name: string;
  id: number;
}

export interface Emergency {
  activityId: number;
  phoneNumber: string;
  lockerNumber: number;
}
export interface Equipment {
  name: string;
  purpose: string;
  ssn: number;
}