export interface Message {
  message: string;
}

export interface User {
  email: string;
  password: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Project extends BaseEntity {
  name: string;
  order: string;
  complete?: boolean;
}

export interface Order extends BaseEntity {
  title: string;
  description: string;
  complete: boolean;
}
