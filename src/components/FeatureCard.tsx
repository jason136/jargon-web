"use client";

import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  isReversed?: boolean;
  bgColor: string;
  titleColor: string;
  testColor: string;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  imagePath,
  imageAlt,
  isReversed = false,
  bgColor,
  titleColor,
  testColor,
  index
}: FeatureCardProps) {
  return (
    <div 
      className={`relative w-[1000px] rounded-[32px] ${bgColor} p-12 shadow-sm`}
      style={{ 
        left: `${(index * 100) - 150}px`,
        top: `${index * -80}px`
      }}
    >
      <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} items-center gap-16`}>
        <div className="w-1/2">
          <Image
            src={imagePath}
            alt={imageAlt}
            width={500}
            height={375}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-6 text-left">
          <h3 className={`text-3xl font-semibold ${titleColor}`}>{title}</h3>
          <p className={`text-xl ${testColor}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}
