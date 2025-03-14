import classNames from "classnames";
import Image from "next/image";
import { HTMLProps, MouseEventHandler } from "react";

interface DetailsSectionProps extends HTMLProps<HTMLDivElement> {
  onScroll?: () => void;
}

export default function DetailsSection({
  onScroll,
  className,
  ...rest
}: DetailsSectionProps) {
  const onEntered: MouseEventHandler<HTMLDivElement> = () => {
    if (onScroll) onScroll();
  };

  return (
    <div
      id="about-us"
      onMouseEnter={onEntered}
      className={classNames(
        "mx-auto h-full p-4 flex flex-col items-center justify-center bg-white space-y-12 md:space-y-0",
        className
      )}
      {...rest}
    >
      <div className="container flex flex-col lg:flex-row w-full items-center md:justify-between relative z-10 md:p-8 p-2">
        <div className="md:w-[50vw] w-full">
          <Image
            src="/images/pla.png"
            alt="Provincial Pastor"
            width={542}
            height={476}
            className="md:w-[542px] md:h-[476px] object-cover"
          />
        </div>
        <div className="md:w-[50vw] w-full">
          <h2 className="text-[#4C6EFE] font-bold border-b-2 border-yellow-300 pb-2 mb-4">
            Message from the Provincial Pastor
          </h2>
          <p className="text-gray-700 mb-4">
            RCCG Youth Province 1 is a vibrant community of young,
            purpose-driven Christians committed to living for Christ and making
            a difference in the world. We are a movement of believers passionate
            about worship, leadership, spiritual growth, and societal impact.
            Through dynamic gatherings, life-changing conferences, and impactful
            outreach initiatives, we empower young people to discover their
            purpose, develop their potential, and influence their world for
            Jesus.
          </p>
          <div className="flex flex-col md:flex-row md:items-center mb-6 text-gray-700">
            <span className="text-lg md:mr-2 mr-0">•</span>
            <span className="font-medium">Pastor Oluwagbemileke Adeboye, </span>
            <span className="text-[#4C6EFE] md:ml-1">
              Provincial Pastor, PSF Worldwide
            </span>
          </div>

          <div className="flex justify-between">
            <div className="text-start space-y-4">
              <span className="text-4xl text-[#4C6EFE] block">60+</span>
              <span className="text-gray-600">Churches</span>
            </div>

            <div className="text-start space-y-4">
              <span className="text-4xl text-[#4C6EFE] block">500k+</span>
              <span className="text-gray-600">Members</span>
            </div>

            <div className="text-start space-y-4">
              <span className="text-4xl text-[#4C6EFE] block">16</span>
              <span className="text-gray-600">Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 p-2">
        {/* Left Content */}
        <div className="w-full lg:w-[50%]">
          <div className="md:w-[30vw] space-y-12 mb-8 lg:mb-0">
            <div className="flex items-center space-x-12">
              <div className="border-[1.5px] border-[#4C6EFE] rounded-full w-[20px] h-[20px] flex items-center justify-center text-[#4C6EFE] font-bold text-xl p-8">
                <span>1</span>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-2xl text-gray-700">Our Mission</h3>
                <p className="text-gray-600 mt-2">
                  To ignite a deep, personal relationship with God among young
                  people.
                </p>
              </div>
            </div>
            <div className="border-b border-yellow-300"></div>

            <div className="flex items-center space-x-12 w-full">
              <div className="border-[1.5px] border-[#4C6EFE] rounded-full w-[20px] h-[20px] flex items-center justify-center text-[#4C6EFE] font-bold text-xl p-8">
                <span>2</span>
              </div>
              <div className="flex flex-col space-y-3 w-full">
                <h3 className="text-2xl text-gray-700">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                  We are committed to raising a generation of youth transformed
                  by God&apos;s power—spiritually, mentally, and socially—to
                  impact their world.
                </p>
              </div>
            </div>
            <div className="border-b border-yellow-300"></div>

            <div className="flex items-center space-x-12">
              <div className="border-[1.5px] border-[#4C6EFE] rounded-full w-[20px] h-[20px] flex items-center justify-center text-[#4C6EFE] font-bold text-xl p-8">
                <span>3</span>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-2xl text-gray-700">Our Goals</h3>
                <p className="text-gray-600 mt-2">
                  Our focus is on empowering young people to discover their
                  purpose, develop their potential, and lead with excellence in
                  every sphere of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <Image
            src="/images/bus.png"
            alt="Bus Image"
            width={542}
            height={476}
            className="md:w-[542px] md:h-[476px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
