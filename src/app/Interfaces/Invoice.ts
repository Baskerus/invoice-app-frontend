export interface Invoice {
  name: string;
  email: string;
  address: string;
  code: number;
  city: string;
  country: string;
  dueDate: string;
  description: string;
  total: number;
  isPaid: boolean;
}
