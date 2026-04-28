"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

const ProductCategorySection = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".gsap-card");

    cards.forEach((card) => {
      const image = card.querySelector(".gsap-image");

      const handleEnter = () => {
        gsap.to(card, {
          scale: 1.03,
          y: -10,
          rotateX: 5,
          rotateY: -5,
          transformPerspective: 1200,
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          duration: 0.5,
          ease: "power4.out",
        });

        if (image) {
          gsap.to(image, {
            scale: 1.12,
            x: -8,
            y: -4,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      };

      const handleLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
          duration: 0.5,
          ease: "power3.out",
        });

        if (image) {
          gsap.to(image, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <section className="py-10 px-6 lg:px-5 bg-linear-to-b from-[#0F172A] via-[#111827] to-[#0F172A] overflow-hidden">

      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Product Category
        </h2>

        <p className="text-white/70 max-w-xl mx-auto">
          Find the right solutions for every area of your home.
        </p>
      </div>

    <div className="hidden lg:grid grid-cols-4 grid-rows-1 gap-6 max-w-[1400px] mx-auto">

         <div
          className="gsap-card col-span-1 row-span-2 h-[540px] rounded-3xl overflow-hidden relative cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/assets/product-category/Homepage_Product Category_Smart Devices 4.png"
            alt="Smart Home Device"
            fill
            className="gsap-image "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Smart Home Device
              </h3>

              <p className="text-white/80 max-w-xs leading-relaxed">
                Simplify your life by providing seamless automation for your home.
              </p>
            </div>

            <button className="text-sm font-medium">
              Discover More →
            </button>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-2 grid-rows-1 gap-6">

          <div
            className="gsap-card col-span-1 rounded-3xl overflow-hidden relative p-8 bg-gradient-to-r from-[#6C4CF1] to-[#8E6CFF] text-white cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Cooking
            </h3>

            

            <p className="text-white text-[14px] max-w-sm mb-8">
              Cook with ease and precision ensuring perfect results everytime.
            </p>

            <button className="text-sm font-medium">
              Discover more
            </button>

            <Image
              src="/assets/product-category/cooking_category.png"
              alt=""
              width={260}
              height={260}
              className="gsap-image absolute right-0 bottom-0 object-contain"
            />
          </div>

          {/* HVAC */}
          <div
            className="gsap-card rounded-3xl col-span-1 overflow-hidden relative p-8 bg-[#2B3446] text-white border border-white/10 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              HVAC
            </h3>

            <p className="text-white text-[14px] mb-8">
            Manage your home's heating, cooling, and ventilation for maximum comfort and 
            energy savings.            </p>

            <button className="text-sm font-medium">
              Discover More
            </button>

            <Image
              src="/assets/product-category/hvac_category.png"
              alt=""
              width={100}
              height={150}
              className="gsap-image absolute right-0 bottom-0 object-contain"
            />
          </div>

          {/* CLEANING */}
          
        </div>

        <div
            className="gsap-card rounded-3xl overflow-hidden relative p-8 bg-[#F2D8E5] text-black cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Cleaning
            </h3>

            <p className="mb-8 text-white text-[14px] max-w-xs">
            Keep your home spotless without the hassle of traditional cleaning.            </p>

            <button className="text-sm font-medium">
              Discover More
            </button>

            <Image
              src="/assets/product-category/cleaning_category.png"
              alt=""
              width={170}
              height={170}
              className="gsap-image absolute right-0 bottom-0 object-contain"
            />
          </div>

          {/* COOLING */}
          <div
            className="gsap-card rounded-3xl overflow-hidden relative p-8 bg-[#DCEAF5] text-black cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-[14px] font-semibold mb-3">
              Cooling
            </h3>

            <p className="mb-8 max-w-xs">
              Enhance your kitchen with smart solutions for lasting freshness.
            </p>

            <button className="text-sm font-medium">
              Discover More
            </button>

            <Image
              src="/assets/product-category/cooling_category.png"
              alt=""
              width={100}
              height={150}
              className="gsap-image absolute right-0 bottom-0 object-contain"
            />
          </div>

          {/* COMING SOON */}
          <div
            className="gsap-card rounded-3xl overflow-hidden relative bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-center p-8 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div>
          

              <h3 className="text-2xl font-semibold text-white leading-relaxed">
                And more is coming your way.
              </h3>
            </div>
          </div>

      </div>
    </section>
  );
};

export default ProductCategorySection;