import Image from 'next/image';
import React from 'react';

interface HotspotCardProps {
  title: string;
  description: string;
  image: string;
}

const HotspotCard: React.FC<HotspotCardProps> = ({ title, description, image }) => {
  return (
    <div className="w-70 h-95 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center text-white shadow-2xl ">

      {/* IMAGE */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image
          src={image || '/placeholder-product.png'}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-3 leading-tight">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-base text-white/90 leading-relaxed line-clamp-3">
        {description}
      </p>

    </div>
  );
};

export default HotspotCard;