import sentMail from "@/assets/image-sent.png";
import { Link } from "react-router-dom";

export const EmailSentMessage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center flex-col max-w-md">
        <div className="">
          <img src={sentMail} className="" alt="email sent icon" />
        </div>

        <div className="mx-auto text-center flex flex-col gap-8">
          <h2 className="text-2xl text-gray-800 font-semibold">Verify your email</h2>
          <p className="text-xl font-medium text-gray-700">
            An email as been sent to your email, check your mail to get verified
          </p>

          <div className="mx-auto">
            <Link
              to="/auth/send-email"
              className="py-2.5 px-4 rounded-md capitalize bg-indigo-500 focus:outline-none text-white mt-8"
            >
              resend email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
