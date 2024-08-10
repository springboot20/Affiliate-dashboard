import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  login_user,
  register_new_user,
  logout_user,
  forgot_password,
  send_email,
  verify_email,
} from "@/api/axios.config";
import type {
  RegisterPayloadAction,
  LoginPayloadAction,
  ForgotPayloadAction,
} from "@/types/auth/auth";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "auth/register",
  async (data: RegisterPayloadAction, { rejectWithValue }) => {
    try {
      const response = await register_new_user(data);
      toast.success(response.data.message);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginPayloadAction, { rejectWithValue }) => {
    try {
      const response = await login_user(data);

      toast.success(response.data.message);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await logout_user();

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data);
    }
  }
});

export const forgot = createAsyncThunk(
  "auth/forgot",
  async (data: ForgotPayloadAction, { rejectWithValue }) => {
    try {
      const response = await forgot_password(data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
);

export const sendMail = createAsyncThunk(
  "auth/forgot",
  async (data: { email: string }, { rejectWithValue }) => {
    try {
      const response = await send_email(data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
);

export const verifyMail = createAsyncThunk(
  "auth/forgot",
  async (data: { userId: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await verify_email(data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
);
