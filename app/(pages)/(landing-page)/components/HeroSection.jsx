"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  const [textRef, inViewRef] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger the animation when 20% of the component is visible
  });

  const [imageRef, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewRef) {
      controlsText.start("visible");
    }
    if (inViewImage) {
      controlsImage.start("visible");
    }
  }, [controlsText, controlsImage, inViewRef, inViewImage]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      scale: [0, 1.1, 1],
      opacity: [0, 0.5, 1],
      transition: {
        duration: 0.5,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="bg-white my-10 lg:my-20 antialiased grid-cols-1 grid lg:mx-auto lg:max-w-6xl place-items-center overflow-hidden">
      <motion.div
        className="max-w-screen-xl pt-8 mx-auto"
        ref={textRef}
        initial="hidden"
        animate={controlsText}
        variants={textVariants}
      >
        <div className=" mx-auto grid lg:grid-cols-2">
          <h2 className="text-3xl font-bold md:text-3xl md:leading-tight col-span-1">
            Solusi Terpadu untuk Meningkatkan Efisiensi Karyawan.
          </h2>
          <p className="mt-1 text-md lg:text-lg text-gray-600 mb-3 col-span-1">
            Akses berbagai fitur penting dalam satu platform dari manajemen
            tiket hingga kolaborasi tim, komunikasi internal, dan akses data,
            semua tersedia dalam satu tempat.
          </p>
        </div>
      </motion.div>

      <div className="max-w-screen-xl pt-8 mx-auto">
        <div className=" mx-auto grid xl:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl flex justify-center items-center"
            ref={imageRef}
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
          >
            <Image
              className="size-2/3"
              width={500}
              height={500}
              src="/assets/img/icon-lp-1.svg"
              alt="Image Description"
            />
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 className="text-2xl font-bold text-gray-800 lg:mb-2">
                  Bekerja dengan efisien
                </h3>
                <p className="mt-1 text-gray-500">
                  Selesaikan berbagai keluhan dalam satu tempat penyelesaian
                  secara efisien.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl flex justify-center items-center"
            ref={imageRef}
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
          >
            <Image
              className="size-2/3"
              width={500}
              height={500}
              src="/assets/img/icon-lp-2.svg"
              alt="Image Description"
            />
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 className="text-2xl font-bold text-gray-800 lg:mb-2">
                  Penyelesaian Nyata
                </h3>
                <p className="mt-1 text-gray-500">
                  Terbukti secara nyata membantu Anda agar pekerjaan lebih
                  terorganisir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
