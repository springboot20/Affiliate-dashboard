import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export const EmailVerificationSuccessMessage: React.FC<{ data: any }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-8 flex flex-col gap-6 rounded-2xl border">
        <h1 className="text-xl font-semibold text-gray-800">account verified</h1>

        <div>
          <span className="flex items-center justify-center">
            <EnvelopeIcon className="h-14 fill-affiliate-green" aria-hidden={true} />
          </span>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-gray-800">{data.username}</h3>
          <p className="text-gray-700 text-xl">
            Thank you, your email has been verified. Your account is now active, Please use the link
            below to login to your account
          </p>
          <button
            onClick={async () => {
              await Promise.resolve(setTimeout(() => navigate("/auth/login"), 2000));
            }}
            className="py-2.5 px-4 rounded-md capitalize bg-gray-800 focus:outline-none text-white mt-2"
          >
            resend verification email
          </button>
        </div>
      </div>
    </div>
  );
};
