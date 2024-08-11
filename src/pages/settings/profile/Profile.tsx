import { useFile } from "@/hooks/register/useFile";
import { useRef } from "react";
import { Form, Formik, Field } from "formik";
import { ProfileValues } from "@/types/formik/formik";
import { PencilIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils";

const initialValues: ProfileValues = {
  "date-of-birth": "",
  address: {
    permanent: "",
    present: "",
  },
  city: "",
  username: "",
  password: "",
  country: "",
  email: "",
  "postal-code": "",
};

export const Profile = () => {
  const { handleFileChange, selectedFile } = useFile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formData = new FormData();

  async function onSubmit(values: ProfileValues) {
    formData.append("avatar", selectedFile as Blob);
    console.log({ ...values, avatar: selectedFile });
  }

  console.log(selectedFile);

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
      <div className="flex items-center justify-center flex-col col-span-fulllg:col-span-1 lg:justify-start">
        <div className="relative">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="user avatar"
              className="h-40 w-40 relative rounded-full border-2 shadow"
            />
          ) : (
            <div className="h-40 w-40 relative rounded-full border bg-gray-300"></div>
          )}
          <div className="text-center">
            <label
              htmlFor="photo-upload"
              className="relative cursor-pointer rounded-md font-semibold "
            >
              <span className="hidden sr-only">Upload photo</span>
              <input
                type="file"
                id="photo-upload"
                name="photo-upload"
                hidden
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </label>
          </div>
          <button
            onClick={() => {
              if (fileInputRef.current) fileInputRef.current.click();
            }}
            className="peer absolute bottom-4 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-affiliate-deep-blue focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <span className="sr-only">edit profile</span>
            <PencilIcon className="h-5 text-white" />
          </button>
        </div>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => {
          return (
            <Form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:mt-8 gap-4 lg:gap-6 flex-shrink-0 w-full lg:col-span-2">
              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="username"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  your name
                </label>
                <div>
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    autoComplete="username"
                    placeholder="Charlene Reed"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none lg:py-3",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="username"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  user name
                </label>
                <div>
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    autoComplete="username"
                    placeholder="Charlene Reed"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none lg:py-3",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="email"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  email
                </label>
                <div>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="charlenereed@gmail.com "
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none lg:py-3",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="password"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  password
                </label>
                <div>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="**********"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="date-of-birth"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  date of birth
                </label>
                <div>
                  <Field
                    id="date-of-birth"
                    type="text"
                    name="date-of-birth"
                    placeholder="25 January 1990"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="present"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  present address
                </label>
                <div>
                  <Field
                    id="present"
                    type="text"
                    name="address.present"
                    placeholder="San Jose, California, USA"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="permanent"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  permanent address
                </label>
                <div>
                  <Field
                    id="permanent"
                    type="text"
                    name="address.permanent"
                    placeholder="San Jose, California, USA"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="city"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  city
                </label>
                <div>
                  <Field
                    id="city"
                    type="text"
                    name="city"
                    placeholder="San Jose"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="postal-code"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  postal code
                </label>
                <div>
                  <Field
                    id="postal-code"
                    type="text"
                    name="postal-code"
                    placeholder="4592"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <fieldset className="lg:col-span-1">
                <label
                  htmlFor="pcountry"
                  className="capitalize text-sm font-normal text-affiliate-black"
                >
                  country
                </label>
                <div>
                  <Field
                    id="pcountry"
                    type="text"
                    name="pcountry"
                    placeholder="4592"
                    className={classNames(
                      "block w-full px-3 rounded-lg text-[#718EBF] border border-gray-200 py-2 shadow-sm  focus:ring-2 placeholder:leading-[0] focus:ring-inset text-sm placeholder:text-[#718EBF] sm:leading-6 outline-none",
                    )}
                  />
                </div>
              </fieldset>

              <div className="mt-8 md:col-span-full md:flex md:items-center md:justify-end">
                <button
                  type="submit"
                  className="py-2 w-full sm:w-32 px-4 text-center text-white bg-affiliate-deep-blue rounded-lg text-base font-medium capitalize"
                >
                  save
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
