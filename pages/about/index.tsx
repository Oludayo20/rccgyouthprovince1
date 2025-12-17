import Image from "next/image";
import Pastors from "../../components/about/Pastors";
import Navbar from "../../components/app/Navbar";
import PageTitle from "../../components/app/PageTitle";
import ViewerLayout from "../../layouts/viewer";
import { NextPageWithLayout } from "../../types/app";

const AboutUs: NextPageWithLayout = () => {
  return (
    <div className=" bg-white">
      <div className="mx-auto h-full flex flex-col items-center justify-center">
        <PageTitle title="About Us" />
        <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 space-y-12 md:space-y-0">
          {/* Left Content */}
          <div className="w-full lg:w-[35%]">
            <h1 className="md:text-[53px] text-[35px] text-[#222222] font-normal">
              Youths set out on fire for the Gospel
            </h1>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-4">
            <h1 className="md:text-2xl text-xl text-[#4C6EFE]">
              About Youth Province 1
            </h1>

            <div className="border-b border-yellow-300"></div>

            <h1 className="text-gray-600 md:w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Et volutpat euismod
              volutpat egestas vel. Feugiat aenean rhoncus elit euismod aenean
              consequat consequat. Ipsum id vitae feugiat dui maecenas. Cursus
              gravida mattis eget imperdiet dui amet.
            </h1>
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 p-2">
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-4">
            <h1 className="md:text-2xl text-xl text-[#4C6EFE]">Our Vision</h1>

            <div className="border-b border-yellow-300"></div>

            <h1 className="text-gray-600 md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur. Eget fermentum egestas hac
              arcu enim nunc porta auctor. Amet semper odio eget consectetur
              potenti habitasse. Mauris id consequat vitae at id habitant.
              Ultricies erat aliquam nam mi augue nulla in. Augue nisi tortor
              velit amet magna lectus ornare enim euismod. Felis vel tristique
              malesuada lobortis. Lectus neque ullamcorper ornare consequat hac.
              Amet faucibus blandit magna arcu dui ornare enim adipiscing ac.
              Sagittis vitae a varius velit cursus felis. Consequat habitant id
              vitae ultricies amet egestas faucibus eu mi. Aliquam senectus
              etiam eget sed amet porttitor sed. Etiam consequat nisi
              condimentum.
            </h1>
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

        <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 p-2">
          {/* Left Content */}
          <div className="md:w-[50vw] w-full">
            <Image
              src="/images/pla.png"
              alt="Provincial Pastor"
              width={542}
              height={476}
              className="md:w-[542px] md:h-[476px] object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-center">
              <h1 className="md:text-2xl text-xl text-[#4C6EFE]">
                Our Mission
              </h1>
            </div>

            <div className="border-b border-yellow-300"></div>

            <div className="flex items-start justify-center text-gray-600">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
                  />
                </svg>
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur. Hendrerit consectetur
                senectus morbi molestie ultrices et amet egestas ac. Malesuada
                malesuada et sed ut donec. Sed diam rutrum auctor tempus rhoncus
                lobortis elementum. Id et adipiscing sit ultrices dui faucibus
                ac. Convallis faucibus tristique augue tempus at at diam. Nulla
                diam neque nunc massa. Imperdiet aliquam tellus est mauris ut
                cras bibendum est. Orci condimentum arcu ultricies tellus mi.
                Metus in ultrices ac lacinia ut in nibh pulvinar ut.
              </span>
            </div>

            <div className="text-gray-600 flex items-start justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
                  />
                </svg>
              </span>
              <span>
                Tincidunt quis nunc turpis tellus rhoncus magna ante malesuada.
                Iaculis scelerisque pharetra diam nulla velit sit. Faucibus mi
                ultrices proin velit massa. Risus ullamcorper netus justo amet
                commodo auctor tempus. Congue id nibh consectetur nibh viverra
                cras sodales viverra. Nulla gravida leo feugiat consectetur
                ullamcorper enim ac commodo nunc. Ac pharetra volutpat quis erat
                ut est varius eget. Ullamcorper scelerisque ipsum est semper
                elementum lectus. Tortor nullam eros.
              </span>
            </div>
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 p-2">
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-4">
            <h1 className="md:text-2xl text-xl text-[#4C6EFE]">Our History</h1>

            <div className="border-b border-yellow-300"></div>

            <h1 className="text-gray-600 md:w-[95%]">
              Lorem ipsum dolor sit amet consectetur. Eget fermentum egestas hac
              arcu enim nunc porta auctor. Amet semper odio eget consectetur
              potenti habitasse. Mauris id consequat vitae at id habitant.
              Ultricies erat aliquam nam mi augue nulla in. Augue nisi tortor
              velit amet magna lectus ornare enim euismod. Felis vel tristique
              malesuada lobortis. Lectus neque ullamcorper ornare consequat hac.
              Amet faucibus blandit magna arcu dui ornare enim adipiscing ac.
              Sagittis vitae a varius velit cursus felis. Consequat habitant id
              vitae ultricies amet egestas faucibus eu mi. Aliquam senectus
              etiam eget sed amet porttitor sed. Etiam consequat nisi
              condimentum.
            </h1>
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

        <Pastors />
      </div>
    </div>
  );
};

AboutUs.getLayout = (page) => (
  <ViewerLayout navbar={<Navbar linkColor={true} />}>{page}</ViewerLayout>
);

export default AboutUs;
