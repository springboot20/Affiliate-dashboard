export type ForgotPayloadAction = { email: string };

export type VerifyEmailPayloadAction = { token: string; userId: string };

export type InitialState = {
  isLoading: boolean;
  user: User;
  data: any;
  tokens: Token;
};

export type RegisterPayloadAction = {
  username: string;
  password: string;
  email: string;
};

export type LoginPayloadAction = { email: string; password: string };

export type User = {
  _id: string;
  username: string;
  role: string;
  email: string;
  avatar: {
    url: string;
    public_id: string;
  };
  forgotPasswordTokenExpiry: Date;
  forgotPasswordToken: string;
  loginType: string;
  isEmailVerified: boolean;
};

export type Token = {
  accessToken: string;
  refreshToken: string;
};
