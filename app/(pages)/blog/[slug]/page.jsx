import React from "react";
import Header from "../../../_partials/Header";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-2",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-3",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-4",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-5",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-6",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg",
    date: "1st, August 2025",
    title: "5 Ways to Reduce Fees on International Transfers",
    description:
      "Most transfers arrive within minutes—no one wants their loved ones waiting.",
    author: "Yodepay",
    slug: "reduce-fees-international-transfers-7",
    content: `
      <p class="mb-8 text-base leading-relaxed">In today's interconnected world, Nigerian businesses have unprecedented opportunities to expand globally. However, international payments often present significant challenges that can hinder growth and efficiency.</p>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">The Challenges of Traditional International Payments:</h2>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Slow and Inefficient:</strong> Transfers can take days or even weeks to complete, causing delays in business operations.</li>
        <li class="text-base leading-relaxed"><strong>Expensive:</strong> High fees and unfavorable exchange rates can significantly impact your bottom line.</li>
        <li class="text-base leading-relaxed"><strong>Complex:</strong> Navigating different banking systems and regulations can be overwhelming and time-consuming.</li>
        <li class="text-base leading-relaxed"><strong>Lacking Transparency:</strong> Difficulty tracking payments and understanding the true cost of transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Belyfted: Your Partner in Seamless Global Transactions</h2>
      <p class="mb-6 text-base leading-relaxed">Belyfted offers comprehensive solutions designed specifically for Nigerian businesses looking to overcome these challenges:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Multi-Currency Accounts:</strong> Hold and manage funds in various currencies without the hassle of multiple bank accounts.</li>
        <li class="text-base leading-relaxed"><strong>Faster Payments:</strong> Enjoy quicker processing times that keep your business moving forward.</li>
        <li class="text-base leading-relaxed"><strong>Competitive Exchange Rates:</strong> Transparent and competitive rates that help you save money on every transaction.</li>
        <li class="text-base leading-relaxed"><strong>Simplified Processes:</strong> Intuitive platform that reduces paperwork and streamlines your workflow.</li>
        <li class="text-base leading-relaxed"><strong>Enhanced Security:</strong> Robust security measures to protect your financial transactions.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Unlocking Global Opportunities for Nigerian Businesses</h2>
      <p class="mb-6 text-base leading-relaxed">With Belyfted, you can:</p>
      <ul class="space-y-4 mb-8">
        <li class="text-base leading-relaxed"><strong>Expand your market reach:</strong> Easily conduct business with international partners and customers.</li>
        <li class="text-base leading-relaxed"><strong>Reduce costs:</strong> Lower transaction fees and better exchange rates mean more money in your pocket.</li>
        <li class="text-base leading-relaxed"><strong>Improve efficiency:</strong> Faster payments and simplified processes save time and resources.</li>
        <li class="text-base leading-relaxed"><strong>Enhance your reputation:</strong> Reliable and fast international payments build trust with global partners.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-6 mt-12">Join the Future of Global Payments in Nigeria</h2>
      <p class="mb-6 text-base leading-relaxed">Ready to transform your international payment experience? Visit the Belyfted website to learn more about our services and sign up for a free account.</p>
      
      <p class="text-base leading-relaxed mt-8">Let's break down borders and build global success, together.</p>
    `
  }
];

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white relative">
      <Header />
      
      {/* Hero Section */}
      <div className="relative max-w-[1230px] mx-auto pt-[152px] h-[940px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1230}
          height={740}
          className="object-cover w-full h-auto"
        />
      </div>
      
      {/* Blog Content */}
      <div className="max-w-5xl rounded-xl mx-auto px-8 py-12 bg-white mt-[-200px] relative z-10">
        {/* Title and Meta */}
        <div className="mb-[57px]">
          <h1 className="text-[32px] font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-gray-600 flex items-center gap-10">
            Written by: {post.author} <span className="font-medium">{post.date}</span>
          </p>
        </div>
        
        {/* Blog Content */}
        <div 
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
