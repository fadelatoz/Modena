"use client";

import { useState } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import SegmentedTabs from '@/components/atoms/SegmentedTabs';
import { FeatureItem, FEATURES, TABS, TabKey } from '@/lib/featureGridConstants';
import FeatureCard from '../atoms/FeatureCard';

const FeatureGrid = () => {
  const [activeTab, setActiveTab] = useState<'convenience' | 'productivity' | 'sustainability' | 'security'>('convenience');

  const currentFeatures = FEATURES[activeTab as keyof typeof FEATURES];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Make Your Life Easier with MODENA Seamless IoT
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Transform everyday tasks into seamless experiences with intelligent automation
          </p>
        </div>

        <div className="max-w-8/12 mx-auto mb-16">
          <SegmentedTabs 
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{currentFeatures.map((feature: FeatureItem, index: number) => (
            <FeatureCard key={`${activeTab}-${index}`} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

