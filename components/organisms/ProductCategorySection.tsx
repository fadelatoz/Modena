"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from "gsap/src/Observer";

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

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".mobile-card");

    // 🔥 INITIAL STACK POSITION
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: index * 70, // stack offset
        scale: 1 - index * 0.03,
        opacity: 1,
        zIndex: index,
      });
    });

    // 🔥 MASTER TIMELINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",

        start: "top top",

        end: `+=${cards.length * 450}`,

        scrub: 1,

        pin: true,

        anticipatePin: 1,
      },
    });

    // 🔥 STACK ANIMATION
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      // CURRENT CARD MOVE UP
      tl.to(
        card,
        {
          y: -120,
          scale: 0.92,
          opacity: 0.7,
          duration: 1,
          ease: "power2.out",
        },
        index,
      );

      // NEXT CARD OPEN
      tl.to(
        nextCard,
        {
          y: index * 20,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",

          onStart: () => {
            gsap.set(nextCard, {
              zIndex: 999,
            });
          },
        },
        index,
      );
    });

    // 🔥 IMAGE PARALLAX
    cards.forEach((card) => {
      const image = card.querySelector(".stack-image");

      if (!image) return;

      gsap.fromTo(
        image,

        {
          scale: 1.08,
          y: 30,
        },

        {
          scale: 1,
          y: 0,

          scrollTrigger: {
            trigger: ".cards-section",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    });

    return () => {
      tl.kill();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="py-10 px-6 lg:px-5 bg-linear-to-b from-[#0F172A] via-[#111827] to-[#0F172A] overflow-hidden">
      {/* DESKTOP GRID - UNCHANGED */}
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
              <h3 className="text-3xl font-semibold mb-4">Smart Home Device</h3>

              <p className="text-white/80 max-w-xs leading-relaxed">
                Simplify your life by providing seamless automation for your
                home.
              </p>
            </div>

            <button className="text-sm font-medium">Discover More →</button>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-2 grid-rows-1 gap-6">
          <div
            className="gsap-card col-span-1 rounded-3xl overflow-hidden relative p-8 bg-gradient-to-r from-[#6C4CF1] to-[#8E6CFF] text-white cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-semibold mb-3">Cooking</h3>

            <p className="text-white text-[14px] max-w-sm mb-8">
              Cook with ease and precision ensuring perfect results everytime.
            </p>

            <button className="text-sm font-medium">Discover more</button>

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
            <h3 className="text-2xl font-semibold mb-3">HVAC</h3>

            <p className="text-white text-[14px] mb-8">
              Manage your home's heating, cooling, and ventilation for maximum
              comfort and energy savings.{" "}
            </p>

            <button className="text-sm font-medium">Discover More</button>

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
          <h3 className="text-2xl font-semibold mb-3">Cleaning</h3>

          <p className="mb-8 text-white text-[14px] max-w-xs">
            Keep your home spotless without the hassle of traditional
            cleaning.{" "}
          </p>

          <button className="text-sm font-medium">Discover More</button>

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
          <h3 className="text-[14px] font-semibold mb-3">Cooling</h3>

          <p className="mb-8 max-w-xs">
            Enhance your kitchen with smart solutions for lasting freshness.
          </p>

          <button className="text-sm font-medium">Discover More</button>

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

      {/* MOBILE VERSION */}
      <div className="block lg:hidden overflow-hidden px-4 pb-24">
        <div className="cards-section relative h-[720px] overflow-hidden">
          {/* CARD 1 */}
          <div className="mobile-card absolute left-0 top-0 z-10 w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="/assets/product-category/Homepage_Product Category_Smart Devices 4.png"
                alt=""
                fill
                className="stack-image object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 flex h-full flex-col items-center px-8 pt-12 text-center text-white">
                <h3 className="text-[20px] font-semibold">Smart Home Device</h3>

                <p className="mt-6 text-[14px] leading-7 text-white/80">
                  Simplify your life by providing seamless automation for your
                  home.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="mobile-card absolute left-0 top-0 z-20 w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] bg-[#7E5BEF] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex h-full flex-col items-center px-8 pt-10 pb-10 text-white">
                <h3 className="text-[18px] font-semibold">Cooking</h3>

                <p className="mt-5 text-center text-[14px] leading-7 text-white/85">
                  Cook with ease and precision ensuring perfect results
                  everytime.
                </p>

                <div className="mt-auto flex justify-center pt-10">
                  <Image
                    src="/assets/product-category/cooking_category.png"
                    alt=""
                    width={240}
                    height={240}
                    className="stack-image h-auto w-[240px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="mobile-card absolute left-0 top-0 z-30 w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] bg-[#DCEAF5] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex h-full flex-col items-center px-8 pt-10 pb-10 text-[#1F2937]">
                <h3 className="text-[18px] font-semibold">Cooling</h3>

                <p className="mt-5 text-center text-[14px] leading-7">
                  Smart cooling solutions for lasting freshness.
                </p>

                <div className="mt-auto flex justify-center pt-10">
                  <Image
                    src="/assets/product-category/cooling_category.png"
                    alt=""
                    width={210}
                    height={210}
                    className="stack-image h-auto w-[210px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="mobile-card absolute left-0 top-0 z-40 w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] bg-[#E7CAD8] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex h-full flex-col items-center px-8 pt-10 pb-10 text-[#1F2937]">
                <h3 className="text-[18px] font-semibold">Cleaning</h3>

                <p className="mt-5 text-center text-[14px] leading-7">
                  Keep your home spotless without the hassle.
                </p>

                <div className="mt-auto flex justify-center pt-10">
                  <Image
                    src="/assets/product-category/cleaning_category.png"
                    alt=""
                    width={210}
                    height={210}
                    className="stack-image h-auto w-[210px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="mobile-card absolute left-0 top-0 z-50 w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] bg-[#C5B7F0] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="flex h-full flex-col items-center px-8 pt-10 pb-10 text-[#1F2937]">
                <h3 className="text-[18px] font-semibold">HVAC</h3>

                <p className="mt-5 text-center text-[14px] leading-7">
                  Heating, cooling and ventilation for modern homes.
                </p>

                <div className="mt-auto flex justify-center pt-10">
                  <Image
                    src="/assets/product-category/hvac_category.png"
                    alt=""
                    width={210}
                    height={210}
                    className="stack-image h-auto w-[210px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="mobile-card absolute left-0 top-0 z-[60] w-full">
            <div className="card-inner relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="/assets/Daily activity product.png"
                alt=""
                fill
                className="stack-image object-cover opacity-20"
              />

              <div className="absolute inset-0 bg-[#2E3444]/85 backdrop-blur-md" />

              <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">
                <h3 className="text-[30px] font-medium leading-[42px] text-white">
                  And more is coming your way.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-xl border border-white px-8 py-3 text-sm font-medium text-white">
            See All Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
