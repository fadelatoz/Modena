import React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import HotspotCard from '@/components/molecules/HotspotCard';

interface HotspotItem {
  title: string;
  description: string;
  image: string;
}

interface HotspotSliderProps {
  items: HotspotItem[];
}

const HotspotSlider: React.FC<HotspotSliderProps> = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">

      {/* LEFT ARROW */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-all"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-all"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] flex justify-center px-4"
            >
              <HotspotCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === selectedIndex ? 'bg-white scale-125 shadow-lg' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HotspotSlider;

