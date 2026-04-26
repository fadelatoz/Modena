"use client";

import { useState } from 'react';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Modal from '@/components/molecules/Modal';
import ContactForm from './ContactForm';

const CtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#EDE7F6] to-[#D1C4E9] rounded-2xl px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 hover:scale-[1.01] transition-all duration-300 group">
          
          {/* Left Image */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/cta-section/contact-us.png"
              alt="Contact Us"
              width={90}
              height={90}
              className="w-[90px] h-auto object-contain"
              priority
            />
          </div>

          {/* Middle Text */}
          <div className="flex-1 text-center lg:text-left">
            <Text variant="h3" weight="semibold" className="text-xl text-gray-900 mb-2 group-hover:text-black transition-colors">
              Ask Anything
            </Text>
            <Text variant="body" className="text-sm text-gray-500 max-w-md leading-relaxed">
              Have questions about Seamless? Our support team is ready to help you get started.
            </Text>
          </div>

          {/* Right Button */}
          <Button 
            variant="outline" 
            size="md" 
            className="bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:border-gray-300 px-6 py-2 text-sm font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </Container>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </section>
  );
};

export default CtaSection;

