"use client";

import Link from "next/link";
import React from "react";

function Cards() {
  const cardData = [
    {
      title: "Get Help",
      description:
        "Explore our guides and step-by-step solutions tailored to every section of the system.",
      buttonText: "Visit Help Center",
    },
    {
      title: "Complaint",
      description:
        "Have a complaint? Talk to us about it and we will get right on it.",
      buttonText: "Send an Email",
    },
    {
      title: "Partnership",
      description:
        "Interested in working together? Let's discuss how we can collaborate and grow.",
      buttonText: "Send an Email",
    },
    {
      title: "Anti-Money Laundry",
      description:
        "Have a concern about a suspicious activity or transaction? Please report it here.",
      buttonText: "Send an Email",
    },
  ];

  return (
    <div className="bg-[#F2F0F3] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-9 mt-[-160px] ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 max-w-[505px] z-10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-[382px] ">
                    {card.description}
                  </p>
                  {card.buttonText === "Visit Help Center" ? (
                    <Link href="/help">
                      <button className="flex items-center space-x-2 text-[#042656] font-semibold text-sm ">
                        <span>{card.buttonText}</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                            stroke="#042656"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 12H20.33"
                            stroke="#042656"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        const contactForm = document.querySelector('#contact-form');
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center space-x-2 text-[#042656] font-semibold text-sm "
                    >
                      <span>{card.buttonText}</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                          stroke="#042656"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 12H20.33"
                          stroke="#042656"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
