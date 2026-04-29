"use client";

import Link from "next/link";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer>
      {/* Newsletter Section */}
      <div className="w-full px-10 py-8 bg-gradient-to-r from-[#4B2E83] to-[#020617] text-white rounded-t-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left flex-1">
          <Text variant="h3" weight="semibold" className="text-xl mb-2">
            Subscribe to the newsletter
          </Text>
          <Text variant="body" className="text-sm text-white/70">
            Stay updated with the latest Seamless updates and IoT news
          </Text>
        </div>

        <form
          onSubmit={handleNewsletterSubmit}
          className="flex items-center gap-3 w-full lg:w-auto min-w-[280px]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border border-white/30 px-4 py-2 rounded-md text-sm placeholder:text-white/50 outline-none focus:border-white transition-colors"
            required
          />
          <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="bg-white text-black px-6 py-2 text-sm font-medium rounded-md hover:bg-gray-200 whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
      </div>

      {/* Footer Info Section */}
      <div className="bg-gray-100 px-10 py-10">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
            {/* Logo */}
            <Image
              src="/assets/MODENA Seamless - Full Lockup Logo - Full Color 1.png"
              alt="MODENA Seamless"
              width={140}
              height={40}
              className="w-[140px] object-contain"
            />

            {/* Certifications */}
            <div className="flex items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
              {/* GDPR */}
              <div className="w-[60px] h-[30px] bg-gray-200 rounded cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center">
                GDPR
              </div>
              {/* CCPA */}
              <div className="w-[60px] h-[30px] bg-gray-200 rounded cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center">
                CCPA
              </div>
              {/* SOC2 */}
              <div className="w-[60px] h-[30px] bg-gray-200 rounded cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center">
                SOC2
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  pt-8 border-t border-gray-200">
            <Link
              href="/cookies"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Cookies Policy
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Terms and Conditions
            </Link>

            <div className="flex gap-6">
              <Text variant="caption" className="text-sm text-gray-400">
                Copyright © 2024 MODENA IoT. All Rights Reserved.
              </Text>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
