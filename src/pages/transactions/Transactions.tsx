import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import chip from "@/assets/Chip_Card.png";
import chipBlack from "@/assets/Chip_Card_b.png";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CardTypeBlackIcon,
  CardTypeIcon,
  MyExpense,
} from "@/components/icons/Icons";
import { PlusIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils";
import { Pagination } from "@/components/Pagination";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export const Transactions = () => {
  const [width, setWidth] = useState<number>(0);
  const cardSlider = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<string>("all");

  useEffect(() => {
    if (cardSlider.current !== null) {
      setWidth(
        cardSlider.current?.scrollWidth - cardSlider.current?.offsetWidth,
      );
    }
  }, []);
  return (
    <section className="px-2 mt-[11rem] lg:mt-32 lg:px-8 w-full xl:max-w-7xl xl:mx-auto">
      <div className="w-full">
        {/* Card section */}
        <div>
          <nav className="flex justify-between items-center">
            <h3 className="text-base font-bold text-affiliate-blue lg:text-3xl">
              My Cards
            </h3>
            <h3
              role="button"
              className="text-base gap-2 font-bold flex items-center text-affiliate-blue capitalize md:text-xl"
            >
              <PlusIcon
                className="h-4 text-affiliate-blue"
                aria-hidden={true}
                strokeWidth={2.5}
              />
              add card
            </h3>
          </nav>
          <motion.div ref={cardSlider} className="overflow-hidden mt-3 w-full">
            <motion.div
              drag={"x"}
              dragConstraints={{ right: 0, left: -width }}
              className="flex items-start gap-5 max-w-full lg:w-full flex-1"
            >
              <div className="relative before:absolute before:content-[' '] before:bottom-0 before:h-16 before:bg-white/20 before:left-0 before:right-0 p-5 rounded-2xl space-y-4 flex-none flex-grow-0 w-full lg:w-[30rem] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1 items-start">
                    <span className="text-sm font-thin">Balance</span>
                    <span className="text-base font-semibold">$5,764</span>
                  </div>
                  <img src={chip} alt="chip icon" className="w-8" />
                </div>

                <div className="flex items-center justify-between pb-4">
                  <div className="space-y-1">
                    <h2 className="text-xs font-thin uppercase">card holder</h2>
                    <p className="font-semibold text-base">Eddy Cusuma</p>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-xs font-thin uppercase">valid thru</h2>
                    <p className="font-semibold text-base">12/12</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium uppercase">
                    3778 **** **** 1234{" "}
                  </p>
                  <CardTypeIcon />
                </div>
              </div>

              <div className="border relative p-5 before:absolute before:content-[' '] before:bottom-0 before:h-16 before:border-t before:left-0 before:right-0 rounded-2xl space-y-4 flex-none flex-grow-0 w-full lg:w-[30rem] bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1 items-start">
                    <span className="text-sm font-thin">Balance</span>
                    <span className="text-base font-semibold">$5,764</span>
                  </div>
                  <img src={chipBlack} alt="chip icon" />
                </div>

                <div className="flex items-center justify-between pb-4">
                  <div className="space-y-1">
                    <h2 className="text-xs font-thin uppercase">card holder</h2>
                    <p className="font-semibold text-base">Eddy Cusuma</p>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-xs font-thin uppercase">valid thru</h2>
                    <p className="font-semibold text-base">12/12</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium uppercase">
                    3778 **** **** 1234{" "}
                  </p>
                  <CardTypeBlackIcon />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/*  */}
        <div className="mt-4">
          <h3 className="text-base lg:text-3xl font-bold text-affiliate-blue capitalize">
            my expense
          </h3>

          <div className="bg-white p-5 rounded-2xl shadow mt-4">
            <MyExpense className="w-full" />
          </div>
        </div>

        {/*  */}
        <div className="mt-4">
          <h3 className="text-base lg:text-3xl font-bold text-affiliate-blue capitalize">
            recent transactions
          </h3>

          <div className="mt-4">
            <Tabs value={view}>
              <TabsHeader
                placeholder="header"
                className="rounded-none bg-transparent border-b border-gray-200"
                indicatorProps={{
                  className:
                    "!bg-transparent !border-b-2 !shadow-none !border-gray-900 !rounded-t-md",
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Tab
                  placeholder={"all"}
                  value={view}
                  onClick={() => setView("all")}
                  className={classNames(
                    view === "all"
                      ? "text-affiliate-deep-blue border-b-2 shadow-none border-affiliate-deep-blue"
                      : "text-[#8BA3CB]",
                    "text-xs px-0 py-2 capitalize",
                  )}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  all transactions
                </Tab>

                <Tab
                  placeholder={"income"}
                  value={view}
                  onClick={() => setView("in")}
                  className={classNames(
                    view === "in"
                      ? "text-affiliate-deep-blue border-b-2 shadow-none border-affiliate-deep-blue"
                      : "text-[#8BA3CB]",
                    "text-xs px-0 py-2 capitalize",
                  )}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  income
                </Tab>

                <Tab
                  placeholder={"expense"}
                  value={view}
                  onClick={() => setView("expense")}
                  className={classNames(
                    view === "expense"
                      ? "text-affiliate-deep-blue border-b-2 shadow-none border-affiliate-deep-blue"
                      : "text-[#8BA3CB]",
                    "text-xs px-0 py-2 capitalize",
                  )}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  expense
                </Tab>
              </TabsHeader>
              <TabsBody
                placeholder="tab body"
                className="p-0 bg-transparent"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <TabPanel value={"all"} className="p-0 bg-transparent">
                  <ul className="bg-white p-5 rounded-2xl shadow mt-4">
                    <li className="flex items-center justify-between border-b py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            spotify subscription
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            28 jan, 12.30 am
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$2,500
                      </p>
                    </li>
                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            freepik sales
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            25 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$750
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            mobile service
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            20 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$150
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            wilson
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            15 jan, 03.29 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$1050
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            emilly
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            14 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$840
                      </p>
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel value={"in"} className="p-0 bg-transparent">
                  <ul className="bg-white p-5 rounded-2xl shadow mt-4">
                    <li className="flex items-center justify-between border-b py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            spotify subscription
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            28 jan, 12.30 am
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$2,500
                      </p>
                    </li>
                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            freepik sales
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            25 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$750
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            mobile service
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            20 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$150
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            wilson
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            15 jan, 03.29 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$1050
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            emilly
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            14 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$840
                      </p>
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel value={"expense"} className="p-0 bg-transparent">
                  <ul className="bg-white p-5 rounded-2xl shadow mt-4">
                    <li className="flex items-center justify-between border-b py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            spotify subscription
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            28 jan, 12.30 am
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$2,500
                      </p>
                    </li>
                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            freepik sales
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            25 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$750
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            mobile service
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            20 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$150
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5 border-b">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowUpIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            wilson
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            15 jan, 03.29 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-red">
                        -$1050
                      </p>
                    </li>

                    <li className="flex items-center justify-between py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-[#718EBF] h-10 w-10 flex items-center justify-center rounded-full">
                          <ArrowDownIcon />
                        </span>

                        <div className="space-y-1">
                          <h3 className="text-sm capitalize font-medium">
                            emilly
                          </h3>
                          <p className="text-xs font-medium text-[#718EBF]">
                            14 jan, 10.40 pm
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-affiliate-green">
                        +$840
                      </p>
                    </li>
                  </ul>
                </TabPanel>
              </TabsBody>
            </Tabs>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};
