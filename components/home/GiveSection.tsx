import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLProps } from "react";

export default function GiveSection({
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) {
  const router = useRouter();

  const goToGivePage = () => {
    router.push("/give");
  };

  return (
    <div
      className={classNames(
        "mx-auto h-full p-4 flex flex-col items-center justify-center bg-white",
        className
      )}
      {...rest}
    >
      <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 space-y-12 md:space-y-0">
        {/* Left Content */}
        <div className="w-full lg:w-[50%]">
          <h1 className="md:text-[63px] text-[40px] text-[#222222]">
            Tithes, Offerings and Donations
          </h1>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6">
          <h1 className="md:text-2xl text-xl text-[#4C6EFE]">YP1 Accounts</h1>

          <div className="border-b border-yellow-300"></div>

          <h1 className="text-gray-600 md:w-[80%]">
            Give joyfully. Give purposefully. Give as God leads. “Each of you
            should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver.” —
            <span className="text-[#222222]"> 2 Corinthians 9:7</span>
          </h1>

          <div
            onClick={goToGivePage}
            className="bg-[#4C6EFE] text-white rounded-full px-6 py-[1rem] cursor-pointer w-[8rem]"
          >
            Give here
          </div>
        </div>
      </div>
    </div>
  );
}
