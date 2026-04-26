import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SegmentedTab {
  key: string;
  label: string;
}

interface SegmentedTabsProps<T extends string> {
  tabs: SegmentedTab[];
  activeTab: T;
  onTabChange: (tabKey: T) => void;
  className?: ClassValue;
}

const SegmentedTabs = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
  className,
}: SegmentedTabsProps<T>) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeTabData = tabs.find(tab => tab.key === activeTab);
  const activeTabLabel = activeTabData?.label || '';

  return (
    <>
      {/* Desktop Segmented Tabs */}
      <div className={`${className} hidden md:flex gap-2 cursor-pointer bg-[#2E1A64] rounded-full p-1 shadow-lg`}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={clsx(
              'px-4 py-2 cursor-pointer rounded-full text-[16px] font-medium transition-all duration-200 flex-shrink-0',
              activeTab === tab.key
                ? 'bg-white text-[#2E1A64] shadow-md'
                : 'text-white hover:bg-white/20'
            )}
            onClick={() => onTabChange(tab.key as T)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative w-full">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#2E1A64] text-white shadow-lg hover:shadow-xl transition-all duration-200"
          aria-expanded={dropdownOpen}
          aria-label="Select tab"
        >
          <span className="font-medium truncate">{activeTabLabel}</span>
          <span className={clsx(
            'ml-2 transition-transform duration-200',
            dropdownOpen && 'rotate-180'
          )}>
            ▼
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                onClick={() => {
                  onTabChange(tab.key as T);
                  setDropdownOpen(false);
                }}
                className="px-5 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 text-base font-medium first:rounded-t-xl last:rounded-b-xl"
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SegmentedTabs;

