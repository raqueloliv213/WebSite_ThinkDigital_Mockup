import React from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

interface FeatureProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageStyle?: React.CSSProperties;
}

export function Feature({ badge, title, description, image, imageAlt, reverse, imageStyle }: FeatureProps) {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px]">
        <div className={`flex flex-col gap-10 lg:items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <motion.div
            className="w-full aspect-video flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,133,202,0.13))", ...imageStyle }}
            />
          </motion.div>
          <motion.div
            className={`flex gap-4 flex-col flex-1 ${reverse ? "lg:pr-10" : "lg:pl-10"}`}
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div><Badge>{badge}</Badge></div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-bold text-left text-[#0d1a38]">
                {title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-[#6b7a99] text-left">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
