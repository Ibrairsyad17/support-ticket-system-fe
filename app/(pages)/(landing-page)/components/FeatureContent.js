import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const FeatureContent = ({ data }) => {
  return (
    <div className="max-w-[85rem] py-10 transition duration-300 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-6 gap-2 mt-16 lg:mt-0 sm:gap-6 place-items-center">
            <div className="col-span-6">
              <img
                className="rounded-xl"
                src={data.image}
                alt="Image Description"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-7 transition duration-300">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold lg:text-3xl text-gray-800">
                {data.title}
              </h2>
            </div>

            <ul
              role="list"
              className="space-y-2 sm:space-y-4 transition duration-300"
            >
              {data.features.map((feature, index) => (
                <li className="flex space-x-3 items-center" key={index}>
                  <span className="mt-0.5 size-7 flex justify-center items-center rounded-full bg-emerald-500 text-white font-bold">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 size-3.5"></CheckIcon>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;
