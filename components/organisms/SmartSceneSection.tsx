"use client";

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';

const SCENE_IMAGES = [
  '/assets/smart-scene/scene-1.png',
  '/assets/smart-scene/scene-1.png',
  '/assets/smart-scene/scene-1.png',
  '/assets/smart-scene/scene-1.png',
  '/assets/smart-scene/scene-1.png',
];

export default function SmartSceneSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    containScroll: 'keepSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(2);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const getDiff = (index: number) => {
    const len = SCENE_IMAGES.length;
    const diff = index - selectedIndex;
    const alt = diff > 0 ? diff - len : diff + len;
    return Math.abs(diff) < Math.abs(alt) ? diff : alt;
  };
  const getStyle = (diff: number) => {
    if (diff === 0) {
      return 'scale-100 opacity-100 z-20';
    }
  
    // NEAR
    if (Math.abs(diff) === 1) {
      return clsx(
        'scale-90 opacity-70 z-10',
        diff < 0
          ? '[transform:rotateY(-18deg)]'   // 🔥 kiri → miring ke kiri
          : '[transform:rotateY(28deg)]'    // 🔥 kanan → miring ke kanan
      );
    }
  
    // FAR
    if (Math.abs(diff) === 2) {
      return clsx(
        'scale-80 opacity-50 z-0',
        diff < 0
          ? '[transform:rotateY(-28deg)]'
          : '[transform:rotateY(38deg)]'
      );
    }
  
    return 'opacity-0';
  };
  return (
    <section className="py-24 bg-[#FFFFFF] overflow-hidden">
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
        <div className="w-full max-w-[1200px] mx-auto [perspective:1600px]">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex justify-center items-center gap-4">

              {SCENE_IMAGES.map((src, i) => {
                const diff = getDiff(i);
                const isActive = diff === 0;

                console.log(isActive)

                return (
                  <div
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={clsx(
                      'flex-none w-68 h-150.5 relative transition-all duration-500',
                      getStyle(diff)
                    )}
                  >

                    {/* ACTIVE (IPHONE) */}
                    {isActive ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src="/assets/smart-scene/Apple Wrap.png"
                          alt=""
                          fill
                          className="object-contain z-10"
                        />

                        <div className="absolute inset-[6%] rounded-2xl overflow-hidden">
                          <Image src={src} alt="" fill className="object-cover" />
                        </div>
                      </div>
                    ) : (
                      /* SIDE CARD */
                      <div className="w-full h-full rounded-[18px] overflow-hidden bg-white/30 backdrop-blur-md">
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

        {/* DESC */}
        <p className="text-center text-gray-500 mt-10 max-w-xl mx-auto text-sm">
          Save energy effortlessly with automated settings that power down unused appliances,
          reducing waste and lowering your energy costs every day.
        </p>

      </Container>
    </section>
  );
}