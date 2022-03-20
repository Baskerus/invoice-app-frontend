export interface Invoice {
  name: string;
  email: string;
  address: string;
  code: number;
  city: string;
  country: string;
  due_date: number;
  description: string;
  total: number;
  isPaid: boolean;
}
