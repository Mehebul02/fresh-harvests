import { useState } from "react";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { key: "All", label: "All" },
    { key: "Fruits", label: "Fruits" },
    { key: "Vegetables", label: "Vegetables" },
    { key: "Salad", label: "Salad" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Tab Buttons */}
      <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-lg text-gray-600 font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-green-600 text-white shadow-md"
                : "hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-6 p-6 w-full max-w-md bg-white rounded-lg shadow-lg text-center">
        {activeTab === "All" && <p className="text-gray-700">Showing All Products</p>}
        {activeTab === "Fruits" && <p className="text-gray-700">Showing Fruits</p>}
        {activeTab === "Vegetables" && <p className="text-gray-700">Showing Vegetables</p>}
        {activeTab === "Salad" && <p className="text-gray-700">Showing Salad</p>}
      </div>
    </div>
  );
};

export default ProductsTab;
