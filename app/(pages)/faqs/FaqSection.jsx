"use client"


import React, { useState } from 'react';
import Link from 'next/link';

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  // FAQ data mapping structure
  const faqData = [
    {
      id: 1,
      question: "Is YodePay secure?",
      answer: "Yes, YodePay uses bank-level encryption and security protocols to protect your financial information. We comply with PCI DSS standards and use multi-factor authentication to ensure your transactions are safe and secure."
    },
    {
      id: 2,
      question: "Is YodePay secure?",
      answer: "Absolutely. YodePay employs advanced security measures including end-to-end encryption, fraud detection systems, and regular security audits. Your personal and financial data is protected with the highest industry standards."
    },
    {
      id: 3,
      question: "Is YodePay secure?",
      answer: "Security is our top priority at YodePay. We use SSL encryption, tokenization for sensitive data, and maintain SOC 2 compliance. Our platform is regularly tested and monitored to ensure maximum protection for all users."
    },
    {
      id: 4,
      question: "Is YodePay secure?",
      answer: "YodePay implements multiple layers of security including biometric authentication, real-time transaction monitoring, and secure API endpoints. We partner with leading security firms to continuously enhance our protection measures."
    },
    {
      id: 5,
      question: "Is YodePay secure?",
      answer: "Yes, YodePay is built with security-first architecture. We use advanced encryption algorithms, secure cloud infrastructure, and follow strict data protection regulations to safeguard your information and transactions."
    },
    {
      id: 6,
      question: "Is YodePay secure?",
      answer: "YodePay maintains the highest security standards with features like two-factor authentication, encrypted data transmission, and compliance with international financial regulations. Your trust and security are our foundation."
    },
    {
      id: 7,
      question: "Is YodePay secure?",
      answer: "Our security framework includes advanced threat detection, secure payment processing, and regular penetration testing. YodePay is designed to provide you with peace of mind for all your financial transactions."
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-[1332px] mx-auto pt-[68px] lg:pb-[198px] pb-[80px] px-6 xl:px-0  min-h-screen">
      <div className="space-y-4">
        {faqData.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-[10px] border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleExpanded(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>
              <div className="ml-4 flex-shrink-0">
                {expandedItems[item.id] ? (
                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.4987 44.9154C35.7279 44.9154 44.9154 35.7279 44.9154 24.4987C44.9154 13.2695 35.7279 4.08203 24.4987 4.08203C13.2695 4.08203 4.08203 13.2695 4.08203 24.4987C4.08203 35.7279 13.2695 44.9154 24.4987 44.9154Z" stroke="#042656" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.332 24.5H32.6654" stroke="#042656" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                ) : (
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4987 44.9154C35.7279 44.9154 44.9154 35.7279 44.9154 24.4987C44.9154 13.2695 35.7279 4.08203 24.4987 4.08203C13.2695 4.08203 4.08203 13.2695 4.08203 24.4987C4.08203 35.7279 13.2695 44.9154 24.4987 44.9154Z" stroke="#042656" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.332 24.5H32.6654" stroke="#042656" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 32.6654V16.332" stroke="#042656" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                )}
              </div>
            </button>
            
            {expandedItems[item.id] && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <div className="pt-4 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='mt-[68px] flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between text-left lg:items-center items-start justify-start bg-[#FEF5E7] p-6 rounded-xl'>
        <div>
        <h2 className='text-[#021127] font-bold'>Still have questions?</h2>
        <p className='text-sm text-[#5A5A5A]'>Can’t find the answer you’re looking for? Please contact our friendly team.</p>
        </div>
        <Link href="/contact">
        <button className='bg-[#F39C12] text-white px-4 py-3 rounded-[16px]'>Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;