import { List } from 'lodash';

export interface User {
  address_wallet: string;
  fullname: string;
  avatar: string; // link img
  followers: String[]; // list address of followers
  following: String[]; // list address of following
  bio: string;
  role: ROLE;
}

export enum ROLE {
  USER,
  FARMER,
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// Nông trại
export interface Farm {
  id: number;
  name: string;
  owner: string;
  products: List<Product>;
  location: { latitude: number; longitude: number };
}

// đánh giá
export interface Review {}
