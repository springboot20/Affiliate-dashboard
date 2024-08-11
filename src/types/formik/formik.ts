export interface RegisterState {
  username: string;
  email: string;
  password: string;
}

export interface LoginState {
  email: string;
  password: string;
}

export type ProfileValues = {
  username: string;
  email: string;
  password: string;
  "date-of-birth": string;
  address: {
    present: string;
    permanent: string;
  };
  city: string;
  "postal-code": string;
  country:string
};