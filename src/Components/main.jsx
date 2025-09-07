import React from 'react';
import { FaAngleRight, FaStar, FaMapMarkerAlt, FaSearch, FaPlus, FaFire, FaCar, FaHome, FaMobileAlt, FaLaptop, FaChair, FaSpa, FaTshirt, FaRunning, FaBriefcase, FaHandsHelping, FaBaby, FaPaw, FaLeaf, FaTools, FaWrench, FaRegLightbulb, FaShoppingCart } from 'react-icons/fa';


const Main = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [hoveredCategory, setHoveredCategory] = React.useState(null);
  const [isHoverPanelVisible, setIsHoverPanelVisible] = React.useState(false);
  const hoverTimeoutRef = React.useRef(null);
  const categories = [
    { name: "Post ad", icon: "src/assets/plus-icon.png", ads: "" }, // Placeholder icon
    { name: "Trending", icon: "src/assets/fire-icon.png", ads: "" }, // Placeholder icon
    { 
      name: "Vehicles", 
      icon: FaCar,
      ads: "339,152",
      subcategories: [
        { name: "Cars", ads: "150,000" },
        { name: "Motorcycles", ads: "80,000" },
        { name: "Buses", ads: "30,000" },
        { name: "Trucks", ads: "50,000" },
        { name: "Heavy Equipment", ads: "20,000" },
      ]
    },
    { 
      name: "Property", 
      icon: FaHome,
      ads: "112,426",
      subcategories: [
        { name: "Houses & Apartments for Rent", ads: "60,000" },
        { name: "Houses & Apartments for Sale", ads: "30,000" },
        { name: "Land & Plots for Sale", ads: "15,000" },
        { name: "Commercial Property for Rent", ads: "7,000" },
        { name: "Commercial Property for Sale", ads: "5,000" },
        { name: "Event Centers for Rent", ads: "3,000" },
        { name: "Short-let Apartments", ads: "2,000" },
        { name: "New Developments", ads: "10,000" },
        { name: "Garages & Parking", ads: "500" },
      ]
    },
    { 
      name: "Mobile Phones & Tablets", 
      icon: FaMobileAlt,
      ads: "94,077",
      subcategories: [
        { name: "Mobile Phones", ads: "70,000" },
        { name: "Tablets", ads: "20,000" },
        { name: "Accessories", ads: "4,000" },
        { name: "Smartphones", ads: "50,000" },
        { name: "Feature Phones", ads: "10,000" },
        { name: "Refurbished Phones", ads: "5,000" },
        { name: "Wearable Technology", ads: "3,000" },
        { name: "Phone Repair Services", ads: "2,000" },
        { name: "Other Mobile Devices", ads: "1,000" },
      ]
    },
    { 
      name: "Electronics", 
      icon: FaLaptop,
      ads: "277,358",
      subcategories: [
        { name: "TVs", ads: "100,000" },
        { name: "Laptops", ads: "80,000" },
        { name: "Desktops", ads: "40,000" },
        { name: "Cameras", ads: "30,000" },
        { name: "Audio Systems", ads: "27,000" },
        { name: "Gaming Consoles", ads: "25,000" },
        { name: "Smartwatches", ads: "15,000" },
        { name: "Drones", ads: "10,000" },
        { name: "Printers & Scanners", ads: "8,000" },
        { name: "Projectors", ads: "7,000" },
        { name: "Routers & Modems", ads: "6,000" },
        { name: "External Hard Drives", ads: "5,000" },
        { name: "Headphones & Earbuds", ads: "12,000" },
        { name: "Portable Speakers", ads: "9,000" },
      ]
    },
    { 
      name: "Home, Furniture & Appliances", 
      icon: FaChair,
      ads: "562,457",
      subcategories: [
        { name: "Furniture", ads: "200,000" },
        { name: "Appliances", ads: "150,000" },
        { name: "Home Decor", ads: "100,000" },
        { name: "Garden & Outdoor", ads: "80,000" },
        { name: "Building Materials", ads: "30,000" },
      ]
    },
    { 
      name: "Beauty & Personal Care", 
      icon: FaSpa,
      ads: "74,408",
      subcategories: [
        { name: "Skincare", ads: "30,000" },
        { name: "Haircare", ads: "20,000" },
        { name: "Fragrances", ads: "15,000" },
        { name: "Makeup", ads: "9,000" },
      ]
    },
    { 
      name: "Fashion", 
      icon: FaTshirt,
      ads: "178,136",
      subcategories: [
        { name: "Men's Fashion", ads: "80,000" },
        { name: "Women's Fashion", ads: "70,000" },
        { name: "Kids' Fashion", ads: "20,000" },
        { name: "Accessories", ads: "8,000" },
      ]
    },
    { 
      name: "Leisure & Activities", 
      icon: FaRunning,
      ads: "82,332",
      subcategories: [
        { name: "Sporting Goods", ads: "30,000" },
        { name: "Art & Collectibles", ads: "20,000" },
        { name: "Books & Magazines", ads: "15,000" },
        { name: "Music & Movies", ads: "10,000" },
        { name: "Musical Instruments", ads: "7,000" },
      ]
    },
    { 
      name: "Seeking Work CVs", 
      icon: FaBriefcase,
      ads: "20,091",
      subcategories: [
        { name: "Entry Level", ads: "10,000" },
        { name: "Experienced", ads: "7,000" },
        { name: "Executive", ads: "3,000" },
      ]
    },
    { 
      name: "Services", 
      icon: FaHandsHelping,
      ads: "90,203",
      subcategories: [
        { name: "Business Services", ads: "30,000" },
        { name: "Personal Services", ads: "25,000" },
        { name: "Repair Services", ads: "20,000" },
        { name: "Event Services", ads: "15,000" },
        { name: "Home Cleaning", ads: "12,000" },
        { name: "Pet Care", ads: "10,000" },
        { name: "Tutoring", ads: "8,000" },
        { name: "Legal Services", ads: "7,000" },
        { name: "Financial Services", ads: "6,000" },
        { name: "Automotive Services", ads: "9,000" },
        { name: "Health & Wellness", ads: "11,000" },
        { name: "IT & Tech Support", ads: "14,000" },
        { name: "Web Design", ads: "10,000" },
        { name: "Photography", ads: "7,500" },
        { name: "Moving & Storage", ads: "6,500" },
        { name: "Real Estate Services", ads: "5,500" },
        { name: "Security Services", ads: "4,500" },
        { name: "Travel Services", ads: "3,500" },
        { name: "Catering Services", ads: "2,500" },
        { name: "Garden & Landscaping", ads: "3,000" },
      ]
    },
    { 
      name: "Jobs", 
      icon: FaBriefcase,
      ads: "1,566",
      subcategories: [
        { name: "Full-time Jobs", ads: "800" },
        { name: "Part-time Jobs", ads: "400" },
        { name: "Contract Jobs", ads: "200" },
        { name: "Temporary Jobs", ads: "100" },
        { name: "Remote Jobs", ads: "500" },
        { name: "Internships", ads: "300" },
        { name: "Freelance Gigs", ads: "700" },
        { name: "Volunteer Work", ads: "150" },
        { name: "Government Jobs", ads: "250" },
        { name: "IT Jobs", ads: "600" },
        { name: "Marketing Jobs", ads: "450" },
        { name: "Sales Jobs", ads: "350" },
        { name: "Customer Service Jobs", ads: "280" },
        { name: "Accounting Jobs", ads: "220" },
        { name: "Healthcare Jobs", ads: "180" },
        { name: "Education Jobs", ads: "160" },
        { name: "Engineering Jobs", ads: "190" },
        { name: "Construction Jobs", ads: "170" },
        { name: "Logistics Jobs", ads: "130" },
        { name: "Hospitality Jobs", ads: "210" },
      ]
    },
    { 
      name: "Babies & Kids", 
      icon: FaBaby,
      ads: "29,248",
      subcategories: [
        { name: "Baby Gear", ads: "10,000" },
        { name: "Toys", ads: "8,000" },
        { name: "Kids' Furniture", ads: "6,000" },
        { name: "Prams & Strollers", ads: "5,000" },
      ]
    },
    { 
      name: "Animals & Pets", 
      icon: FaPaw,
      ads: "10,340",
      subcategories: [
        { name: "Dogs", ads: "4,000" },
        { name: "Cats", ads: "3,000" },
        { name: "Birds", ads: "2,000" },
        { name: "Fish", ads: "1,000" },
      ]
    },
    { 
      name: "Food, Agriculture & Farming", 
      icon: FaLeaf,
      ads: "31,051",
      subcategories: [
        { name: "Food & Beverages", ads: "15,000" },
        { name: "Farm Animals", ads: "8,000" },
        { name: "Agricultural Equipment", ads: "5,000" },
        { name: "Seeds & Plants", ads: "3,000" },
      ]
    },
    { 
      name: "Commercial Equipment & Tools", 
      icon: FaTools,
      ads: "27,998",
      subcategories: [
        { name: "Industrial Equipment", ads: "10,000" },
        { name: "Construction Tools", ads: "8,000" },
        { name: "Medical Equipment", ads: "5,000" },
        { name: "Office Equipment", ads: "4,000" },
      ]
    },
    { 
      name: "Repair & Construction", 
      icon: FaWrench,
      ads: "12,456",
      subcategories: [
        { name: "Building Services", ads: "5,000" },
        { name: "Home Repair", ads: "4,000" },
        { name: "Electrical Work", ads: "2,000" },
        { name: "Plumbing", ads: "1,000" },
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col">
      
      <div className="relative flex flex-col md:flex-row">
        {/* Category Grid for Mobile / Sidebar for Desktop */}
        <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0 bg-white rounded-lg shadow-lg p-4">
          <h2 className="font-bold text-lg mb-4 hidden md:block">Categories</h2> {/* Hidden on mobile */}
          <ul className="hidden md:block"> {/* Hidden on mobile, visible as sidebar on desktop */}
            {categories.slice(2).map((category, index) => (
              <li key={index} className="py-1">
                <div
                  className="flex items-center justify-between px-3 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 transition-colors duration-200"
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeoutRef.current);
                    setHoveredCategory(category);
                    setIsHoverPanelVisible(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoverPanelVisible(false);
                      setHoveredCategory(null);
                    }, 200);
                  }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsHoverPanelVisible(false); // Hide hover panel on click
                  }}
                >
                <div className="flex items-center">
                  {React.createElement(category.icon, { className: "w-7 h-7 mr-3 text-gray-700" })}
                  <div>
                    <p className="font-medium text-base">{category.name}</p>
                    <p className="text-xs text-gray-500">{category.ads} ads</p>
                  </div>
                </div>
                <FaAngleRight className="text-gray-400 text-sm" />
                </div>
                {/* Dropdown content will now be rendered in a separate hover panel */}
              </li>
            ))}
          </ul>
          {/* Category Grid for Mobile */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:hidden gap-4 mb-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2 text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 ${category.name === "Post ad" ? "bg-orange-200" : category.name === "Trending" ? "bg-red-200" : "bg-gray-100"}`}>
                  {category.name === "Post ad" ? (
                    <FaPlus className="text-orange-600 text-2xl" />
                  ) : category.name === "Trending" ? (
                    <FaFire className="text-red-600 text-2xl" />
                  ) : (
                    React.createElement(category.icon, { className: "w-10 h-10 object-contain text-gray-700" })
                  )}
                </div>
                <p className="text-xs font-medium text-gray-700">{category.name}</p>
                {category.ads && <p className="text-[10px] text-gray-500">{category.ads} ads</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4 pl-0 md:pl-8">
          {/* Hover-activated Sub-dropdown Panel */}
          {isHoverPanelVisible && hoveredCategory && hoveredCategory.subcategories && (
            <div
              className="absolute top-0 left-1/4 bg-white rounded-lg shadow-lg p-4 z-20 w-1/4 h-full"
              onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
              onMouseLeave={() => {
                hoverTimeoutRef.current = setTimeout(() => {
                  setIsHoverPanelVisible(false);
                  setHoveredCategory(null);
                }, 200);
              }}
            >
              <h3 className="font-bold text-lg mb-4">{hoveredCategory.name}</h3>
              <div className="grid grid-cols-1 gap-1 max-h-[576px] overflow-y-auto">
                {hoveredCategory.subcategories.map((subCategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded-lg cursor-pointer text-gray-700 transition-colors duration-200"
                    onClick={() => {
                      setSelectedCategory(hoveredCategory);
                      setIsHoverPanelVisible(false);
                      setHoveredCategory(null);
                    }}
                  >
                    <div className="flex items-center">
                      {React.createElement(hoveredCategory.icon, { className: "w-7 h-7 mr-2 text-gray-700" })}
                      <div>
                        <p className="font-medium text-base">{subCategory.name}</p>
                        <p className="text-xs text-gray-500">{subCategory.ads} ads</p>
                      </div>
                    </div>
                    <FaAngleRight className="text-gray-400 text-sm" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Promo Section (repositioned to top) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center text-center">
              <FaBriefcase className="w-16 h-16 mb-1 text-green-700" />
              <p className="font-medium text-green-700 text-sm">Apply for job</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center text-center">
              <FaRegLightbulb className="w-16 h-16 mb-1 text-green-700" />
              <p className="font-medium text-green-700 text-sm">How to sell</p>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg flex flex-col items-center justify-center text-center">
              <FaShoppingCart className="w-16 h-16 mb-1 text-purple-700" />
              <p className="font-medium text-purple-700 text-sm">How to buy</p>
            </div>
          </div>
          
          <h2 className="font-bold text-xl mb-4">Trending ads</h2>

          {/* Subcategory Display (Permanent on Click) */}
          <div className="grid grid-cols-1 gap-4 mb-8 max-h-[calc(100vh-200px)] overflow-y-auto">
            {(selectedCategory && selectedCategory.subcategories) ? (
              selectedCategory.subcategories.map((subCategory, index) => (
                <div key={index} className="flex items-center justify-between py-3 px-3 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 transition-colors duration-200">
                  <div className="flex items-center">
                    {React.createElement(selectedCategory.icon, { className: "w-7 h-7 mr-3 text-gray-700" })}
                    <div>
                      <p className="font-medium text-base">{subCategory.name}</p>
                      <p className="text-xs text-gray-500">{subCategory.ads} ads</p>
                </div>
                  </div>
                  <FaAngleRight className="text-gray-400 text-sm" />
                </div>
              ))
            ) : (
              <p>Select a category to view its subcategories.</p>
            )}
          </div>

          {/* Promo Section (original position - removed) */}
          
        </div>
      </div>
    </div>
  );
};

export default Main;
