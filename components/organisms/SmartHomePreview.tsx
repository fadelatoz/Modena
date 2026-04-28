"use client";

import React, { useCallback, useState } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import SegmentedTabs, { SegmentedTab } from '@/components/atoms/SegmentedTabs';
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
    image: "/assets/smart-scene/smart_mobile.png",
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
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const activeRoom = ROOMS[activeRoomIndex];

  const scrollToRoom = useCallback((roomKey: string) => {
    const index = ROOMS.findIndex(room => room.key === roomKey);
    if (index >= 0) {
      setActiveRoomIndex(index);
    }
  }, []);

  const goToRoom = useCallback((nextIndex: number) => {
    const total = ROOMS.length;
    setActiveRoomIndex((nextIndex + total) % total);
  }, []);

  const handlePrevRoom = useCallback(() => {
    goToRoom(activeRoomIndex - 1);
  }, [activeRoomIndex, goToRoom]);

  const handleNextRoom = useCallback(() => {
    goToRoom(activeRoomIndex + 1);
  }, [activeRoomIndex, goToRoom]);

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
      <section className="relative min-h-screen overflow-hidden md:hidden">
        <Image
          src={activeRoom.image}
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-start pt-10 px-5">
          <h2 className="text-white text-[38px] font-semibold leading-tight text-center max-w-[320px]">
            Connect to a
            <br />
            True Smart Home
          </h2>

          <p className="text-white/80 text-[14px] text-center max-w-[300px] mt-4 leading-6">
            Discover how our solutions can transform your space into a smarter home.
          </p>

          <div className="relative mt-10 w-[290px] h-[600px]">
            <div
              className="absolute overflow-hidden z-10"
              style={{
                top: "5.8%",
                bottom: "5.8%",
                left: "6.8%",
                right: "6.8%",
                borderRadius: "38px",
              }}
            >
            

              {activeRoom.hotspots.map((hotspot, index) => (
                <button
                  key={index}
                  className="absolute w-8 h-8 rounded-full bg-[#6C4CF1] flex items-center justify-center shadow-lg z-30"
                  style={{
                    top: hotspot.top,
                    left: hotspot.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => setOpenModal(true)}
                >
                  <Image
                    src="/assets/seamless-icon.gif"
                    alt=""
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

      

            <button
              onClick={handlePrevRoom}
              className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center"
              aria-label="Previous room"
            >
              ‹
            </button>

            <button
              onClick={handleNextRoom}
              className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center"
              aria-label="Next room"
            >
              ›
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-[240px]">
              <div className="flex items-center rounded-full bg-[#2E1A64] p-1 shadow-lg">
                {ROOMS.map((room) => (
                  <button
                    key={room.key}
                    onClick={() => scrollToRoom(room.key)}
                    className={`flex-1 rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
                      activeRoom.key === room.key
                        ? 'bg-white text-[#2E1A64]'
                        : 'text-white'
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartHomePreview;
