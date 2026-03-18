import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ff46df14-8db4-4763-a56b-b393f502f310/files/4e6d700b-756a-45ec-95c6-a2341065dd70.jpg"
          alt="Уютное бельё для бабушек"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          УЮТНО
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Нижнее бельё для зрелых женщин — мягкое, удобное, сшитое с заботой о каждой
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}