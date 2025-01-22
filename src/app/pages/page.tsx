'use client'
import React, { useState } from 'react';
import Common from '@/Components/Common';

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { question: 'How do we serve food?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
    { question: 'How can we get in touch with you?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
    { question: 'How is our food quality?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
    { question: 'What will be delivered? And when?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
    { question: 'How do we give home delivery?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
    { question: 'Is this restaurant 24 hours open?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis modi ullamcorper.' },
  ];

  return (
    <div className="mb-[50px]">
      {/* Common Header Section */}
      <Common title="FAQ page" subtitle="FAQ" />

      {/* FAQ Section */}
      <div className="mt-[50px] text-center">
        <h1 className="text-4xl font-bold">Questions Look Here</h1>
        <p className="font-normal text-[#4F4F4F] mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-sm"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg font-medium">{item.question}</h2>
              <span
                className={`transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
