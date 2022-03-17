export interface Invoice {
  name: string;
  email: string;
  address: string;
  code: number;
  city: string;
  country: string;
  due: number;
  description: string;
  total: number;
  paid: boolean;
}
