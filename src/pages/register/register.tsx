import { EyeIcon, EyeSlashIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils";
import { register } from "@/features/thunks/auth.thunk";
import { useAppDispatch } from "@/app/hook";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterState } from "@/types/formik/formik";
import { registerSchema } from "@/schema/auth/register";
import { toast } from "react-toastify";
import { CustomErrorMessage } from "@/components/Error";

const initialValues: RegisterState = {
  username: "",
  email: "",
  password: "",
};

export const Register = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);

  const onSubmit = async (values: RegisterState) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => res)
      .catch((error) => {
        console.log()
        toast.error(`${error.name}: ${error.message}`);
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-3">
        <div className="mx-auto  max-w-md">
          <UserCircleIcon className="mx-auto h-12 w-auto text-indigo-600" />
          <h2 className="mt-2 text-3xl text-center font-semibold text-gray-600">
            Sign up to create an account
          </h2>
        </div>
        <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <Form className="mt-10 bg-white rounded-lg p-4 sm:p-6 max-w-xl w-full">
              <fieldset>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="text-sm font-medium text-gray-800">
                    Username
                  </label>
                  <ErrorMessage name="username">
                    {(msg) => (
                      <CustomErrorMessage className="text-sm mt-0.5 block text-red-600">
                        {msg}
                      </CustomErrorMessage>
                    )}
                  </ErrorMessage>
                </div>
                <div className="mt-2">
                  <Field
                    type="text"
                    name="username"
                    placeholder="enter your username..."
                    className={classNames(
                      "block w-full px-3 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none",
                      errors.username && touched.username
                        ? "ring-red-600"
                        : "focus:ring-indigo-600",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="mt-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="text-sm font-medium text-gray-800">
                    Email Address
                  </label>
                  <ErrorMessage name="email">
                    {(msg) => (
                      <CustomErrorMessage className="text-sm mt-0.5 block text-red-600">
                        {msg}
                      </CustomErrorMessage>
                    )}
                  </ErrorMessage>
                </div>
                <div className="mt-2">
                  <Field
                    type="email"
                    placeholder="enter your email..."
                    name="email"
                    autoComplete="username"
                    className={classNames(
                      "block w-full px-3 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none",
                      errors.email && touched.email ? "ring-red-600" : "focus:ring-indigo-600",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="mt-3">
                <label htmlFor="password" className="text-sm font-medium text-gray-800">
                  Password
                </label>
                <div className="flex flex-col">
                  <div className="mt-2 relative">
                    <Field
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="enter your password..."
                      autoComplete="current-password"
                      className={classNames(
                        "block w-full px-3 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none",
                        errors.password && touched.password
                          ? "ring-red-600"
                          : "focus:ring-indigo-600",
                      )}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 -translate-y-1/2 right-4"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <EyeSlashIcon className="h-6 w-6 cursor-pointer text-gray-700 stroke-[3]" />
                      ) : (
                        <EyeIcon className="h-6 w-6 cursor-pointer text-gray-500 stroke-[3]" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage name="password">
                    {(msg) => (
                      <CustomErrorMessage className="text-sm mt-0.5 block text-red-600">
                        {msg}
                      </CustomErrorMessage>
                    )}
                  </ErrorMessage>
                </div>
              </fieldset>

              <button
                type="submit"
                className="block py-2.5 w-full mt-5 bg-indigo-500 text-white text-sm font-medium rounded-md transform hover:-translate-y-1.5 transition shadow-md"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-8 text-center text-sm text-gray-800">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </Link>
        </p>
      </div>
    </>
  );
};
