export interface Invoice {
  name: string;
  email: string;
  address: string;
  code: number;
  city: string;
  country: string;
  due_date: string;
  description: string;
  total: number;
  isPaid: boolean;
}
