interface Address {
  city: string;
  street: string;
  postcode: number;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  picture: string;
  email: string;
  address: Address;
}
