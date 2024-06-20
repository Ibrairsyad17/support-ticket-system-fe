"use client";
import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureContent = ({ data }) => {
  const controlsText = useAnimation();

  const [textRef, inViewRef] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger the animation when 20% of the component is visible
  });

  useEffect(() => {
    if (inViewRef) {
      controlsText.start("visible");
    }
  }, [controlsText, inViewRef]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      className="max-w-6xl py-10 transition duration-300 lg:py-14 mx-auto"
      ref={textRef}
      initial="hidden"
      animate={controlsText}
      variants={textVariants}
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-6 gap-2 mt-16 lg:mt-0 sm:gap-6 place-items-center">
            <motion.div
              className="col-span-6"
              animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 0.5, 1],
                transition: {
                  duration: 0.4,
                  repeatType: "reverse",
                },
              }}
            >
              <Image
                className="rounded-xl"
                src={data.image}
                alt="Image Description"
                width={500}
                height={300}
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-7 transition duration-300">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <motion.h2
                className="font-bold lg:text-3xl text-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {data.title}
              </motion.h2>
            </div>

            <ul
              role="list"
              className="space-y-2 sm:space-y-4 transition duration-300"
            >
              {data.features.map((feature, index) => (
                <motion.li
                  className="flex space-x-3 items-center"
                  key={index}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{
                    y: [30, 0],
                    opacity: [0, 0.5, 1],
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <span className="mt-0.5 size-7 flex justify-center items-center rounded-full bg-emerald-500 text-white font-bold">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 size-3.5"></CheckIcon>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureContent;
