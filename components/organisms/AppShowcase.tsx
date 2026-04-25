"use client";

import { useEffect, useRef } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phoneRef.current) return;
  
    // FLOATING PHONE
    gsap.to(phoneRef.current, {
      y: -15,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  
    // CARDS ANIMATION
    const cards = gsap.utils.toArray(".feature-card");
  
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  return (
    <section className="py-20 bg-[#F4EAFA] relative overflow-hidden" ref={containerRef}>
      <Container maxWidth="2xl">
        <div className="text-center mb-16 space-y-4">
          <Text variant="h2" weight="semibold" className="text-gray-900">
            Control at Your Fingertips: MODENA Seamless App
          </Text>
          <Text variant="body" className="text-gray-500 max-w-2xl mx-auto">
            Seamless control of your smart home from anywhere, anytime.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Button variant="outline" size="lg" className="border-gray-200">
              App Store
            </Button>
            <Button variant="outline" size="lg" className="border-gray-200">
              Play Store
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div 
            ref={phoneRef}
            className="phone-mockup will-change-transform"
          >
            <Image
              src="/assets/App Showcase.png"
              alt="MODENA Seamless App"
              width={1296}
              height={518}
              className="rounded-3xl border border-white/20 max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppShowcase;

