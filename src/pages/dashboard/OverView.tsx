import { useState, useEffect, useRef } from "react";
import { Button } from "@material-tailwind/react";
import chip from "@/assets/Chip_Card.png";
import chipBlack from "@/assets/Chip_Card_b.png";
import imgOne from "@/assets/img-01.jpg";
import imgTwo from "@/assets/img-02.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import {
  BalanceHistory,
  CardTypeBlackIcon,
  CardTypeIcon,
  ExpenseStatics,
  PaperIcon,
  WeeklyActivity,
  WeeklyActivityDesktop,
} from "@/components/icons/Icons";

export const OverView = () => {
  const [width, setWidth] = useState<number>(0);
  const cardSlider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardSlider.current !== null) {
      setWidth(
        cardSlider.current?.scrollWidth - cardSlider.current?.offsetWidth,
      );
    }
  }, []);

  return (
    <section className="px-2 xs:px-4 mt-[11rem] lg:mt-28 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Card section */}
        <div className="lg:col-span-2 xl:col-span-2">
          <nav className="flex justify-between items-center">
            <h3 className="text-base font-bold text-affiliate-blue lg:text-xl">
              My Cards
            </h3>
            <Button
              className="text-base px-2 py-1.5 font-semibold text-affiliate-blue capitalize lg:text-lg"
              placeholder="see-all-btn"
              variant="text"
            >
              See All
            </Button>
          </nav>
          <motion.div ref={cardSlider} className="overflow-hidden mt-3 w-full">
            <motion.div
              drag={"x"}
              dragConstraints={{ right: 0, left: -width }}
              className="flex items-start gap-5 lg:w-full flex-1"
            >
              <div className="relative before:absolute before:content-[' '] before:bottom-0 before:h-16 before:bg-white/20 before:left-0 before:right-0 p-5 rounded-2xl space-y-4 lg:space-y-2 flex-none flex-grow-0 w-full lg:w-[15rem] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white">
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

                  <div className="space-y-1 ">
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

              <div className="border relative p-5 before:absolute before:content-[' '] before:bottom-0 before:h-16 before:border-t before:left-0 before:right-0 rounded-2xl space-y-4 lg:space-y-2 flex-none flex-grow-0 w-full lg:w-[15rem] bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1 items-start">
                    <span className="text-base">Balance</span>
                    <span className="text-sm font-semibold">$5,764</span>
                  </div>
                  <img src={chipBlack} alt="chip icon" />
                </div>

                <div className="flex items-center justify-between pb-4">
                  <div className="space-y-1">
                    <h2 className="text-sm font-normal uppercase">
                      card holder
                    </h2>
                    <p className="font-semibold text-base">Eddy Cusuma</p>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-sm font-normal uppercase">
                      valid thru
                    </h2>
                    <p className="font-semibold text-base">12/12</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-normal uppercase">valid thru</h2>
                  <CardTypeBlackIcon />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Transaction section */}
        <div className="mt-4 lg:mt-0 xl:mt-1.5 lg:col-span-1 space-y-3">
          <h3 className="text-base lg:text-xl font-bold text-affiliate-blue capitalize">
            recent transactions
          </h3>

          <ul className="space-y-5 xs:bg-white xs:p-5 xs:rounded-xl lg:border lg:shadow-sm">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center h-12 w-12 xs:h-14 xs:w-14 lg:h-12 lg:w-12 rounded-full bg-[#FFF5D9]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 xs:h-7 xs:w-7 lg:h-5 lg:w-5"
                  >
                    <path
                      d="M16.6475 21.9727H5.07129C4.4517 21.972 3.85767 21.7256 3.41955 21.2875C2.98144 20.8494 2.73502 20.2553 2.73438 19.6357V12.7271C2.73502 12.1075 2.98144 11.5134 3.41955 11.0753C3.85767 10.6372 4.4517 10.3908 5.07129 10.3901H16.6475C17.2671 10.3908 17.8611 10.6372 18.2992 11.0753C18.7373 11.5134 18.9837 12.1075 18.9844 12.7271V19.6357C18.9837 20.2553 18.7373 20.8494 18.2992 21.2875C17.8611 21.7256 17.2671 21.972 16.6475 21.9727ZM5.07129 11.855C4.84008 11.8552 4.61842 11.9472 4.45493 12.1107C4.29144 12.2742 4.19948 12.4958 4.19922 12.7271V19.6357C4.19948 19.867 4.29144 20.0886 4.45493 20.2521C4.61842 20.4156 4.84008 20.5076 5.07129 20.5078H16.6475C16.8787 20.5076 17.1003 20.4156 17.2638 20.2521C17.4273 20.0886 17.5193 19.867 17.5195 19.6357V12.7271C17.5193 12.4958 17.4273 12.2742 17.2638 12.1107C17.1003 11.9472 16.8787 11.8552 16.6475 11.855H5.07129Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M19.9297 18.0283H18.252C18.0577 18.0283 17.8714 17.9512 17.7341 17.8138C17.5967 17.6764 17.5195 17.4901 17.5195 17.2959C17.5195 17.1016 17.5967 16.9154 17.7341 16.778C17.8714 16.6406 18.0577 16.5635 18.252 16.5635H19.9297C20.1607 16.563 20.3821 16.4709 20.5454 16.3074C20.7087 16.144 20.8005 15.9224 20.8008 15.6914V8.78271C20.8007 8.55159 20.7089 8.32995 20.5456 8.16638C20.3823 8.00282 20.1608 7.91067 19.9297 7.91016H8.35352C8.12231 7.91041 7.90064 8.00238 7.73715 8.16587C7.57367 8.32935 7.4817 8.55102 7.48145 8.78223V11.1221C7.48145 11.3163 7.40428 11.5026 7.26692 11.64C7.12957 11.7773 6.94327 11.8545 6.74902 11.8545C6.55477 11.8545 6.36848 11.7773 6.23112 11.64C6.09377 11.5026 6.0166 11.3163 6.0166 11.1221V8.78271C6.01712 8.16304 6.26348 7.56889 6.70161 7.13067C7.13974 6.69244 7.73384 6.44596 8.35352 6.44531H19.9297C20.5492 6.44622 21.143 6.69282 21.581 7.13101C22.0189 7.5692 22.2651 8.16321 22.2656 8.78271V15.6914C22.265 16.3108 22.0187 16.9047 21.5808 17.3428C21.1429 17.7809 20.5491 18.0274 19.9297 18.0283Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M18.252 16.7378H3.4668C3.27255 16.7378 3.08625 16.6606 2.9489 16.5233C2.81154 16.3859 2.73438 16.1996 2.73438 16.0054V13.5454C2.73438 13.3512 2.81154 13.1649 2.9489 13.0275C3.08625 12.8902 3.27255 12.813 3.4668 12.813H18.252C18.4462 12.813 18.6325 12.8902 18.7699 13.0275C18.9072 13.1649 18.9844 13.3512 18.9844 13.5454V16.0054C18.9844 16.1996 18.9072 16.3859 18.7699 16.5233C18.6325 16.6606 18.4462 16.7378 18.252 16.7378ZM4.19922 15.273H17.5195V14.2778H4.19922V15.273Z"
                      fill="#FFBB38"
                    />
                  </svg>
                </span>
                <div className="flex flex-col items-start">
                  <p className="text-gray-700 capitalize text-sm xs:text-base font-normal xs:font-medium lg:text-xs">
                    deposit from my
                  </p>
                  <span className="text-xs xs:text-sm font-normal text-[#718EBF] capitalize">
                    28 january 2024
                  </span>
                </div>
              </div>
              <p className="text-affiliate-red text-sm xs:text-base xs:font-medium lg:text-xs">
                -$54.09
              </p>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center h-12 w-12 xs:h-14 xs:w-14 lg:h-12 lg:w-12 rounded-full bg-[#E7EDFF]">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 xs:h-7 xs:w-7 lg:h-5 lg:w-5"
                  >
                    <path
                      d="M13.425 4.98755C13.4151 3.8945 12.9744 2.84948 12.1985 2.07947C11.4227 1.30946 10.3743 0.876653 9.28123 0.875052H3.24998C3.10018 0.873124 2.95466 0.925072 2.83995 1.02143C2.72523 1.1178 2.64894 1.25216 2.62498 1.40005L0.487484 14.8063C0.474129 14.8951 0.480056 14.9857 0.504862 15.072C0.529667 15.1582 0.572769 15.2382 0.631234 15.3063C0.689322 15.376 0.761904 15.4323 0.843933 15.4712C0.925962 15.51 1.01547 15.5305 1.10623 15.5313H3.68748L3.54998 16.4001C3.53538 16.4901 3.54067 16.5822 3.56547 16.67C3.59027 16.7578 3.63398 16.8391 3.69354 16.9082C3.7531 16.9773 3.82707 17.0325 3.91024 17.07C3.99341 17.1074 4.08377 17.1262 4.17498 17.1251H7.08123C7.23013 17.1272 7.3749 17.0761 7.48949 16.981C7.60407 16.8859 7.68093 16.753 7.70623 16.6063L8.33123 12.7876H10.3C11.5322 12.7826 12.7124 12.29 13.5826 11.4175C14.4527 10.545 14.9421 9.36355 14.9437 8.1313V7.9563C14.9431 7.37667 14.8051 6.80543 14.5411 6.2894C14.2772 5.77337 13.8947 5.32724 13.425 4.98755ZM3.78123 2.12505H9.28123C9.93695 2.12706 10.5726 2.35124 11.0846 2.76101C11.5965 3.17077 11.9544 3.74194 12.1 4.3813C11.8296 4.31789 11.5527 4.28642 11.275 4.28755H6.06248C5.91268 4.28562 5.76716 4.33757 5.65244 4.43393C5.53773 4.5303 5.46144 4.66466 5.43748 4.81255L5.06873 7.12505C5.04221 7.29081 5.08262 7.46032 5.18108 7.59628C5.27954 7.73225 5.42797 7.82353 5.59373 7.85005C5.75949 7.87657 5.929 7.83616 6.06496 7.7377C6.20093 7.63925 6.29221 7.49081 6.31873 7.32505L6.60623 5.52505H11.2875C11.5871 5.52662 11.8838 5.58385 12.1625 5.6938C12.0437 6.67221 11.5716 7.57354 10.835 8.2284C10.0985 8.88327 9.14807 9.24658 8.16248 9.25005H5.26248C5.11359 9.24789 4.96881 9.29895 4.85423 9.39406C4.73965 9.48916 4.66278 9.62206 4.63748 9.7688L3.87498 14.2813H1.83748L3.78123 2.12505ZM13.6937 8.1313C13.6921 9.03203 13.3344 9.89558 12.6987 10.5337C12.0629 11.1717 11.2007 11.5326 10.3 11.5376H7.79998C7.65109 11.5354 7.50631 11.5865 7.39173 11.6816C7.27714 11.7767 7.20028 11.9096 7.17498 12.0563L6.54998 15.8751H4.89998L5.03748 15.0063L5.78748 10.5126H8.14998C9.31677 10.5091 10.4497 10.1198 11.3721 9.40539C12.2946 8.69092 12.9548 7.6914 13.25 6.56255C13.5401 6.96927 13.6953 7.45673 13.6937 7.9563V8.1313Z"
                      fill="#396AFF"
                    />
                  </svg>
                </span>
                <div className="flex flex-col items-start space-y-1">
                  <p className="text-gray-700 capitalize text-sm xs:text-base xs:font-medium lg:text-xs font-normal">
                    deposit from my
                  </p>
                  <span className="text-xs xs:text-sm font-normal text-[#718EBF] capitalize">
                    23 april 2024
                  </span>
                </div>
              </div>

              <p className="text-affiliate-green text-sm xs:text-base xs:font-medium lg:text-xs  ">
                +$2,500
              </p>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center h-12 w-12 xs:h-14 xs:w-14 lg:h-12 lg:w-12 rounded-full bg-[#DCFAF8]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 xs:h-7 xs:w-7 lg:h-5 lg:w-5"
                  >
                    <path
                      d="M10.0001 8.1281C10.3545 8.1281 10.6438 8.41674 10.6438 8.77109C10.6438 9.09443 10.9067 9.3565 11.23 9.3565C11.5526 9.3565 11.8154 9.09443 11.8154 8.77109C11.8154 7.97676 11.2979 7.30645 10.5855 7.06136V6.72916C10.5855 6.40656 10.3235 6.14301 10.0001 6.14301C9.67603 6.14301 9.41396 6.40656 9.41396 6.72916V7.06136C8.70158 7.30645 8.18556 7.97676 8.18556 8.77109C8.18556 9.77286 8.99908 10.5864 10.0001 10.5864C10.3545 10.5864 10.6438 10.8758 10.6438 11.2301C10.6438 11.5852 10.3545 11.8739 10.0001 11.8739C9.64577 11.8739 9.35712 11.5852 9.35712 11.2301C9.35712 10.9068 9.09431 10.644 8.77097 10.644C8.44689 10.644 8.18556 10.9068 8.18556 11.2301C8.18556 12.0244 8.70158 12.694 9.41396 12.9391V13.2713C9.41396 13.5954 9.67603 13.8582 10.0001 13.8582C10.3235 13.8582 10.5855 13.5954 10.5855 13.2713V12.9391C11.2979 12.694 11.8154 12.0244 11.8154 11.2301C11.8154 10.2291 11.0011 9.41482 10.0001 9.41482C9.64577 9.41482 9.35712 9.12618 9.35712 8.77109C9.35712 8.41674 9.64577 8.1281 10.0001 8.1281ZM14.9086 13.2536C15.1957 13.4049 15.5494 13.2949 15.7 13.01C16.1872 12.0894 16.4441 11.0485 16.4441 10.0002C16.4441 6.4479 13.5525 3.55701 10.0001 3.55701C6.44704 3.55701 3.55615 6.4479 3.55615 10.0002C3.55615 13.5533 6.44704 16.4442 10.0001 16.4442C11.0329 16.4442 12.059 16.1947 12.9678 15.7215C13.255 15.5731 13.3664 15.218 13.2173 14.9316C13.0682 14.6459 12.7146 14.5322 12.4267 14.6821C11.6744 15.0748 10.8572 15.2734 10.0001 15.2734C7.09298 15.2734 4.72697 12.9081 4.72697 10.0002C4.72697 7.09384 7.09298 4.72783 10.0001 4.72783C12.9072 4.72783 15.2733 7.09384 15.2733 10.0002C15.2733 10.8588 15.0621 11.71 14.665 12.4615C14.5129 12.7479 14.6221 13.1023 14.9086 13.2536ZM10.0001 1.2124C8.30294 1.2124 6.65522 1.69815 5.23561 2.61577C4.9632 2.79147 4.88569 3.15393 5.06139 3.4256C5.23782 3.69727 5.59882 3.77404 5.87196 3.59982C7.10037 2.80549 8.52957 2.3847 10.0001 2.3847C14.1999 2.3847 17.6156 5.80121 17.6156 10.0002C17.6156 14.2 14.1999 17.6165 10.0001 17.6165C5.80035 17.6165 2.38384 14.2 2.38384 10.0002C2.38384 8.54372 2.79651 7.12706 3.57829 5.9053C3.75251 5.63216 3.67279 5.26969 3.39964 5.09547C3.12724 4.92125 2.76477 5.00097 2.59129 5.27338C1.68917 6.68413 1.21228 8.32004 1.21228 10.0002C1.21228 14.8467 5.15367 18.7881 10.0001 18.7881C14.8458 18.7881 18.788 14.8467 18.788 10.0002C18.788 5.15526 14.8458 1.2124 10.0001 1.2124Z"
                      fill="#16DBCC"
                    />
                  </svg>
                </span>
                <div className="flex flex-col items-start space-y-1">
                  <p className="text-gray-700 capitalize text-sm xs:text-base xs:font-medium lg:text-xs font-normal">
                    deposit from my
                  </p>
                  <span className="text-xs xs:text-sm font-normal text-[#718EBF] capitalize">
                    29 march 2024
                  </span>
                </div>
              </div>
              <p className="text-affiliate-green text-sm xs:text-base xs:font-medium lg:text-xs  ">
                +$5,400
              </p>
            </li>
          </ul>
        </div>

        {/* Transaction section */}
        <div className="mt-4 w-full lg:mt-0 space-y-3 lg:col-span-2">
          <h3 className="text-base lg:text-xl font-bold text-affiliate-blue capitalize">
            weekly activity
          </h3>

          <div className="lg:hidden">
            <WeeklyActivity className="w-full" />
          </div>

          <div className="hidden lg:flex flex-col items-center p-5 rounded-2xl bg-white">
            <div className="self-end">
              <svg
                width="171"
                height="16"
                viewBox="0 0 171 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="8" r="6" fill="#16DBCC" />
                <path
                  d="M26.0625 13C28.9432 13 30.5682 11.2088 30.5682 8.25426C30.5682 5.31818 28.9432 3.54545 26.1918 3.54545H23.1449V13H26.0625ZM24.2898 11.9844V4.56108H26.1179C28.3338 4.56108 29.4602 5.96449 29.4602 8.25426C29.4602 10.5625 28.3338 11.9844 25.9886 11.9844H24.2898ZM32.3409 13H33.4304V5.90909H32.3409V13ZM32.8949 4.72727C33.3196 4.72727 33.6705 4.39489 33.6705 3.98864C33.6705 3.58239 33.3196 3.25 32.8949 3.25C32.4702 3.25 32.1193 3.58239 32.1193 3.98864C32.1193 4.39489 32.4702 4.72727 32.8949 4.72727ZM35.4259 15.6591H36.5154V11.9105H36.6077C36.8477 12.2983 37.3094 13.1477 38.6759 13.1477C40.4486 13.1477 41.6858 11.7259 41.6858 9.47301C41.6858 7.23864 40.4486 5.81676 38.6574 5.81676C37.2725 5.81676 36.8477 6.66619 36.6077 7.03551H36.4784V5.90909H35.4259V15.6591ZM36.4969 9.45455C36.4969 7.86648 37.1986 6.79545 38.5281 6.79545C39.9131 6.79545 40.5963 7.95881 40.5963 9.45455C40.5963 10.9688 39.8946 12.169 38.5281 12.169C37.2171 12.169 36.4969 11.0611 36.4969 9.45455ZM46.2284 13.1477C48.1489 13.1477 49.4415 11.6889 49.4415 9.49148C49.4415 7.27557 48.1489 5.81676 46.2284 5.81676C44.308 5.81676 43.0154 7.27557 43.0154 9.49148C43.0154 11.6889 44.308 13.1477 46.2284 13.1477ZM46.2284 12.169C44.7696 12.169 44.1048 10.9134 44.1048 9.49148C44.1048 8.0696 44.7696 6.79545 46.2284 6.79545C47.6872 6.79545 48.352 8.0696 48.352 9.49148C48.352 10.9134 47.6872 12.169 46.2284 12.169ZM56.1273 7.49716C55.7857 6.49077 55.0194 5.81676 53.6159 5.81676C52.1202 5.81676 51.0123 6.66619 51.0123 7.86648C51.0123 8.84517 51.5939 9.50071 52.8958 9.8054L54.0776 10.0824C54.7931 10.2486 55.1301 10.5902 55.1301 11.0795C55.1301 11.6889 54.4838 12.1875 53.4682 12.1875C52.5772 12.1875 52.0186 11.8043 51.8248 11.0426L50.7907 11.3011C51.0446 12.506 52.0371 13.1477 53.4867 13.1477C55.1348 13.1477 56.2566 12.2475 56.2566 11.0241C56.2566 10.0362 55.638 9.413 54.373 9.10369L53.3205 8.84517C52.4803 8.63743 52.1017 8.35582 52.1017 7.81108C52.1017 7.2017 52.748 6.75852 53.6159 6.75852C54.5669 6.75852 54.9593 7.2848 55.1486 7.77415L56.1273 7.49716ZM57.8966 13H58.9861V5.90909H57.8966V13ZM58.4506 4.72727C58.8753 4.72727 59.2261 4.39489 59.2261 3.98864C59.2261 3.58239 58.8753 3.25 58.4506 3.25C58.0258 3.25 57.675 3.58239 57.675 3.98864C57.675 4.39489 58.0258 4.72727 58.4506 4.72727ZM64.0653 5.90909H62.5511V4.21023H61.4616V5.90909H60.3906V6.83239H61.4616V11.2642C61.4616 12.5014 62.4588 13.0923 63.3821 13.0923C63.7884 13.0923 64.0469 13.0185 64.1946 12.9631L63.973 11.9844C63.8807 12.0028 63.733 12.0398 63.4929 12.0398C63.0128 12.0398 62.5511 11.892 62.5511 10.9688V6.83239H64.0653V5.90909Z"
                  fill="#718EBF"
                />
                <circle cx="96" cy="8" r="6" fill="#FF82AC" />
                <path
                  d="M114.862 13H116.044L118.131 5.46591H118.205L120.291 13H121.473L124.058 3.54545H122.895L120.919 11.2457H120.827L118.814 3.54545H117.521L115.509 11.2457H115.416L113.44 3.54545H112.277L114.862 13ZM125.337 13H126.426V5.90909H125.337V13ZM125.891 4.72727C126.316 4.72727 126.667 4.39489 126.667 3.98864C126.667 3.58239 126.316 3.25 125.891 3.25C125.466 3.25 125.115 3.58239 125.115 3.98864C125.115 4.39489 125.466 4.72727 125.891 4.72727ZM131.506 5.90909H129.992V4.21023H128.902V5.90909H127.831V6.83239H128.902V11.2642C128.902 12.5014 129.899 13.0923 130.823 13.0923C131.229 13.0923 131.487 13.0185 131.635 12.9631L131.413 11.9844C131.321 12.0028 131.173 12.0398 130.933 12.0398C130.453 12.0398 129.992 11.892 129.992 10.9688V6.83239H131.506V5.90909ZM134.386 8.73438C134.386 7.49716 135.176 6.79545 136.252 6.79545C137.276 6.79545 137.895 7.44176 137.895 8.56818V13H138.984V8.49432C138.984 6.67081 138.015 5.81676 136.565 5.81676C135.448 5.81676 134.811 6.28303 134.479 7.01705H134.386V3.54545H133.297V13H134.386V8.73438ZM143.655 13.1477C145.022 13.1477 145.483 12.2983 145.723 11.9105H145.853V13H146.905V3.54545H145.816V7.03551H145.723C145.483 6.66619 145.059 5.81676 143.674 5.81676C141.882 5.81676 140.645 7.23864 140.645 9.47301C140.645 11.7259 141.882 13.1477 143.655 13.1477ZM143.803 12.169C142.436 12.169 141.735 10.9688 141.735 9.45455C141.735 7.95881 142.418 6.79545 143.803 6.79545C145.132 6.79545 145.834 7.86648 145.834 9.45455C145.834 11.0611 145.114 12.169 143.803 12.169ZM149.052 13H150.141V8.51278C150.141 7.55256 150.898 6.85085 151.933 6.85085C152.223 6.85085 152.523 6.90625 152.597 6.92472V5.81676C152.473 5.80753 152.186 5.79829 152.025 5.79829C151.175 5.79829 150.437 6.27841 150.178 6.98011H150.104V5.90909H149.052V13ZM155.975 13.1662C157.213 13.1662 157.859 12.5014 158.081 12.0398H158.136V13H159.225V8.32812C159.225 6.07528 157.508 5.81676 156.603 5.81676C155.532 5.81676 154.313 6.18608 153.759 7.47869L154.794 7.84801C155.034 7.33097 155.601 6.77699 156.64 6.77699C157.642 6.77699 158.136 7.30788 158.136 8.21733V8.25426C158.136 8.78054 157.6 8.73438 156.308 8.90057C154.992 9.07138 153.556 9.36222 153.556 10.9872C153.556 12.3722 154.627 13.1662 155.975 13.1662ZM156.142 12.1875C155.274 12.1875 154.646 11.7997 154.646 11.0426C154.646 10.2116 155.403 9.95312 156.252 9.84233C156.714 9.78693 157.951 9.65767 158.136 9.43608V10.4332C158.136 11.3196 157.434 12.1875 156.142 12.1875ZM162.82 13H163.892L165.443 7.55256H165.553L167.105 13H168.176L170.336 5.90909H169.191L167.659 11.3196H167.585L166.089 5.90909H164.926L163.411 11.3381H163.338L161.805 5.90909H160.66L162.82 13Z"
                  fill="#718EBF"
                />
              </svg>
            </div>

            <WeeklyActivityDesktop className="w-auto" />
          </div>
        </div>

        {/* Expense section */}
        <div className="mt-4 w-full">
          <h3 className="text-base lg:text-xl font-bold text-affiliate-blue capitalize">
            expense statics
          </h3>

          <ExpenseStatics className="w-full" />
        </div>

        {/* Quick section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-base lg:text-3xl font-bold text-affiliate-blue capitalize">
            quick transfer
          </h3>
          <div className="relative xs:bg-white xs:p-4 rounded-xl lg:shadow-sm">
            <div className="flex items-center gap-7 xs:gap-8 xs:p-5">
              <div className="flex items-center flex-col gap-1">
                <div className="h-12 w-12 xs:h-20 xs:w-20 rounded-full border overflow-hidden relative">
                  <img
                    src={imgOne}
                    alt="transaction-figure"
                    className="absolute object-cover object-center"
                  />
                </div>

                <p className="text-center flex flex-col">
                  <span className="text-sm xs:text-base font-medium capitalize text-affiliate-black">
                    randy press
                  </span>
                  <span className="text-sm xs:text-base font-medium uppercase text-[#718EBF]">
                    ceo
                  </span>
                </p>
              </div>

              <div className="flex items-center flex-col gap-1">
                <div className="h-12 w-12 xs:h-20 xs:w-20 rounded-full border overflow-hidden relative">
                  <img
                    src={imgTwo}
                    alt="transaction-figure"
                    className="absolute object-cover object-center"
                  />
                </div>
                <p className="text-center flex flex-col">
                  <span className="text-sm xs:text-base font-medium capitalize text-affiliate-black">
                    livia bator
                  </span>
                  <span className="text-sm xs:text-base font-medium capitalize text-[#718EBF]">
                    director
                  </span>
                </p>
              </div>

              <div className="flex items-center flex-col gap-1">
                <div className="h-12 w-12 xs:h-20 xs:w-20 rounded-full border overflow-hidden relative">
                  <img
                    src={imgTwo}
                    alt="transaction-figure"
                    className="absolute object-cover h-full object-center"
                  />
                </div>
                <p className="text-center flex flex-col">
                  <span className="text-sm xs:text-base font-medium capitalize text-affiliate-black">
                    workman
                  </span>
                  <span className="text-sm xs:text-base font-medium capitalize text-[#718EBF]">
                    designer
                  </span>
                </p>
              </div>

              <button className="h-10 w-10 rounded-full flex items-center justify-center absolute -right-1 xs:right-8 xs:top-1/2 xs:-translate-y-1/2 top-14 shadow-sm border">
                <span className="sr-only">next button</span>
                <ChevronRightIcon
                  className="h-6 text-[#718EBF]"
                  strokeWidth={2}
                />
              </button>
            </div>

            <div className="flex items-center justify-between w-[19rem] xs:w-full mt-8">
              <button className="text-sm xs:text-base font-medium text-[#718EBF] capitalize">
                write amount
              </button>
              <div className="h-11 xs:h-12 rounded-[5rem] bg-[#EDF1F7] flex items-center justify-between xs:w-56 relative p-3">
                <span className="text-[#718EBF] ml-2 text-sm xs:text-base font-medium">
                  525.05
                </span>
                <button className="py-1.5 h-full flex items-center space-x-3 px-5 rounded-[5rem] bg-affiliate-deep-blue text-white absolute right-0">
                  <span className="capitalize text-sm xs:text-base font-semibold">
                    send
                  </span>
                  <PaperIcon className="h-10 xs:w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-base lg:text-3xl font-bold text-affiliate-blue capitalize">
            balance history
          </h3>

          <BalanceHistory className="w-full" />
        </div>
      </div>
    </section>
  );
};
