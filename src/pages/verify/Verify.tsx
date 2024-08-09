import checkMark from "@/assets/check-image.png";
import { Link, useParams } from "react-router-dom";

import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/app/hook";
import { verifyEmail } from "@/features/thunks/auth.thunk";

export const VerifyEmail = () => {
  const distpatch = useAppDispatch();
  const [valid, setVaid] = useState(false);
  const params = useParams();

  let verify = useCallback(async () => {
    console.log({ token: params.token!, userId: params.id! });

    try {
      await distpatch(
        verifyEmail({
          token: params.token!,
          userId: params.id!,
        }),
      );
      setVaid(true);
    } catch (error) {
      setVaid(false);
    }
  }, []);

  useEffect(() => {
    verify();
  });

  return (
    <div className="h-screen flex items-center justify-center">
      {valid ? (
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="h-auto p-8 lg:p-10 bg-white rounded-xl flex max-w-lg items-center justify-center flex-1 flex-col space-y-4 sm:space-y-8">
              <div className="flex items-center justify-center">
                <img src={checkMark} alt="check icon" className="h-14 sm:h-20" />
              </div>

              <div className="space-y-2">
                <h2 className="text-lg sm:text-2xl capitalize">email verified successfully</h2>
                <div className="flex w-full items-center justify-center">
                  <Link
                    to="/auth/login"
                    className="block px-8 py-1.5 rounded-lg bg-green-500 text-white uppercase tracking-widest font-semibold"
                  >
                    login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>User not verified</h1>
      )}
    </div>
  );
};
