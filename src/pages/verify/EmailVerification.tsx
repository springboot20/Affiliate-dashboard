import { verify_email } from "@/api/axios.config";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const EmailVerification = () => {
  const { id, token } = useParams();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "failed" | "">("");

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await verify_email({ userId: id!, token: token! });

        toast.success(data.message, { autoClose: 2000 });

        setMessage(data.message);
        setStatus("success");
      } catch (error) {
        if (error instanceof AxiosError) {
          const { message } = error.response?.data;
          setMessage(message);
          toast.error(message, { autoClose: 2000 });
        }
      }
    };
    verify();
  }, []);

  if (status === "success") {
    return <EmailVerificationSuccessMessage message={message} />;
  } else return null;
};

const EmailVerificationSuccessMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md mx-auto">
        <div>
          <span className="flex items-center justify-center">
            <CheckCircleIcon className="h-14 fill-affiliate-green" aria-hidden={true} />
          </span>
        </div>
        <div className="">
          <p className="text-gray-700 text-xl">{message}</p>
        </div>
      </div>
    </div>
  );
};

const EmailVerificationErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div>
      <div>
        <span className="flex items-center justify-center">
          <XMarkIcon className="h-14 fill-affiliate-green" aria-hidden={true} />
        </span>
      </div>
      <div className="">
        <p className="text-gray-700 text-xl">{message}</p>
      </div>
    </div>
  );
};
