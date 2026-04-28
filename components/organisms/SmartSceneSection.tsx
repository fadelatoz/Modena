"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";

const SCENE_IMAGES = [
  "/assets/smart-scene/Rectangle 4945.png",
  "/assets/smart-scene/scene-1.png",
"/assets/product-category/Homepage_Product Category_Smart Devices 4.png",
  "/assets/smart-scene/Rectangle 4941.png",
  "/assets/smart-scene/Rectangle 4943.png",
];

export default function SmartSceneSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true, 

  });

  const [selectedIndex, setSelectedIndex] = useState(2);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => {
    emblaApi?.scrollTo(i);
  }, [emblaApi]);

  const getDiff = (index: number) => {
    const len = SCENE_IMAGES.length;
    const diff = index - selectedIndex;
    const alt = diff > 0 ? diff - len : diff + len;
    return Math.abs(diff) < Math.abs(alt) ? diff : alt;
  };



  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 block mb-4">
            Smart Scene
          </span>

          <Text variant="h2" className="text-3xl md:text-4xl text-gray-900">
            The Smart Way to Manage Your Daily Routine
          </Text>
        </div>

        {/* 🔥 CAROUSEL */}
        <div className="relative py-16">
          <div className="w-full [perspective:2000px]">

            <div ref={emblaRef} className="overflow-visible">
              <div className="flex gap-6 items-center">

                {SCENE_IMAGES.map((src, i) => {
                  const diff = getDiff(i);
                  const isActive = diff === 0;

                  return (
                    <div
                      key={i}
                      onClick={() => scrollTo(i)}
                      className={clsx(
                        "flex-none relative transition-all duration-500 will-change-transform",
                        "w-55 h-105 md:w-65 md:h-130 lg:w-75 lg:h-150",
                      )}
                    >
                      {isActive ? (
                        <div className="relative w-full h-full flex items-center justify-center">

                          {/* CONTENT */}
                          <div
                            className="absolute overflow-hidden z-0"
                            style={{
                              top: "0.2%",
                              bottom: "2.2%",
                              left: "1.2%",
                              right: "7.2%",
                              borderRadius: "36px",
                            }}
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* FRAME */}
                          <Image
                            src="/assets/smart-scene/Apple Wrap.png"
                            alt="frame"
                            fill
                            className="object-contain z-10 pointer-events-none"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover grayscale"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* DESC */}
        <p className="text-center text-gray-500 mt-10 max-w-xl mx-auto text-sm">
          Save energy effortlessly with automated settings that power down unused appliances,
          reducing waste and lowering your energy costs every day.
        </p>

      </Container>
    </section>
  );
}