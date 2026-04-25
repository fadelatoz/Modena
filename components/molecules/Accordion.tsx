"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="border border-border/50 rounded-medium overflow-hidden shadow-sm"
          initial={false}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
          >
            <Text variant="h4" weight="medium" className="text-foreground">
              {item.question}
            </Text>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name={ChevronDown} size={20} className="text-foreground/60" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-border/50">
                  <Text variant="body" className="text-foreground/80 leading-relaxed">
                    {item.answer}
                  </Text>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
export type { AccordionItem };

