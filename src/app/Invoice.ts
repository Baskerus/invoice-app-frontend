export interface Invoice {
  id: number;
  name: string;
  email: string;
  streetAddress: string;
  postCode: number;
  city: string;
  country: string;
  due: number;
  description: string;
  total: number;
  paid: boolean;
}
