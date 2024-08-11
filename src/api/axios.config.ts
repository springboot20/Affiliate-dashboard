import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

import { toast } from "react-toastify";
export const BankAppApiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5010/api/v1",
  // import.meta.env.MODE === "production"
  //   ? import.meta.env.VITE_DEPLOYED_URL
  //   : import.meta.env.VITE_LOCAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface BankAppServiceProps extends AxiosRequestConfig {
  showSuccessNotification?: boolean;
}

export const BankAppService = async ({
  showSuccessNotification = true,
  ...options
}: BankAppServiceProps) => {
  BankAppApiClient.interceptors.response.use(
    (config: AxiosResponse) => {
      if (config.status.toString().startsWith("2")) {
        showSuccessNotification ? toast.success(config.data.message) : "";
      }

      return config;
    },
    (error) => {
      if (axios.isAxiosError(error)) {
        const errorMsg = (error.response?.data as { error?: string })?.error;
        const errorWithMsg = (error.response?.data as { message?: string })?.message;

        if (errorMsg) {
          toast.error(errorMsg);
        } else if (errorWithMsg) {
          toast.error(errorWithMsg);
        }
      } else if (error.response.status === 401) {
        window.location.href = "/login";
      } else {
        toast.error(error.message);
      }

      return Promise.reject(error);
    },
  );

  return BankAppApiClient({ ...options });
};

export const register_new_user = (data: { username: string; password: string; email: string }) =>
  BankAppApiClient.post("/users/register", data);

export const login_user = (data: { password: string; email: string }) =>
  BankAppApiClient.post("/users/login", data);

export const logout_user = () => BankAppApiClient.post("/users/logout");

export const forgot_password = (data: { email: string }) =>
  BankAppApiClient.post("/user/forgot-password", data);

export const verify_email = (data: { userId: string; token: string }) => {
  const { userId, token } = data;
  return BankAppApiClient.get(`/users/verify-email/${userId}/${token}`);
};

export const send_email = (data: { email: string }) =>
  BankAppApiClient.post(`/users/send-email`, data);
