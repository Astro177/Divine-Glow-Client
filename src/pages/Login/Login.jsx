import { Checkbox, Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-white pb-[180px] pt-[300px] text-xs">
      <div className="max-w-[550px] mx-auto">
        {" "}
        <p className="mb-4">SIGN IN</p>
        <p>
          If you are already a DivineGlow Family member, please enter your login
          information.
        </p>
        <div className="mt-12 flex flex-col gap-4">
          <Input variant="standard" label="E-Mail address*" />
          <div className="relative">
            <Input variant="standard" label="Password*" />
            <p className="text-[#737373] absolute right-0 top-4 cursor-pointer">
              SHOW
            </p>
          </div>
          <p className="mt-8">All fields marked with an * are mandatory</p>
          <button className="bg-black text-white hover:bg-black/80 duration-200 py-3 mt-6">
            LOGIN
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center -mt-4">
              <Checkbox />
              <p className="text-[#737373]">Remember me</p>
            </div>
            <p className="-mt-4 text-[#737373]">FORGOT PASSWORD</p>
          </div>
        </div>
        <div className="mt-24 flex flex-col">
          <p>NEW MEMBER</p>
          <p className="mt-10">
            Create your personal account to join our DivineGlow family.
          </p>
          <button className="text-black duration-200 py-3 mt-10 outline-1 outline">
            <Link to={"/signUp"}>CREATE AN ACCOUNT</Link>
          </button>
        </div>
        <div className="mt-36">
          <p>ORDER STATUS</p>
          <p className="mt-6 mb-8">
            You can verify the status of your order without having an account.
            Please provide your contact information.
          </p>
          <div className="flex flex-col gap-4">
            <Input variant="standard" label="Order Number*" />
            <Input variant="standard" label="Email Used for Your Order*" />
            <Input
              variant="standard"
              label="Zip Code For Your Billing Address*"
            />
            <p className="mt-8 text-[#737373]">
              All fields marked with an * are mandatory
            </p>
            <button className="text-black duration-200 py-3 mt-10 outline-1 outline">
              VERIFY THE ORDER STATUS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
