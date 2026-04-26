"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import SegmentedTabs, { SegmentedTab } from '@/components/atoms/SegmentedTabs';
import useEmblaCarousel from 'embla-carousel-react';
import HotspotModal from '@/components/molecules/HotspotModal';
import HotspotSlider from '@/components/organisms/HotspotSlider';
import { HOTSPOT_DETAILS } from '@/constants/hotspotDetails';

interface Hotspot {
  top: string;
  left: string;
}

interface Room extends SegmentedTab {
  image: string;
  hotspots: Hotspot[];
}

const ROOMS: Room[] = [
  {
    key: "living",
    label: "Living Room",
    image: "/assets/smart-scene/scene-11.png",
    hotspots: [
      { top: "52%", left: "26%" },
      { top: "53%", left: "33%" },
      { top: "31%", left: "64%" },
      { top: "41%", left: "74%" },
    ],
  },
  {
    key: "kitchen", 
    label: "Kitchen",
    image: "/assets/smart-scene/scene-11.png",
    hotspots: [
      { top: "30%", left: "75%" },
      { top: "55%", left: "45%" },
      { top: "80%", left: "80%" },
    ],
  },
  {
    key: "bathroom",
    label: "Bathroom",
    image: "/assets/smart-scene/scene-11.png",
    hotspots: [
      { top: "20%", left: "85%" },
      { top: "60%", left: "25%" },
      { top: "75%", left: "70%" },
    ],
  },
];

const SmartHomePreview = () => {
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: true, 
    dragFree: false 
  });
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const activeRoom = ROOMS[activeRoomIndex];

  // Sync mobile slider state
  useEffect(() => {
    if (!mobileEmblaApi) return;

    const onSelect = () => {
      setActiveRoomIndex(mobileEmblaApi.selectedScrollSnap());
    };
    
    mobileEmblaApi.on('select', onSelect);
    onSelect();

    return () => {
      if (mobileEmblaApi) {
        mobileEmblaApi.off('select', onSelect);
      }
    };
  }, [mobileEmblaApi]);

  const scrollToRoom = useCallback((roomKey: string) => {
    const index = ROOMS.findIndex(room => room.key === roomKey);
    mobileEmblaApi?.scrollTo(index);
  }, [mobileEmblaApi]);

  console.log(activeRoom)

  return (
    <>
      <HotspotModal open={openModal} onClose={() => setOpenModal(false)}>
        <HotspotSlider items={HOTSPOT_DETAILS[activeRoom.key] || []} />
      </HotspotModal>
      
      {/* DESKTOP */}
      <div className="hidden md:block">
  <section className="relative py-28 overflow-hidden">


    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/Daily activity product.png"
        alt="Smart Home"
        fill
        className="object-cover"
        priority
      />
    </div>

    <div className="absolute inset-0 bg-black/50 z-10" />

    <Container className="relative z-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <Text variant="h2" weight="semibold" className="text-white mb-4">
          Connect to a True Smart Home
        </Text>
        <Text variant="body" className="text-gray-300 max-w-2xl mx-auto">
          Interactive preview of your connected devices across every room
        </Text>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">

        <div className="relative rounded-[40px] border-10 border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">

          <Image
            src={"/assets/Daily activity product.png"}
            alt="Room Preview"
            width={1200}
            height={600}
            className="w-full object-cover"
          />


              {activeRoom.hotspots.map((hotspot, index) => (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 from-[#6C4CF1]
                   to-[#3C218D] flex items-center justify-center text-white 
                   cursor-pointer hover:scale-125 active:scale-95 transition-all duration-200 z-30  "
                  style={{
                    top: hotspot.top,
                    left: hotspot.left,
                  }}
                  onClick={() => {
                    setSelectedHotspot(index);
                    setOpenModal(true);
                  }}                >
            <Image
                src="/assets/seamless-icon.gif"
                alt="hotspot"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                />                
                </div>
            ))}


        </div>

      </div>

      {/* TABS */}
      <div className="mt-12 flex justify-center">
        <SegmentedTabs 
          tabs={ROOMS}
          activeTab={activeRoom.key}
          onTabChange={scrollToRoom}
          className="inline-flex items-center gap-1 p-1 rounded-full bg-white/50 backdrop-blur-md shadow-lg"        />
      </div>

    </Container>
  </section>
</div>
      {/* MOBILE FULL PAGE SLIDER */}
      <section className="md:hidden relative h-screen overflow-hidden">
        <div ref={mobileEmblaRef} className="h-full">
          <div className="flex h-full">
            {ROOMS.map((room, index) => (
              <div key={room.key} className="flex-none w-screen h-screen relative">
                {/* Background - INSIDE SLIDE */}
                <Image
                  src={room.image}
                  alt={room.label}
                  fill
                  sizes="100vw"
                  className="object-cover brightness-75"
                  priority={index === 0}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                
                {/* Content - INSIDE SLIDE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 pb-32 z-20 text-center text-white gap-8">
                  {/* Header */}
                  <div>
                    <Text variant="h2" weight="bold" className="text-3xl mb-4 drop-shadow-2xl leading-tight">
                      {room.label}
                    </Text>
                    <Text variant="body-lg" className="text-gray-200 max-w-md mx-auto opacity-90 drop-shadow-lg">
                      Smart devices in action
                    </Text>
                  </div>
                  
                  {/* Phone Mockup */}
                  <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden border-8 border-black/90 shadow-2xl bg-black drop-shadow-2xl z-30">
                    <Image
                      src={room.image}
                      alt={`${room.label} devices`}
                      fill
                      className="object-cover"
                    />
                    {room.hotspots.map((hotspot, hotspotIndex) => (
                      <div
                        key={hotspotIndex}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#6C4CF1] rounded-full flex items-center justify-center text-xs shadow-lg border-2 border-white/50 cursor-pointer hover:scale-125 hover:shadow-xl transition-all duration-200 z-40"
                        style={{
                          top: hotspot.top,
                          left: hotspot.left,
                        }}
                      >
                        M
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FIXED Selector - OUTSIDE slider */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xs z-50 pointer-events-none md:hidden">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-1 shadow-2xl pointer-events-auto">
            <SegmentedTabs 
              tabs={ROOMS}
              activeTab={ROOMS[activeRoomIndex].key}
              onTabChange={scrollToRoom}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartHomePreview;
