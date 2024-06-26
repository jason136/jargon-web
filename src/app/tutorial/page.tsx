"use client";
import { useContext } from "react";
import React from "react";
import { ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";

export default function Tutorial() {

  return (
    <div className="flex-col flex h-full w-full justify-center items-center">
        <div>
            <p className="text-3xl font-quicksand font-bold text-center">Welcome to Jargon!</p>
            <p className="text-xl font-quicksand text-neutral-700 font-medium ">Scroll through these steps to get set up!</p>
        </div>
        <div className="flex overflow-x-auto scroll-snap-x mandatory p-4 items-center w-1/2">
        <ScrollMenu LeftArrow={null} RightArrow={null} >
            <div className="flex">
            <img src="/step1.png" className="h-full w-[800px] object-cover scroll-snap-align-center px-10" />
            <img src="/step2.png" className="h-full w-[800px] object-cover scroll-snap-align-center px-10" />
            <img src="/step3.png" className="h-full w-[800px] object-cover scroll-snap-align-center px-10" />
            <img src="step4.png" className="h-full w-[800px] object-cover scroll-snap-align-center px-10" />
            </div>
        </ScrollMenu>
        </div>
        <div className="h-10"/>
    </div>
  );
}