export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Which Seamless products can be connected?",
    answer: "To see which MODENA products are Seamless, please check product features and specifications. Look for the Seamless logo or connectivity badge on the product page or packaging.",
  },
  {
    id: 2,
    question: "I've purchased a Seamless product. How do I connect it?",
    answer: "You can connect it via the Seamless app. Download from App Store or Google Play, create account, and follow the step-by-step pairing instructions for your specific device.",
  },
  {
    id: 3,
    question: "Do I need a hub or gateway for Seamless products?",
    answer: "No hub required. All Seamless products connect directly to your Wi-Fi network using standard 2.4GHz band. No additional hardware needed.",
  },
  {
    id: 4,
    question: "Is my home Wi-Fi compatible with Seamless?",
    answer: "Seamless works with any 2.4GHz Wi-Fi network (802.11b/g/n). Ensure your router broadcasts 2.4GHz SSID and disable 'Smart Connect' if using dual-band router.",
  },
  {
    id: 5,
    question: "How secure is Seamless connectivity?",
    answer: "Bank-grade 256-bit AES encryption, regular firmware updates, and local processing for privacy. No cloud dependency for basic functions.",
  },
  {
    id: 6,
    question: "Can I use Seamless with Alexa/Google Home?",
    answer: "Yes, full Matter protocol support. Works with Alexa, Google Home, Apple HomeKit, Samsung SmartThings, and 100+ other platforms.",
  },
  {
    id: 7,
    question: "What's the range of Seamless products?",
    answer: "Up to 100m in open space, 30-50m through walls. Wi-Fi extenders recommended for multi-story homes or metal structures.",
  },
  {
    id: 8,
    question: "Does Seamless work during internet outage?",
    answer: "Yes, local control mode allows basic functions (on/off, scenes) via Bluetooth/Wi-Fi Direct even when internet is down.",
  },
];

export const FAQ_PER_PAGE = 4;

