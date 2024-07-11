import cookingData from "@/data/cookingData";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-2 m-2">
      {cookingData.map((category) =>
        category.items.map((cook) => (
          <div
            key={cook.name}
            className="max-w-24 rounded overflow-hidden flex justify-center items-center flex-col bg-gray-100 rounded-t-lg"
          >
            <div className="relative h-16 w-full">
              <Image
                src={cook.image}
                alt={cook.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="w-full flex items-center justify-center bg-main h-8 rounded-b-lg">
              <h2 className="font-bold text-[10px] text-center text-white">
                {cook.name}
              </h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default page;
