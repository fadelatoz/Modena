"use client";

import { useState } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import SegmentedTabs, { SegmentedTab } from '@/components/atoms/SegmentedTabs';

interface Hotspot {
  top: string;
  left: string;
}

interface Room extends SegmentedTab {
  hotspots: Hotspot[];
}

const ROOMS: Room[] = [
  {
    key: "living",
    label: "Living Room",
    hotspots: [
      { top: "38%", left: "10%" },
      { top: "45%", left: "65%" },
      { top: "70%", left: "35%" },
    ],
  },
  {
    key: "kitchen", 
    label: "Kitchen",
    hotspots: [
      { top: "30%", left: "75%" },
      { top: "55%", left: "45%" },
      { top: "80%", left: "80%" },
    ],
  },
  {
    key: "bathroom",
    label: "Bathroom",
    hotspots: [
      { top: "20%", left: "85%" },
      { top: "60%", left: "25%" },
      { top: "75%", left: "70%" },
    ],
  },
];

const SmartHomePreview = () => {
  const [activeRoom, setActiveRoom] = useState<Room>(ROOMS[0]);

  return (
    <section className="relative py-28 overflow-hidden">
  
    {/* BACKGROUND IMAGE */}
    <Image
      src="/assets/Daily activity product.png"
      alt="Smart Home"
      fill
      className="object-cover"
      priority
    />
  
    {/* OVERLAY */}
    <div className="absolute inset-0 " />
  
    {/* CONTENT */}
    <div className="relative z-10">
      <Container>
  
        {/* HEADER */}
        <div className="text-center mb-16">
          <Text variant="h2" weight="semibold" className="text-white mb-4">
            Connect to a True Smart Home
          </Text>
          <Text variant="body" className="text-gray-300 max-w-2xl mx-auto">
            Interactive preview of your connected devices across every room
          </Text>
        </div>
  
        {/* INTERACTIVE AREA */}
        <div className="relative w-full aspect-video">
  
          {/* HOTSPOTS */}
          {activeRoom.hotspots.map((hotspot, index) => (
                <div
                    key={index}
                    className="absolute w-10 h-10 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                    style={{
                    top: hotspot.top,
                    left: hotspot.left,
                    }}
                >
                    <Image
                    src="/assets/seamless-icon.gif"
                    alt="Hotspot"
                    width={80}
                    height={80}
                    className="object-contain"
                    />
                </div>
                ))}
  
          {/* TABS */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <SegmentedTabs 
              tabs={ROOMS}
              containerBg="bg-white/90 backdrop-blur-md"
              activeBg="bg-white"
              activeTextColor="text-[#3C218D]"
              activeTab={activeRoom.key as any}
              onTabChange={(key) => {
                const room = ROOMS.find(r => r.key === key) as Room;
                setActiveRoom(room);
              }}
            />
          </div>
  
        </div>
  
      </Container>
    </div>
  </section>
  );
};

export default SmartHomePreview;

