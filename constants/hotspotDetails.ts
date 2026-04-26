interface HotspotItem {
  title: string;
  description: string;
  image: string;
}

export const HOTSPOT_DETAILS: Record<string, HotspotItem[]> = {
  living: [
    {
      title: "Seeing what's happening at home",
      description: "This feature helps to energize you by showing the real time activity around the home. Stay connected with your loved ones.",
      image: "/assets/product-preview/ac_modena.png",
    },
    {
      title: "Smart Monitoring",
      description: "Track activity in real time with intelligent motion detection and instant notifications.",
      image: "/assets/product-preview/ac_modena.png",
    },
    {
      title: "Privacy First",
      description: "End-to-end encryption ensures your footage stays secure and private.",
      image: "/assets/product-preview/ac_modena.png",
    }
  ],
  kitchen: [
    {
      title: "Smart Thermostat",
      description: "Automatically adjust temperature based on occupancy and preferences. Save energy while staying comfortable.",
      image: "/assets/product-preview/cctv.png",
    },
    {
      title: "Appliance Control",
      description: "Remote control ovens, fridges, and appliances from anywhere. Never forget to turn off the stove again.",
      image: "/assets/product-preview/cctv.png",
    }
  ],
  bathroom: [
    {
      title: "Water Leak Sensor",
      description: "Instant alerts for leaks or flooding. Protect your home from water damage before it happens.",
      image: "/assets/product-preview/cctv.png",
    },
    {
      title: "Humidity Monitor",
      description: "Maintain optimal humidity levels to prevent mold and ensure comfort.",
      image: "/assets/product-preview/cctv.png",
    }
  ]
};

