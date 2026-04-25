import React from 'react';

export interface SegmentedTab {
  key: string;
  label: string;
}

interface SegmentedTabsProps<T extends string> {
  tabs: SegmentedTab[];
  activeTab: T;
  onTabChange: (tabKey: T) => void;
  className?: string;
  containerBg?: string;
  activeBg?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
}

const SegmentedTabs = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  containerBg = 'bg-white/90',
  activeBg = 'bg-white',
  activeTextColor = 'text-[#6C4CF1]',
  inactiveTextColor = 'text-gray-500'
}: SegmentedTabsProps<T>) => {
  return (
    <div className={`backdrop-blur-sm rounded-full flex p-1 shadow-xl ${containerBg} ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`
            px-4 py-2 cursor-pointer font-bold rounded-full text-sm transition-all duration-200 mx-1
            ${activeTab === tab.key 
              ? `${activeBg} ${activeTextColor} shadow-md scale-105` 
              : `${inactiveTextColor} hover:bg-white/50 hover:scale-[1.02]`
            }
          `}
          onClick={() => onTabChange(tab.key as T)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedTabs;

