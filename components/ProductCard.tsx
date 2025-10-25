// Notes:
// 1. Added Image interaction/animation just to improve the UI/UX.
// 2. Added line-clamp-3 class to limit the description to 3 lines.

import Image from "next/image";
import { ProductCardProps } from "@/types/product";

export default function ProductCard({
  image,
  title,
  description,
  buttonText = "View More",
  onButtonClick,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl w-full max-w-sm mx-auto">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4 h-[calc(100%-16rem)] flex flex-col">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="mt-auto cursor-pointer w-full py-3 px-6 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`View more details about ${title}`}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}
