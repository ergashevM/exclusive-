"use client";
import Image from "next/image";
import { useState } from "react";

const ThumbnailImage = ({ mainImage, thumbnails, initialSelectedId = 0 }) => {
  const [selectedId, setSelectedId] = useState(initialSelectedId);
  const [currentImage, setCurrentImage] = useState(mainImage);

  const changeImage = (index) => {
    setSelectedId(index);
    setCurrentImage(thumbnails[index]);
  };

  return (
    <div className="w-full max-w-[700px] h-auto mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-[170px] flex flex-row lg:flex-col justify-between gap-3 mr-4">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] flex items-center justify-center rounded-[4px] bg-[#F5F5F5] cursor-pointer p-2 mb-5 lg:mb-0 ${
              selectedId === index ? "border-2 border-[#000]" : ""
            }`}
            onClick={() => changeImage(index)}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="object-contain"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      <Image
        src={currentImage}
        alt="Main Product"
        className="w-full lg:w-[500px] max-w-[500px] h-auto lg:h-[588px] flex-1 rounded-[4px] object-contain bg-[#F5F5F5]"
        width={500}
        height={540}
      />
    </div>
  );
};

export default ThumbnailImage;
