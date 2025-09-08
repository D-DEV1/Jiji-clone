import React, { useState, useRef } from 'react'

const Hero = ({ search, setSearch }) => {
  // State for dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  // State list and columns
  const stateList = [
    ["Abuja (FCT)", "222 701"],
    ["Lagos State", "1 868 543"],
    ["Ogun State", "20 748"],
    ["Oyo State", "60 280"],
    ["Rivers State", "103 943"],
    ["Abia State", "5 916"],
    ["Adamawa State", "942"],
    ["Akwa Ibom State", "6 182"],
    ["Anambra State", "17 139"],
    ["Bauchi State", "742"],
    ["Bayelsa State", "1 663"],
    ["C", null, true],
    ["Cross River State", "3 044"],
    ["D", null, true],
    ["Delta State", "20 396"],
    ["E", null, true],
    ["Ebonyi State", "1 719"],
    ["Edo State", "33 761"],
    ["Ekiti State", "2 645"],
    ["Enugu State", "15 169"],
    ["G", null, true],
    ["Gombe State", "392"],
    ["I", null, true],
    ["Imo State", "11 995"],
    ["J", null, true],
    ["Jigawa State", "572"],
    ["K", null, true],
    ["Kaduna State", "6 523"],
    ["Kano State", "7 091"],
    ["Kogi State", "1 278"],
    ["Kwara State", "7 870"],
    ["N", null, true],
    ["Nasarawa State", "1 066"],
    ["Niger State", "1 179"],
    ["O", null, true],
    ["Ondo State", "5 947"],
    ["Osun State", "14 394"],
    ["Plateau State", "2 322"],
    ["S", null, true],
    ["Sokoto State", "742"],
    ["T", null, true],
    ["Taraba State", "946"],
    ["Y", null, true],
    ["Yobe State", "293"],
    ["Z", null, true],
    ["Zamfara State", "248"],
  ];
  // Group states by their starting letter for balanced columns
  const groupedStates = {};
  stateList.forEach(([name, ads, isLetter]) => {
    if (isLetter) return;
    const letter = name[0].toUpperCase();
    if (!groupedStates[letter]) groupedStates[letter] = [];
    groupedStates[letter].push([name, ads]);
  });
  // Get sorted letters
  const letters = Object.keys(groupedStates).sort();
  // Distribute groups into 3 balanced columns
  const columns = [[], [], []];
  letters.forEach((letter, i) => {
    columns[i % 3].push({ letter, states: groupedStates[letter] });
  });

const handleChange = (e) => setSearch(e.target.value);



  return (
    <>
      <div className='bg-[#00b53f] w-full h-[265px] flex flex-col justify-center items-center rounded-b-3xl'>
        <div className='flex justify-center items-center py-4 text-2xl font-semibold text-white'>
            <p>What are you looking for?</p>
        </div>
        <div className='flex gap-2 relative'>
          {/* All Nigeria dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-white px-4 py-2.5 w-32 rounded-md outline-none placeholder-text-[#6c8ea6] cursor-pointer"
                placeholder="All Nigeria"
                readOnly
                onClick={() => setShowDropdown(v => !v)}
              />
              <span className="-ml-6 flex items-center pointer-events-none">
                <svg fill="#6c8ea6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#6c8ea6" className="w-2.5 h-2.5">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                  </g>
                </svg>
              </span>
            </div>
            {showDropdown && (
              <div className="fixed left-1/2 top-1/2 z-50 w-[900px] max-w-[98vw] bg-[#f3f8fa] rounded-2xl px-0 pt-3 pb-6 mx-auto shadow-lg font-inter transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-between px-8 pb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-[22px] font-medium text-[#252d3c]">All Nigeria</span>
                    <span className="text-[18px] font-normal text-[#7d97ad]">• 2 452 292 Ads</span>
                  </div>
                  <input
                    className="max-w-xs w-[300px] px-3 py-2 rounded-lg border border-[#dbe2e8] bg-white text-[16px] text-[#7d97ad] placeholder-[#b0c4d9] outline-none"
                    placeholder="Find state, city or district......"
                    type="text"
                  />
                </div>
                <div className="flex gap-6 px-4 max-h-[400px] overflow-y-auto">
                  {columns.map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col">
                      {col.map((group) => (
                        <React.Fragment key={group.letter}>
                          {group.states.map(([name, ads], si) => (
                            <div
                              key={name}
                              className="flex items-center border-b border-[#e8edf2] bg-white hover:bg-[#e5eef4] transition px-0 py-[11px] cursor-pointer group"
                            >
                              {si === 0 && (
                                <span className="font-semibold text-[#252d3c] text-[17px] pr-2">{group.letter}</span>
                              )}
                              <span className="flex-1 text-[#252d3c] text-[17px] pl-2">{name}</span>
                              <span className="text-[#7d97ad] text-[16px] ml-2">• {ads} ads</span>
                              <span className="text-[#dde4eb] text-[18px] font-bold ml-2 group-hover:text-[#b0c4d9]">{'>'}</span>
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          

          <div className="relative w-110 mx-3.5">
            <input
              type="text"
              placeholder='I am looking for...'
              className="bg-white py-2.5 pr-10 pl-4 w-full rounded-md outline-none placeholder-text-[#6c8ea6] cursor-pointer"
              value={search}
              onChange={handleChange}
            />
            <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#6c8ea6" className="w-5 h-5">
                <circle cx="11" cy="11" r="7" stroke="#6c8ea6" strokeWidth="2" fill="none" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#6c8ea6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
