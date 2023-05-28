import React from "react";
import { PhoneIcon, MapPinIcon,ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";

const contact = () => {
  return (
    <div className="md:px-40 px-5">   
      <h1 className="text-3xl uppercase border-b-2 py-2 my-2">Contact us</h1>

      <div className="flex flex-row gap-10 my-10">
        <PhoneIcon className="mr-4 md:mr-0 h-[40px] w-[40px] " />
        <div className="flex flex-col md:w-[230px]">
          <p className=" font-semibold ">1800 811 4282</p>
          <p className="text-sm">
            Prdouct & Orders :24 hours a day, 7 days a week <br /> Company Info
            & Enquiries: 10:00 - 19:00, Monday - Friday
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10 my-10">
        <ChatBubbleOvalLeftEllipsisIcon className="h-[40px] w-[40px] items-center" />
        <div className="flex flex-col md:w-[230px]">
          <p className="font-semibold">24 hours a day</p>
          <p>7 days a week</p>
        </div>
      </div>
      <div className="flex flex-row gap-10 my-10">
        <MapPinIcon className="h-[40px] items-center" />
        <div className="flex flex-col md:w-[230px]">
          <p className="font-semibold">STORE LOCATOR</p>
          <p>Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
