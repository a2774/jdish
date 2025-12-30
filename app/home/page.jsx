"use client";

import { CiCirclePlus, CiImageOn, CiShare2 } from "react-icons/ci";
import { IoVideocamOutline, IoBookmarkOutline } from "react-icons/io5";
import { useRef } from "react";
import { MdVerified } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { CheckCircle2 } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Image } from "lucide-react";
import { Video } from "lucide-react";

export default function Page() {
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 max-w-7xl mx-auto border border-gray-100 shadow-sm p-2 sm:p-4">
        <input type="file" accept="image/*" ref={imageRef} className="hidden" />
        <input type="file" accept="video/*" ref={videoRef} className="hidden" />

        <div className="flex gap-6">
          <img
            src="/124599.jfif"
            className="h-10 w-10 rounded-full -ml-10 shrink-0"
            alt="User profile image"
          />
          <input
            type="text"
            placeholder="Share a recipe"
            className="h-12 w-full max-w-2xl rounded-xl px-4 text-sm font-semibold bg-gray-100 border border-gray-100 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3 ml-0 sm:ml-4">
          <button className="hover:text-[#f4514f] border-gray-300 px-5 py-2.5 rounded-lg text-sm  hover:bg-gray-100 transition">
            <CirclePlus className="inline mr-1 text-xs h-4 w-4 text-gray-700 " />
            <span className="text-ms font-normal text-gray-700"> Recipe</span>
          </button>

          <button
            type="button"
            onClick={() => imageRef.current && imageRef.current.click()}
            className="hover:text-[#f4514f] border-gray-300 px-5 py-2.5 rounded-lg text-sm  hover:bg-gray-100 transition"
          >
            <Image className="inline mr-1 text-xs h-4 w-4 text-gray-700" />
            <span className="text-ms font-normal text-gray-700"> Image</span>
          </button>

          <button
            type="button"
            onClick={() => videoRef.current && videoRef.current.click()}
            className="hover:text-[#f4514f] border-gray-300 px-5 py-2.5 rounded-lg text-sm  hover:bg-gray-100 transition"
          >
            <Video className="inline mr-1 text-xs h-4 w-4 text-gray-700" />
            <span className="text-ms font-normal text-gray-700"> Video</span>
          </button>

          <button className="bg-red-300 border border-gray-300 px-5 h-8 rounded-full text-sm font-medium transition  ml-42">
            <span className="text-ms text-white font-normal">Post</span>
          </button>
        </div>
      </section>

      {[
        {
          img: "/aa.avif",
          name: "Chef Marco Rossi",
          time: "@chefmarco · 2h",
          title: "Perfect Homemade Pizza Recipe! 🍕",
          photo: "/photo-1546069901-d5bfd2cbfb1f.avif",
        },
        {
          img: "/aaaa.avif",
          name: "Foodie fiona",
          time: "@chefmarco · 1h",
          title: "Fresh Summer Pasta Salad 🥗",
          photo: "/photo-1509440159596-0249088772ff.avif",
        },
        {
          img: "/adda.avif",
          name: "Chef Antonic Sliva",
          time: "@chefmarco · 3h",
          title: "Homemade Sourdough Bread 🍞",
          photo: "/photo-1513104890138-7c749659a591.avif",
        },
        {
          img: "/anilkumar.jpeg",
          name: "Culinary Chaira",
          time: "@chefmarco · 4h",
          title: "Vegan Chocolate Cake 🍫",
          photo: "/photo-1571115177098-24ec42ed204d.avif",
        },
        {
          img: "/anilkumar.jpeg",
          name: "Chef Prierrz Dubois",
          time: "@chefmarco · 2h",
          title: "Vegan Chocolate Cake 🍫",
          photo: "/photo-1601050690597-df0568f70950.avif",
        },
      ].map((post, i) => (
        <section
          key={i}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 space-y-1"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 group cursor-pointer">
              <img
                src={post.img}
                alt="Chef profile"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200 transition group-hover:ring-2 group-hover:ring-[#f4514f] "
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-sm font-semibold text-gray-900 transition group-hover:text-[#f4514f]">
                    {post.name}
                  </span>
                  <CheckCircle2
                    className="h-4 w-4"
                    fill="#1877F2"
                    stroke="white"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-xs text-gray-500 transition group-hover:text-[#f4514f]">
                  {post.time}
                </span>
              </div>
            </div>

            <button
              aria-label="More options"
              className=" w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 transition text-gray-500 "
            >
              <span className="text-xl leading-none">…</span>
            </button>
          </div>

          <p className="text-xs font-normal text-gray-800 mt-4 mb-3">
            {post.title}
          </p>

          <div className="rounded-xl overflow-hidden">
            <img
              src={post.photo}
              className="w-full h-64 object-cover"
              alt="Food"
            />
          </div>

          <p className="text-[12px] text-gray-500 mt-3 leading-relaxed">
            A classic Italian recipe with homemade ingredients and fresh
            toppings. Perfect for family dinners and gatherings.In a large bowl,
            combine pasta, tomatoes, cucumber, onion, mozzarella, olives, and
            basil.
          </p>

          <div className="flex items-center justify-between text-gray-500 text-xs pt-2">
            <div className="flex items-center gap-6">
              <span className="hover:text-[#f4514f] cursor-pointer flex items-center gap-1 w-14">
                <FaArrowUp />
                <span>1.2K</span>
              </span>
              <span className="hover:text-[#f4514f] cursor-pointer flex items-center gap-1 w-14">
                <FiMessageCircle />
                <span>234</span>
              </span>
              <span className="hover:text-[#f4514f] cursor-pointer flex items-center gap-1 w-16">
                <CiShare2 />
                <span>Share</span>
              </span>
            </div>
            <span className="hover:text-[#f4514f] cursor-pointer flex items-center">
              <IoBookmarkOutline className="h-4 w-4" />
            </span>
          </div>
        </section>
      ))}
    </div>
  );
}
