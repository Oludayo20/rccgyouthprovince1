"use client";

import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import ViewerLayout from "../../layouts/viewer";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="Get in touch"
          title={
            <>
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                Connect
              </span>{" "}
              and Collaborate
            </>
          }
          description="Have something on your mind? Fill out the form below and let's start a conversation. You can also email, call, or locate us at the address below."
        />

        <div className="pb-24">
          <ContactForm />
        </div>
      </div>
    </ViewerLayout>
  );
}
