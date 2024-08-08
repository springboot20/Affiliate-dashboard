import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { SideNavigation } from "@/components/navigation/SideNavigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  UserIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { classNames } from "@/utils";

const AppLayout = () => {
  const { pathname } = useLocation();
  const title = pathname.split("/")[1];

  return (
    <Disclosure as="div">
      {({ open, close }) => (
        <div className="relative z-10 w-full flex lg:justify-between items-stretch h-screen">
          <SideNavigation open={open} close={close} />
          <main className="absolute w-full left-0 lg:w-[calc(100%-17rem)] lg:left-[17rem] min-h-screen right-0">
            <div className="w-full relative flex flex-col justify-between h-full">
              <nav className="top-0 left-0 right-0 fixed bg-white lg:left-[rem] border-b z-10">
                <div className="mx-auto px-4 sm:px-2 md:px-4 flex flex-col items-center">
                  <div className="flex items-center justify-between w-full h-24">
                    <div className="flex items-center lg:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 bg-gray-50 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black/20">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>

                    <div className="flex flex-1 lg:flex-none items-center justify-center lg:justify-start">
                      <h1 className="text-affiliate-blue text-lg lg:text-2xl xl:text-3xl font-semibold capitalize">
                        {pathname === "/"
                          ? "overview"
                          : pathname === "/transactions"
                          ? title
                          : pathname === "/accounts"
                          ? title
                          : pathname === "/investments"
                          ? title
                          : pathname === "/credit-cards"
                          ? title.split("-").join(" ")
                          : ""}
                      </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="hidden lg:block flex-1">
                        <div className="relative w-[30rem]">
                          <span className="block p-4 absolute left-0 top-1/2 -translate-y-1/2">
                            <MagnifyingGlassIcon
                              className="z-10 text-[#718EBF] h-8"
                              aria-hidden={true}
                            />
                          </span>
                          <div className="">
                            <label htmlFor="search" className="hidden">
                              search
                            </label>
                            <input
                              type="text"
                              id="search"
                              placeholder="Search for something"
                              className="text-xl rounded-[2rem] py-3.5 px-2 pl-14 block w-full bg-[#F5F7FA] text-[#8BA3CB] outline-0 border"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="hidden xl:flex items-center gap-2">
                        <Disclosure.Button className="h-14 w-14 rounded-full bg-[#F5F7FA] flex items-center justify-center border">
                          <span className="sr-only">Settings</span>
                          <Cog6ToothIcon className="h-9 text-[#718EBF]" />
                        </Disclosure.Button>

                        <Disclosure.Button className="h-14 w-14 rounded-full bg-[#F5F7FA] flex items-center justify-center border">
                          <span className="sr-only">Notification</span>
                          <BellAlertIcon className="h-9 text-affiliate-red" />
                        </Disclosure.Button>
                      </div>

                      <Menu as="div" className="relative self-center">
                        <Menu.Button className="flex h-14 w-14 text-gray-900 items-center justify-center">
                          <span className="sr-only">Open auth menu</span>
                          <UserCircleIcon
                            className="h-8 text-gray-400"
                            aria-hidden={true}
                          />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "flex items-center px-4 py-3 text-sm text-gray-700 space-x-4",
                                  )}
                                >
                                  <UserIcon className="h-6" />
                                  <span>Register</span>
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "flex items-center px-4 py-3 text-sm text-gray-700 space-x-4",
                                  )}
                                >
                                  <ArrowLeftIcon className="h-6" />
                                  <span>Signin</span>
                                </NavLink>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="lg:hidden h-14">
                    <div className="relative w-[19rem] sm:w-[32rem] md:w-[45rem]">
                      <span className="block p-4 absolute left-0 top-1/2 -translate-y-1/2">
                        <MagnifyingGlassIcon
                          className="z-10 text-[#718EBF] h-5"
                          aria-hidden={true}
                        />
                      </span>
                      <div className="">
                        <label htmlFor="mobile-search" className="hidden">
                          search
                        </label>
                        <input
                          type="text"
                          id="mobile-search"
                          placeholder="Search for something"
                          className="text-sm rounded-[2rem] py-2 px-2 pl-11 block w-full bg-[#F5F7FA] text-[#8BA3CB] outline-0 border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </Disclosure>
  );
};

export default AppLayout;
