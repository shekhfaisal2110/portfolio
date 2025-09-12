import React, { useState, useEffect, useRef } from "react";
import {FaCode,FaMobileAlt,FaGamepad,FaDownload,FaExternalLinkAlt,FaReact,FaRobot,FaTimes,FaFilter,FaSearch,FaSort,FaRocket,FaEye,FaLaptopCode,FaPalette} from "react-icons/fa";
import Header from "./Header";
import mockPortfolioData from "../data/portfolioData"; 
import TextScroll from "../ui/text-scroll";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMoreLoading, setShowMoreLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [likedProjects, setLikedProjects] = useState(new Set());

  const searchRef = useRef(null);

  // Initialize with mock data
  useEffect(() => {
    setTimeout(() => {
      setPortfolioItems(mockPortfolioData); // This will show the projects. Make sure your mockPortfolioData is exported as an array!
      setLoading(false);
    }, 1000);

    // Uncomment to use API instead
    /*
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolioItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setPortfolioItems(mockPortfolioData);
        setLoading(false);
      });
    */
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchQuery("");
        searchRef.current?.blur();
        setSelectedItem(null);
        setMobileFiltersOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const ParticleTrail = () => (
    <div
      className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        boxShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)',
        filter: 'blur(1px)',
      }}
    />
  );

  const filters = [
    { label: "All Projects", value: "all", icon: <FaCode />,  gradient: "from-cyan-500 to-blue-600" },
    { label: "Web Design", value: "web-design", icon: <FaPalette />, gradient: "from-blue-500 to-indigo-600" },
    { label: "Web Development", value: "web-development", icon: <FaLaptopCode />, gradient: "from-green-500 to-cyan-600" },
    { label: "Mobile Apps", value: "mobile-apps", icon: <FaMobileAlt />, gradient: "from-orange-500 to-red-600" },
    { label: "Games", value: "games", icon: <FaGamepad />, gradient: "from-purple-500 to-indigo-600" },
    { label: "React Projects", value: "react", icon: <FaReact />, gradient: "from-cyan-400 to-blue-500" },
    { label: "AI / Tools", value: "ai-tools", icon: <FaRobot />, gradient: "from-pink-500 to-rose-600" },
  ];

  const countByCategory = (value) => {
    if (value === "all") return portfolioItems.length;
    return portfolioItems.filter((item) => item.category === value).length;
  };

  const sortItems = (items) => {
    if (sortBy === "title-asc") return [...items].sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "title-desc") return [...items].sort((a, b) => b.title.localeCompare(a.title));
    return [...items].sort((a, b) => new Date(b.hostedDate) - new Date(a.hostedDate));
  };

  const filteredItems = portfolioItems.filter((item) =>
    (activeFilter === "all" || item.category === activeFilter) &&
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = sortItems(filteredItems);
  const visibleItems = sortedItems.slice(0, visibleCount);

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(projectId)) newLiked.delete(projectId);
      else newLiked.add(projectId);
      return newLiked;
    });
  };

  const sanitizeFilename = (name) => {
  return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

const downloadImage = async (url, title) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error('Network response was not ok');

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const sanitizedTitle = sanitizeFilename(title) || 'download';
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute('download', `${sanitizedTitle}.png`);
    link.rel = "noopener";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Delay revoking to ensure download starts properly
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
  } catch (err) {
    alert("Image download failed.");
    console.error(err);
  }
};

  return (
    <>
      <Header />
      <ParticleTrail />
      <section
        id="portfolio"
        className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                <TextScroll
                  className="font-display text-center text-4xl font-semibold tracking-tighter text-white md:text-7xl md:leading-[5rem]"
                  text="💼 🖼️ My Portfolio Project 🖼️ 💼"
                  default_velocity={5}
                />
              </h2>
            </div>
            <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/30 shadow-2xl max-w-3xl mx-auto">
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-100">
                Explore my work categorized by design, development and creativity. Each project represents a unique journey of innovation and craftsmanship.
              </p>
            </div>
          </div>
          {/* CONTROL PANEL */}
          <div className={`transition-all duration-1000 delay-300 mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                  {/* SEARCH */}
                  <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaSearch className="h-5 w-5 text-gray-300" />
                    </div>
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full lg:w-80 pl-12 pr-12 py-4 rounded-xl bg-white/15 backdrop-blur-lg text-white border border-white/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 transition-all duration-300 placeholder-gray-300"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 text-gray-300 hover:text-white transition-colors duration-300 p-1"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                  {/* SORT */}
                  <div className="relative flex items-center">
                    <FaSort className="absolute left-4 text-gray-300" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="pl-12 pr-8 py-4 rounded-xl bg-white/15 backdrop-blur-lg text-white border border-white/30 focus:border-purple-300 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="date-desc">🕒 Date (Newest)</option>
                      <option value="title-asc">🔤 Title (A–Z)</option>
                      <option value="title-desc">🔠 Title (Z–A)</option>
                    </select>
                  </div>
                  {/* MOBILE FILTER BUTTON */}
                  <button
                    className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <FaFilter /> Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* DESKTOP FILTERS */}
          <div className={`hidden lg:flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filters.map((filter, index) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setVisibleCount(6);
                }}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.value
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg`
                    : "bg-white/15 backdrop-blur-lg text-white border border-white/30 hover:border-white/50 hover:bg-white/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${activeFilter === filter.value ? 'bg-white/20' : `bg-gradient-to-r ${filter.gradient}`} shadow-lg`}>
                    <span className="text-sm text-white">{filter.icon}</span>
                  </div>
                  <span>{filter.label} ({countByCategory(filter.value)})</span>
                </div>
              </button>
            ))}
          </div>
          {/* MOBILE FILTER MODAL */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="relative bg-gray-950/95 backdrop-blur-xl border border-white/30 rounded-3xl w-full max-w-md shadow-2xl">
                <div className="p-8 text-white">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Filter Categories
                    </h3>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/25 transition-all duration-300"
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {filters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => {
                          setActiveFilter(filter.value);
                          setVisibleCount(6);
                          setMobileFiltersOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                          activeFilter === filter.value
                            ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg`
                            : "bg-white/15 hover:bg-white/25 border border-white/30"
                        }`}
                      >
                        <div className={`p-2 rounded-full ${activeFilter === filter.value ? 'bg-white/20' : `bg-gradient-to-r ${filter.gradient}`}`}>
                          <span className="text-white text-sm">{filter.icon}</span>
                        </div>
                        <span>{filter.label} ({countByCategory(filter.value)})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* PORTFOLIO GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {loading
              ? [...Array(6)].map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl bg-white/15 backdrop-blur-lg border border-white/30 h-96 animate-pulse">
                    <div className="w-full h-48 bg-gradient-to-r from-gray-600/50 to-gray-500/50"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gradient-to-r from-gray-500/50 to-gray-400/50 rounded"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-500/50 to-gray-400/50 rounded w-3/4"></div>
                      <div className="flex gap-3">
                        <div className="h-10 bg-gradient-to-r from-gray-500/50 to-gray-400/50 rounded flex-1"></div>
                        <div className="h-10 bg-gradient-to-r from-gray-500/50 to-gray-400/50 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                ))
              : visibleItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${(index + 7) * 100}ms` }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500" />
                      <div
                        onClick={(e) => {
                          if (!e.target.closest("button") && !e.target.closest("a")) {
                            setSelectedItem(item);
                          }
                        }}
                        className="relative overflow-hidden rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-2xl"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm mb-4 capitalize flex items-center gap-2">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                            {item.category.replace("-", " ")}
                          </p>
                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                            >
                              <FaExternalLinkAlt size={12} /> Visit
                            </a>
                            <button
                              onClick={() => downloadImage(item.image, item.title)}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                            >
                              <FaDownload size={12} /> Save
                            </button>
                          </div>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                          <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-lg mb-4 font-semibold">
                              Click to view details
                            </p>
                            <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center mx-auto animate-pulse">
                              <FaEye className="text-white text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          {/* SHOW MORE BUTTON */}
          {!loading && visibleCount < filteredItems.length && (
            <div className="text-center mt-16">
              <button
                onClick={() => {
                  setShowMoreLoading(true);
                  setTimeout(() => {
                    setVisibleCount((prev) => prev + 6);
                    setShowMoreLoading(false);
                  }, 800);
                }}
                disabled={showMoreLoading}
                className={`inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  showMoreLoading
                    ? "bg-white/15 cursor-wait text-gray-300 opacity-70"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-2xl"
                }`}
              >
                {showMoreLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Loading More...
                  </>
                ) : (
                  <>
                    <FaRocket className="text-xl" />
                    Show More Projects
                  </>
                )}
              </button>
            </div>
          )}
          {/* NO RESULTS STATE */}
          {!loading && filteredItems.length === 0 && (
            <div className={`text-center py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-3xl blur-xl opacity-30" />
                <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                  <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaSearch className="text-3xl text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">
                    No Projects Found
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Try adjusting your search terms or filter selection.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("all");
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* PROJECT MODAL */}
          {selectedItem && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="relative bg-gray-950/95 backdrop-blur-xl border border-white/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-50" />
                <div className="relative">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaTimes />
                  </button>
                  <div className="relative">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl"></div>
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                      <span className="text-white text-sm">✨</span>
                    </div>
                  </div>
                  <div className="p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedItem.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-200">
                            <span className="font-medium text-white">
                              Category:
                            </span>{" "}
                            {selectedItem.category.replace("-", " ")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-200">
                            <span className="font-medium text-white">
                              Launch Date:
                            </span>{" "}
                            {new Date(selectedItem.hostedDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* MODAL ACTION BUTTONS */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <FaExternalLinkAlt /> Visit Project
                      </a>
                      <button
                        onClick={() => downloadImage(selectedItem.image, selectedItem.title)}
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <FaDownload /> Download Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
