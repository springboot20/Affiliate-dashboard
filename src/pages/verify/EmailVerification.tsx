import { verify_email } from "@/api/axios.config";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { EmailVerificationSuccessMessage } from "./messages/Success";

export const EmailVerification = () => {
  const { id, token } = useParams();
  const [status, setStatus] = useState<"success" | "failed" | "">("");

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await verify_email({ userId: id!, token: token! });

        toast.success(data.message, { autoClose: 2000 });
        setStatus("success");
      } catch (error) {
        if (error instanceof AxiosError) {
          const { message } = error.response?.data;
          toast.error(message, { autoClose: 2000 });
        }
      }
    };
    verify();
  }, []);

  if (status === "success") {
    return <EmailVerificationSuccessMessage />;
  } else return null;
};
