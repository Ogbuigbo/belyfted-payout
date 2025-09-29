import React from "react";

function DeveloperResourcesSection() {
  const resources = [
    {
      title: "Full API Docs",
      description: "Comprehensive reference for all endpoints and parameters.",
    },
    {
      title: "SDKs & Libraries",
      description: "Download official SDKs for your favorite languages",
    },
    {
      title: "Postman Collection",
      description: "Get started quickly with our pre-built postman collection.",
    },
    {
      title: "Sandbox Environment",
      description: "Test your integrations in our secure, mock environment",
    },
  ];

  return (
    <div className="bg-[#E6E9EE] py-[71px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[38px] text-3xl font-bold text-gray-900 md:mb-10 mb-8">
            Developer Resources
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-5 shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-[#303032] mb-4">
                {resource.title}
              </h3>
              <p className="text-gray-600 ">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeveloperResourcesSection;
