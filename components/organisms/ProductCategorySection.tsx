"use client";

import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';


const ProductCategorySection = () => {
    const ref = useRef(null);

    const handleEnter = () => {
        gsap.to(ref.current, {
          scale: 1.04,            // jangan terlalu besar
          y: -6,                  // naik dikit (biar floating)
          z: 120,                 // 🔥 ini kunci: dalem banget
          rotateX: 6,
          rotateY: -8,
          transformPerspective: 1000, // 🔥 wajib biar 3D kerasa
          boxShadow: "0 40px 120px rgba(0,0,0,0.45)",
          duration: 0.5,
          ease: "power4.out",
        });
      };
      
      const handleLeave = () => {
        gsap.to(ref.current, {
          scale: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
          duration: 0.4,
          ease: "power3.out",
        });
      };
  return (
    <section className="py-20 bg-linear-to-b pl-10 pr-10 from-[#0F172A] via-[#111827] to-[#0F172A]">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">

{/* LEFT BIG CARD */}
<div      
className="lg:col-span-1 cursor-pointer lg:row-span-2 min-h-162.75 rounded-2xl overflow-hidden relative p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
  <Image
  ref={ref}
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
    src="/assets/product-category/Homepage_Product Category_Smart Devices 4.png"
    alt="Smart Home Hub"
    fill
    className="object-cover cursor-pointer"
  />
  <div className="relative z-10 flex flex-col h-full justify-between">
    <div>
      <h3 className="text-2xl font-semibold mb-3">Smart Home Device</h3>
      <p className="text-sm text-white/80 mb-6">
        Simplify your life by providing seamless automation for your home.
      </p>
    </div>
    <button className="text-sm font-medium">Discover More →</button>
  </div>
</div>

{/* COOKING */}
<div className="lg:col-span-2 rounded-2xl p-6 bg-gradient-to-r from-[#6C4CF1] to-[#8E6CFF] text-white relative">
  <h3 className="text-lg font-semibold mb-2">Cooking</h3>
  <p className="text-sm text-white/80 mb-4">Cook with ease and precision</p>
  <button className="text-sm">Discover more</button>
  <Image src="/assets/categories/cooking.png" alt="" width={120} height={120} className="absolute right-4 bottom-0" />
</div>

{/* HVAC */}
<div className="lg:col-span-1 rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white relative">
  <h3 className="text-lg font-semibold mb-2">HVAC</h3>
  <p className="text-sm text-white/80 mb-4">Heating & ventilation</p>
  <button className="text-sm">Discover More</button>
  <Image src="/assets/categories/climate.png" alt="" width={100} height={100} className="absolute right-4 bottom-0" />
</div>

{/* CLEANING */}
<div className="rounded-2xl p-6 bg-pink-200 text-black">
  <h3 className="font-semibold mb-2">Cleaning</h3>
  <p className="text-sm mb-4">Keep your home spotless</p>
  <button className="text-sm">Discover More</button>
</div>

{/* COOLING */}
<div className="rounded-2xl p-6 bg-blue-200 text-black">
  <h3 className="font-semibold mb-2">Cooling</h3>
  <p className="text-sm mb-4">Smart AC integration</p>
  <button className="text-sm">Discover More</button>
</div>

{/* COMING SOON */}
<div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/20 text-white flex flex-col items-center justify-center text-center">
  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4">
    ★
  </div>
  <h3 className="font-semibold mb-2">And more is coming your way.</h3>
</div>

</div>
    </section>
  );
};

export default ProductCategorySection;

