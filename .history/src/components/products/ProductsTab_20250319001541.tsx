import { useState } from "react";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Fruits", "Vegetables", "Salad"];

  return (
    <div className="flex justify-center">
      <div className="flex space-x-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-gray-600 border ${
              activeTab === tab
                ? "bg-green-600 text-white border-green-600"
                : "border-gray-300 hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {activeTab === "All" && <p>All Products</p>}
        {activeTab === "Fruits" && <p>Fruits Section</p>}
        {activeTab === "Vegetables" && <p>Vegetables Section</p>}
        {activeTab === "Salad" && <p>Salad Section</p>}
      </div>
    </div>
  );
};

export default ProductsTab;
