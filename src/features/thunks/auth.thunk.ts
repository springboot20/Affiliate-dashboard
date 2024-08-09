import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  login_user,
  register_new_user,
  logout_user,
  forgot_password,
  verify_email,
} from "@/api/axios.config";
import type {
  RegisterPayloadAction,
  LoginPayloadAction,
  ForgotPayloadAction,
  VerifyEmailPayloadAction,
  ValidationError,
} from "@/types/auth/auth";
import { AxiosError } from "axios";

export const register = createAsyncThunk<
  any,
  any,
  {
    rejectValue: ValidationError;
  }
>("auth/register", async (data: RegisterPayloadAction, { rejectWithValue }) => {
  try {
    const response = await register_new_user(data);

    console.log(response.data);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk("auth/login", async (data: LoginPayloadAction) => {
  const response = await login_user(data);

  console.log(response);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await logout_user();
  return response.data;
});

export const forgot = createAsyncThunk("auth/forgot", async (data: ForgotPayloadAction) => {
  const response = await forgot_password(data);
  return response.data;
});

export const verifyEmail = createAsyncThunk(
  "auth/verify-email",
  async (data: VerifyEmailPayloadAction) => {
    const response = await verify_email(data);
    return response.data;
  },
);
