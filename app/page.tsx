"use client";

import Activities from "@/components/Activities";
import { carousel } from "@/lib/data";
import portrait from "@/public/portrait.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousel.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="w-full">
      <section className="p-24 flex flex-col justify-center items-center gap-28 w-full">
        <div className="flex flex-wrap justify-center items-center gap-20 bg-transparent">
          <div className="flex items-center justify-center bg-transparent">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                }}
              >
                <Image
                  src={portrait}
                  alt="Portrait de Chrissy Ottenhof"
                  width="600"
                  height="600"
                  quality="95"
                  priority={true}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 text-gray-900 mb-10 mt-4 px-4 !leading-[1.5] max-w-[40rem]"
          >
            <h1 className=" uppercase text-2xl sm:text-4xl font-medium bg-gradient-to-r from-[#de54e6] to-[#eabf00] inline-block text-transparent bg-clip-text">
              Chrissy Ottenhof
            </h1>
            <h2 className="uppercase sm:text-2xl text-[#eabf00]">
              Illustratrice, Graphiste et Peintre
            </h2>
            <div className="flex flex-col gap-2 text-justify w-[29.3rem]">
              <p>
                Depuis toute petite, je suis attirée par les domaines
                artistiques. J&apos;ai fait beaucoup de peinture, de dessin...
                Et aujourd&apos;hui, j&apos;ai trouvé les domaines
                d&apos;activité qui me permettent d&apos;exprimer mon
                savoir-faire. L&apos;illustration et le graphisme.
              </p>
              <p>
                La création est indispensable à mon épanouissement. J&apos;aime
                créer des motifs, des fresques, des logos et différents types
                d&apos;illustrations.
              </p>
              <p>
                Je sais qu&apos;il est difficile de choisir une illustratrice ou
                une graphiste, mais je peux vous affirmer que ce qui fait la
                différence, c&apos;est le fait d&apos;être passionnée.
              </p>
            </div>
          </motion.div>
        </div>
        <Activities />
      </section>
      <section className="flex flex-col justify-center items-center w-full">
        <h1 className="text-6xl text-gray-800 font-bold">Mes Créations</h1>
        <div className="flex flex-col max-w-[1600px]  m-auto py-16 px-4 relative group">
          <Image
            className="w-[1400px] h-full z-[-99] rounded-xl bg-center bg-cover duration-500"
            src={carousel[currentIndex].picture}
            alt="Portfolio de Chrissy Ottenhof"
            quality={95}
          ></Image>
          <div className="hidden group-hover:block absolute top-[50%] right-5 cursor-pointer -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white">
            <BsChevronCompactRight size={50} onClick={nextSlide} />
          </div>
          <div className=" hidden group-hover:block absolute top-[50%] left-5 cursor-pointer -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white">
            <BsChevronCompactLeft size={50} onClick={prevSlide} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {carousel.map((slide, slideIndex) => (
              <div
                className="text-2xl cursor-pointer"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
