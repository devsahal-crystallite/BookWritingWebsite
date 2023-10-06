import React, { useState } from 'react';
import Link from 'next/link';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('s7'); // Set the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <ul className="flex max-w-7xl mx-auto" role="tablist">
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s1')}
          role="tab"
          aria-controls="s1"
          aria-selected={activeTab === 's1' ? 'true' : 'false'}
        >
          Fiction
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s2')}
          role="tab"
          aria-controls="s2"
          aria-selected={activeTab === 's2' ? 'true' : 'false'}
        >
          Non Fiction
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's3' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s3')}
          role="tab"
          aria-controls="s3"
          aria-selected={activeTab === 's3' ? 'true' : 'false'}
        >
          Biography
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's4' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s4')}
          role="tab"
          aria-controls="s4"
          aria-selected={activeTab === 's4' ? 'true' : 'false'}
        >
          Informative
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's5' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s5')}
          role="tab"
          aria-controls="s5"
          aria-selected={activeTab === 's5' ? 'true' : 'false'}
        >
          Autobiography
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's6' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s6')}
          role="tab"
          aria-controls="s6"
          aria-selected={activeTab === 's6' ? 'true' : 'false'}
        >
          Memoir
        </a>
      </li>
      <li>
        <a
          className={`py-2 px-4 rounded-full cursor-pointer ${
            activeTab === 's7' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('s7')}
          role="tab"
          aria-controls="s7"
          aria-selected={activeTab === 's7' ? 'true' : 'false'}
        >
          Children Book
        </a>
      </li>
    </ul>
  );
};

export default TabNavigation;
