import Image from "next/image";
import React from "react";
import Link from "next/link";

function BlogSection() {
  // Sample blog data - you can replace this with your actual data
  const blogPosts = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756821079/b4614c90da2d5ce698e588b1229a666f1da1f050_fefri8.jpg", // Replace with your actual image
      date: "1st, August 2025",
      title: "5 Ways to Reduce Fees on International Transfers",
      description:
        "Most transfers arrive within minutes—no one wants their loved ones waiting.",
      author: "Yodepay",
      slug: "reduce-fees-international-transfers",
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
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-7 mb-12">
        <h2 className="lg:text-4xl text-3xl font-bold ">Blog</h2>
        <hr className="w-full border-[#D9D9D9]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[22px] gap-y-10">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <div
              className="relative bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-[400px]"
            >
            {/* Background Image covering entire card */}
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300 "
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-[#00000080] bg-opacity-90 rounded-lg"></div>

            {/* Arrow Icon */}
            <div className="absolute top-4 right-4  group-hover:opacity-100 transition-opacity duration-300 z-10">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="27.1934"
                  cy="26.8066"
                  r="22.8066"
                  fill="#D9D9D9"
                  fill-opacity="0.7"
                />
                <path
                  d="M25.1836 20.043L33.7628 19.7483L34.0575 28.3275"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.2852 26.6836L33.6453 19.871"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.1602 32.1719L24.5282 29.6354"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* Blog Content overlaid on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm text-gray-200 mb-3">{post.date}</p>

              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>

              <p className="text-sm text-gray-200">
                Written by:{" "}
                <span className="text-white font-medium">{post.author}</span>
              </p>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
