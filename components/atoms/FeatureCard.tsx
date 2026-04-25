import Image from 'next/image';


import { FeatureItem } from '@/lib/featureGridConstants';


const FeatureCard = ({ title, image }: FeatureItem) => (
  <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    <div className="absolute top-0 left-0 p-6">
      <h3 className="text-white text-sm font-medium max-w-[80%] drop-shadow-lg leading-tight">
        {title}
      </h3>
    </div>

  </div>
);

export default FeatureCard;

