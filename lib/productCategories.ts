export interface ProductCategory {
  title: string;
  description?: string;
  image?: string;
  variant: 'image' | 'gradient' | 'light';
  size?: 'normal' | 'large';
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Smart Home Hub",
    description: "Central control for all your devices",
    variant: "image",
    image: "/assets/categories/hub.png",
    size: "large",
  },
  {
    title: "Cooking",
    description: "Smart kitchen appliances",
    variant: "gradient",
    image: "/assets/categories/cooking.png",
  },
  {
    title: "Lighting",
    description: "Ambient & functional lighting",
    variant: "light",
    image: "/assets/categories/lighting.png",
  },
  {
    title: "Security",
    description: "Cameras & smart locks",
    variant: "image",
    image: "/assets/categories/security.png",
  },
  {
    title: "Climate",
    description: "Thermostats & air quality",
    variant: "gradient",
    image: "/assets/categories/climate.png",
  },
  {
    title: "Energy",
    description: "Smart plugs & monitoring",
    variant: "light",
  },
];

