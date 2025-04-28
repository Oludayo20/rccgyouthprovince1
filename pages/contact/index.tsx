import Navbar from "../../components/app/Navbar";
import PageTitle from "../../components/app/PageTitle";
import ContactForm from "../../components/contact/ContactForm";
import ViewerLayout from "../../layouts/viewer";
import { NextPageWithLayout } from "../../types/app";

const ContactUs: NextPageWithLayout = () => {
  return (
    <div className=" bg-white">
      <div className="mx-auto h-full flex flex-col items-center justify-center">
        <PageTitle title="Contact Us" />
        <div className="container flex flex-col lg:flex-row w-full items-center justify-between relative z-10 md:p-12 space-y-12 md:space-y-0">
          {/* Left Content */}
          <div className="w-full lg:w-[35%]">
            <h1 className="md:text-[53px] text-[35px] text-[#222222] font-normal">
              Let's Connect and Collaborate
            </h1>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-4">
            <h1 className="text-gray-600 md:w-[80%]">
              Have something on your mind? Fill out the form below, and let's
              start a conversation. You can also send an email, call us or
              locate us in the address below.
            </h1>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

ContactUs.getLayout = (page) => (
  <ViewerLayout navbar={<Navbar linkColor={true} />}>{page}</ViewerLayout>
);

export default ContactUs;
