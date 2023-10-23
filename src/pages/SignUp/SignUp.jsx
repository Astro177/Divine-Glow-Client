import { Checkbox, Input, Option, Select } from "@material-tailwind/react";
import React from "react";

const SignUp = () => {
  return (
    <section className="bg-white pb-[180px] pt-[300px] text-xs">
      <div className="max-w-[550px] mx-auto">
        <p>CREATE AN ACCOUNT</p>
        <p className="mt-2">
          Be the first to know about new collections and exclusive events
          through your personal account.
        </p>
        <div className="mt-16 gap-4 flex flex-col">
          <Select size="lg" label="Select Title">
            <Option>Mr.</Option>
            <Option>Mrs.</Option>
            <Option>Ms.</Option>
            <Option>Title*</Option>
            <Option>---</Option>
          </Select>
          <Input variant="standard" label="First Name*" />
          <Input variant="standard" label="Last Name*" />
          <Select size="lg" label="Select Country">
            <Option>Bangladesh</Option>
          </Select>
          <Input variant="standard" label="E-Mail*" />
          <div className="flex gap-8">
            <Input variant="standard" label="Country Code*" />
            <Input variant="standard" label="Telephone*" />
          </div>
          <div className="relative">
            <Input variant="standard" label="Password*" />
            <p className="text-[#737373] absolute right-0 top-4 cursor-pointer">
              SHOW
            </p>
            <p className="mt-0.5 text-[#737373]">
              Please enter a password containing at least 8 characters, with 1
              number and 1 uppercase letter.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <p>My contact preferences:</p>
          <div className="mt-4 flex justify-between gap-10">
            <div className="flex items-center gap-4">
              <Checkbox />
              <p className="text-[#737373]">E-Mail</p>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox />
              <p className="text-[#737373]">Phone Call</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between gap-10">
            <div className="flex items-center gap-4">
              <Checkbox />
              <p className="text-[#737373]">Text Messaging / SMS</p>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox />
              <p className="text-[#737373]">Instant messaging</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-4">
            <Checkbox />
            <p className="text-[#737373] leading-6">
              I consent to the processing of my data by DivineGlow in accordance
              with the conditions set forth in the Privacy Policy and I wish to
              be contacted by DivineGlow by email to receive personalized
              information on DivineGlow products and services, as well as
              newsletters and invitations to events and to participate in
              marketing surveys. *
            </p>
          </div>
          <p className="mt-8 text-[#737373]">
            All fields marked with an * are mandatory
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-black duration-200 py-3 mt-10 outline-1 outline">
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
