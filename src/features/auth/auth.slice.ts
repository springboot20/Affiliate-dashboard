import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { InitialState, Token, User } from "@/types/auth/auth";
import { forgot, login, logout, register, verifyEmail } from "../thunks/auth.thunk";

const initialState: InitialState = {
  loading: "idle",
  data: {
    tokens: {} as Token,
    user: {} as User,
  },
  requestedId: undefined,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Register builder casing
     */
    builder
      .addCase(register.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.requestedId = action.meta.requestId;
        }
      })
      .addCase(register.fulfilled, (state, action) => {
        if (state.loading === "pending" && state.requestedId === action.meta.requestId) {
          state.loading = "succeeded";
          state.requestedId = undefined;
          toast.success(action.payload.data.message);
        }
      })
      .addCase(register.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as any;
        } else {
          state.error = action.error as any;
        }
      });

    /**
     * Login builder casing
     */
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        const { data } = action.payload;

        state.data.user = data.user;
        state.data.tokens = data.tokens;

        state.loading = "succeeded";
      })
      .addCase(login.rejected, (state) => {
        state.loading = "failed";
      });

    /**
     * logout builder casing
     */
    builder
      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.loading = "succeeded";

        state.data.user = null!;
        state.data.tokens = null!;

        toast.success(payload.message);
      })
      .addCase(logout.rejected, (state) => {
        state.loading = "failed";
      });

    /**
     * Forgot password builder case
     */
    builder
      .addCase(forgot.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(forgot.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(forgot.rejected, (state) => {
        state.loading = "failed";
      });

    /**
     * Verify email
     */

    builder
      .addCase(verifyEmail.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data.user = action.payload;
      })
      .addCase(verifyEmail.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const authReducer = authSlice.reducer;
// export const {  } = authSlice.actions;
