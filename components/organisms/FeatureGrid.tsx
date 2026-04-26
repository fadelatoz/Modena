"use client";

import React, { useCallback, useEffect, useState } from 'react';

import SegmentedTabs from '@/components/atoms/SegmentedTabs';
import useEmblaCarousel from 'embla-carousel-react';
import { FEATURES, TABS } from '@/lib/featureGridConstants';
import FeatureCard from '../atoms/FeatureCard';

const FeatureGrid = () => {
  const [activeTab, setActiveTab] = useState<'convenience' | 'productivity' | 'sustainability' | 'security'>('convenience');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center', dragFree: true });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const currentFeatures = FEATURES[activeTab as keyof typeof FEATURES];

  // Reset carousel when tab changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ loop: false, align: 'center', dragFree: true });
      emblaApi.scrollTo(0);
    }
  }, [activeTab, emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[42px] md:text-4xl font-semibold text-gray-900">
            Make Your Life Easier with MODENA Seamless IoT
          </h2>
          <p className="text-gray-500 text-[20px] max-w-2xl mx-auto">
            Transform everyday tasks into seamless experiences with intelligent automation
          </p>
        </div>

        <div className="max-w-8/12 w-fit mx-auto mb-16">
          <SegmentedTabs 
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFeatures.map((feature, index) => (
            <FeatureCard key={`${activeTab}-${index}`} {...feature} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex -m-2">
              {currentFeatures.map((feature, index) => (
                <div key={`${activeTab}-${index}`} className="flex-none w-[85%] px-2">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm font-medium shadow-lg hover:bg-black transition-all duration-200 md:hidden z-10"
            aria-label="Previous feature"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm font-medium shadow-lg hover:bg-black transition-all duration-200 md:hidden z-10"
            aria-label="Next feature"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

