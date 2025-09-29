"use client";

import React, { useState } from "react";
import Image from "next/image";

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Our payout process has been completely transformed. What used to take days now takes minutes, thanks to the speed and reliability of this system. It's a game-changer for our business.",
      name: "David Chen",
      title: "HOO, Tech Innovations",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 2,
      text: "The user-friendly interface made it easy for our entire team to get started. We love the automated features and the clear reporting of all our transactions. It's truly an efficient and reliable solution.",
      name: "Sarah Miller",
      title: "Finance Dir., Global Logistics",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 3,
      text: "Security was our biggest concern, and this platform exceeded all our expectations. The robust encryption and fraud detection give us complete peace of mind when making large-scale payouts. Highly recommended.",
      name: "James Roberts",
      title: "CTO, Secure FinTech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
    },
    {
      id: 4,
      text: "The customer support is outstanding. Any time we had a question, their team was quick to respond and incredibly helpful. The service is as reliable as the platform itself.",
      name: "Emily Carter",
      title: "Founder, E-commerce Solutions",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 4)) %
        Math.ceil(testimonials.length / 4),
    );
  };

  return (
    <section className="pt-[200px] pb-16 lg:pb-[200px] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-[80px]">
          <p className="text-sm text-center lg:text-left font-medium text-[#ABABAB] tracking-wider uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 text-center lg:text-left">
            Our customer reviews
          </h2>
          <p className="text-lg text-[#7C7C7C] text-center lg:text-left">
            See what our clients have to say about their experience with our
            payout system.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#F9F9F9] rounded-2xl py-8 px-6 hover:bg-gray-100 transition-colors duration-300 flex flex-col justify-between min-h-[280px]"
              >
                {/* Quote Text */}
                <p className="text-[#5E5E5E] leading-relaxed text-sm flex-grow">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-12">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
