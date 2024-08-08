import {
  login_user,
  register_new_user,
  logout_user,
  forgot_password,
  verify_email,
} from "@/api/axios.config";
import {
  InitialState,
  RegisterPayloadAction,
  LoginPayloadAction,
  ForgotPayloadAction,
  VerifyEmailPayloadAction,
} from "@/types/auth/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: InitialState = {
  isLoading: false,
  user: null!,
  tokens: null!,
  data: {},
};

export const register = createAsyncThunk(
  "auth/register",
  async (data: RegisterPayloadAction) => {
    const response = await register_new_user(data);

    console.log(response.data);
    return response.data;
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginPayloadAction) => {
    const response = await login_user(data);

    return response.data;
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await logout_user();
  return response.data;
});

export const forgot = createAsyncThunk(
  "auth/forgot",
  async (data: ForgotPayloadAction) => {
    const response = await forgot_password(data);
    return response.data;
  },
);

export const verifyEmail = createAsyncThunk(
  "auth/verify-email",
  async (data: VerifyEmailPayloadAction) => {
    const response = await verify_email(data);
    return response.data;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Register builder casing
     */
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.data = action.payload;
        state.isLoading = false;

        toast.success(state.data.message);
      })
      .addCase(register.rejected, (_, action) => {
        toast.error(action.error.message);
      });

    /**
     * Login builder casing
     */
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
        state.data = null;
        state.isLoading = false;

        toast.success(state.data.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        
        toast.error(action.error.message);
      });

    /**
     * logout builder casing
     */
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state,{payload}) => {
        state.isLoading = false;

        state.data = null;
        state.user = null!;
        state.tokens = null!;

        toast.success(payload.message);
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      });

    /**
     * Forgot password builder case
     */
    builder
      .addCase(forgot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;

        toast.success(state.data.message);
      })
      .addCase(forgot.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      });

    /**
     * Verify email
     */

    builder
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.data = action.payload;

        toast.success(state.data.message);
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      });
  },
});

export const authReducer = authSlice.reducer;
// export const {  } = authSlice.actions;
