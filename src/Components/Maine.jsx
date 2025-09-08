import React,{useState, useEffect} from 'react';
import { FaAngleRight, FaStar, FaMapMarkerAlt, FaSearch, FaPlus, FaFire, FaCar, FaHome, FaMobileAlt, FaLaptop, FaChair, FaSpa, FaTshirt, FaRunning, FaBriefcase, FaHandsHelping, FaBaby, FaPaw, FaLeaf, FaTools, FaWrench, FaRegLightbulb, FaShoppingCart, FaTh, FaList } from 'react-icons/fa';
import axios from 'axios';

const Maine = ({ search }) => {
  
  const [data, setData] = useState([]);  
  const [filteredData, setFilteredData] = useState([]);
  const [viewType, setViewType] = useState('grid'); // Add this state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=72');
        setData(response.data.products);
        setFilteredData(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on search input
  useEffect(() => {
    if (!search.trim()) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, data]);
  const [hoveredCategory, setHoveredCategory] = React.useState(null);
  const [isHoverPanelVisible, setIsHoverPanelVisible] = React.useState(false);
  const hoverTimeoutRef = React.useRef(null);
  const categories = [
    { name: "Post ad", icon: "src/assets/plus-icon.png", ads: "", color: "text-orange-600" },
    { name: "Trending", icon: "src/assets/fire-icon.png", ads: "", color: "text-red-600" },
    {
      name: "Vehicles",
      icon: FaCar,
      ads: "339,152",
      color: "text-blue-600",
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
      color: "text-green-700",
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
      color: "text-yellow-600",
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
      color: "text-purple-600",
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
      color: "text-pink-600",
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
      color: "text-rose-600",
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
      color: "text-indigo-600",
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
      color: "text-teal-600",
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
      color: "text-gray-700",
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
      color: "text-cyan-600",
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
      color: "text-gray-700",
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
      color: "text-yellow-500",
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
      color: "text-orange-500",
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
      color: "text-green-600",
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
      color: "text-blue-700",
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
      color: "text-red-700",
      subcategories: [
        { name: "Building Services", ads: "5,000" },
        { name: "Home Repair", ads: "4,000" },
        { name: "Electrical Work", ads: "2,000" },
        { name: "Plumbing", ads: "1,000" },
      ]
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#ebf2f7]">
      <div className="mx-auto px-2 py-8 flex flex-col" style={{maxWidth: '1200px'}}>
        <div className="relative flex flex-col md:flex-row">
          {/* Category Grid for Mobile / Sidebar for Desktop */}
          <div className="w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0 bg-white rounded-lg shadow-lg p-3">
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
                    {React.createElement(category.icon, { className: `w-7 h-7 mr-3 ${category.color}` })}
                    <div>
                      <p className="font-medium text-base">{category.name}</p>
                      <p className="text-xs text-gray-500">{category.ads} ads</p>
                    </div>
                  </div>
                  <FaAngleRight className="text-gray-400 text-sm" />
                  </div>
                  
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
                      React.createElement(category.icon, { className: `w-10 h-10 object-contain ${category.color}` })
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-700">{category.name}</p>
                  {category.ads && <p className="text-[10px] text-gray-500">{category.ads} ads</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="w-full md:w-3/4 pl-0 md:pl-4">
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
                        {React.createElement(hoveredCategory.icon, { className: `w-7 h-7 mr-2 ${hoveredCategory.color}` })}
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
            
            <div className="flex mb-6">
              <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center text-center w-48 h-20 border border-green-300 relative overflow-visible">
                <img src="./src/assets/lapy.png" alt="Apply for job" className="w-16 h-16 absolute -top-4 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-10">Apply for job</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center w-48 h-20 text-center border border-green-300 ml-2 relative overflow-visible">
                <img src="./src/assets/money.png" alt="How to sell" className="w-14 h-14 absolute -top-3 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-8">How to sell</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg flex flex-col items-center justify-center text-center w-48 h-20 border border-purple-300 ml-2 relative overflow-visible">
                <img src="./src/assets/cart-i.png" alt="How to buy" className="w-18 h-16 absolute -top-4 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-8">How to buy</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">
                {search ? `Search results for "${search}"` : 'Trending ads'}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 rounded hover:bg-gray-200"
                  title="4-Column Grid View"
                  onClick={() => setViewType('grid')}
                >
                  <FaTh className={`text-lg ${viewType === 'grid' ? 'text-[#00b53f]' : 'text-gray-500'}`} />
                </button>
                <button
                  className="p-2 rounded hover:bg-gray-200"
                  title="List View"
                  onClick={() => setViewType('list')}
                >
                  <FaList className={`text-lg ${viewType === 'list' ? 'text-[#00b53f]' : 'text-gray-500'}`} />
                </button>
              </div>
            </div>
            <div className={`mb-6 ${
              viewType === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[3px] auto-cols-min'
                : 'flex flex-col gap-2'
            }`}>
              {filteredData.length > 0 ? filteredData.map((product, idx) => (
                <div
                  key={product.id}
                  className={
                    viewType === 'grid'
                      ? "bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col border-2 border-[#00b53f] overflow-hidden w-auto"
                      : "bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex items-center border-2 border-[#00b53f] px-5 py-4 min-h-[180px] h-[200px]"
                  }
                  style={
                    viewType === 'grid'
                      ? { minHeight: idx % 3 === 0 ? 280 : idx % 3 === 1 ? 340 : 400 }
                      : {}
                  }
                >
                  <div className={viewType === 'grid' ? "relative" : "flex-shrink-0"}>
                    <img
                      src={product.thumbnail || product.image}
                      alt={product.title || product.name}
                      className={
                        viewType === 'grid'
                          ? "w-full h-36 object-cover"
                          : "w-40 h-40 object-cover rounded mr-6"
                      }
                    />
                    {viewType === 'grid' && (
                      <span className="absolute top-2 right-2 bg-[#ebf2f7] text-xs px-2 py-1 rounded-full font-semibold shadow">
                        Verified Id
                      </span>
                    )}
                  </div>
                  {viewType === 'grid' ? (
                    <div className="p-3 flex flex-col flex-1">
                      <div className=" items-center justify-between mb-1">
                        <h3 className="text-base text-gray-800 font-semibold line-clamp-2">{product.title || product.name}</h3>
                        <span className="text-lg font-bold text-[#00b53f] ">
                          ₦{product.price ? product.price.toLocaleString() : "N/A"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1 line-clamp-2">{product.description}</p>
                     
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>Lagos</span>
                      </div>
                       <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-200 text-xs px-2 py-1 rounded">{product.category}</span>
                        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Featured</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base text-gray-800 font-semibold line-clamp-2">{product.title || product.name}</h3>
                        <span className="text-lg font-bold text-[#00b53f] ml-2">
                          ₦{product.price ? product.price.toLocaleString() : "N/A"}
                        </span>
                      </div>
                     
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                       <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-200 text-xs px-2 py-1 rounded">{product.category}</span>
                        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Featured</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>Lagos</span>
                      </div>
                    </div>
                  )}
                </div>
              )) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <FaSearch className="text-6xl text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500">
                    {search ? `No results found for "${search}". Try different keywords.` : 'No products available at the moment.'}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Maine;