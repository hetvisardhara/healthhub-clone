import React, { useState } from "react";
import "./Products.css";

// Import your product images from assets
import orthopedicImg from "../assets/orthopedic.jpg";
import surgicalImg from "../assets/surgical.jpg";
import hygieneImg from "../assets/hygiene.jpg";
import equipmentImg from "../assets/equipment.jpg";
import physiotherapyImg from "../assets/physiotherapy.jpg";
import babyImg from "../assets/baby.jpg";
import adultImg from "../assets/adult.jpg";

const categories = [
  "All",
  "Orthopedic Products",
  "Surgical & Medical Disposables",
  "Hygiene Care",
  "Medical Equipment",
  "Physiotherapy Products",
  "Baby Care",
  "Adult Care",
];

const products = [
  {
    id: 1,
    category: "Orthopedic Products",
    image: orthopedicImg,
    title: "Orthopedic Products",
    desc: "Clinically designed orthopedic supports — cervical, lumbar, knee, ankle, wrist and posture...",
    tags: [
      "Cervical Collar – Soft (with Support)",
      "Cervical Orthosis – Philadelphia",
      "Cervical Collar – Hard Adjustable",
    ],
    extraCount: 21,
  },
  {
    id: 2,
    category: "Surgical & Medical Disposables",
    image: surgicalImg,
    title: "Surgical & Medical Disposables",
    desc: "Sterile, single-use disposables manufactured to IP / BP / USP standards. Curated range from Aurum...",
    tags: [
      "Au-Fix Infusion / IV Set",
      "Au-Flm Intra Cath IV Cannula (18G–24G)",
      "Disposable Syringes (2ml / 5ml / 10ml)",
    ],
    extraCount: 17,
  },
  {
    id: 3,
    category: "Hygiene Care",
    image: hygieneImg,
    title: "Hygiene Care",
    desc: "A complete Dreamease range of premium feminine and personal hygiene essentials — discreet, ...",
    tags: [
      "Dreamease Disposable Period Panty",
      "Dreamease Ultra Soft Sanitary Pads (275 mm)",
      "Dreamease Panty Liners (155 mm / 185 mm)",
    ],
    extraCount: 9,
  },
  {
    id: 4,
    category: "Medical Equipment",
    image: equipmentImg,
    title: "Medical Equipment",
    desc: "Reliable medical equipment for hospital, clinic and home care — engineered for accuracy, durability...",
    tags: [
      "Folding Wheelchair (Standard / Reclining)",
      "Commode Stool",
      "Commode Chair",
    ],
    extraCount: 13,
  },
  {
    id: 5,
    category: "Physiotherapy Products",
    image: physiotherapyImg,
    title: "Physiotherapy Products",
    desc: "Professional rehabilitation tools that help patients regain strength, flexibility and mobility — used by...",
    tags: [
      "Anti-Burst Gym Ball (55/65/75 cm)",
      "Gel Exercise Ball – Round",
      "Resistance / Therapy Bands",
    ],
    extraCount: 11,
  },
  {
    id: 6,
    category: "Baby Care",
    image: babyImg,
    title: "Baby Care",
    desc: "Dreamease baby hygiene essentials — dermatologically safe, 0% rash, breathable and...",
    tags: [
      "Dreamease Baby Pant Diapers – S (4–8 kg)",
      "Dreamease Baby Pant Diapers – M (7–12 kg)",
      "Dreamease Baby Pant Diapers – L (9–14 kg)",
    ],
    extraCount: 9,
  },
  {
    id: 7,
    category: "Adult Care",
    image: adultImg,
    title: "Adult Care",
    desc: "Aurum & Dreamease adult care range — premium incontinence and mobility solutions using pure...",
    tags: [
      "Dreamease Premium Adult Pull-Up Diaper (M/L/XL)",
      "Dreamease Premium Adult Tape Diaper (M/L/XL)",
      "Dreamease Adult Underpad Sheets (60×90 cm)",
    ],
    extraCount: 2,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="products-page">

      {/* ── Hero ── */}
      <section className="products-hero">
        <p className="products-eyebrow">CATALOG</p>
        <h1 className="products-title">
          Our complete <span className="products-title-accent">product range</span>
        </h1>
        <p className="products-subtitle">
          Browse 9+ categories of certified medical, surgical and healthcare products.<br />
          Request a quick quote for any item.
        </p>
      </section>

      {/* ── Search + Filter Bar ── */}
      <section className="products-controls">
        <div className="search-bar">
          <span className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search products or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="view-toggles">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className={`products-grid-section ${viewMode === "list" ? "list-mode" : ""}`}>
        <div className={`products-grid ${viewMode === "list" ? "products-list" : ""}`}>
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-desc">{product.desc}</p>
                <div className="product-tags">
                  {product.tags.map((tag, i) => (
                    <span className="product-tag" key={i}>{tag}</span>
                  ))}
                  {product.extraCount > 0 && (
                    <span className="product-tag tag-extra">+{product.extraCount}</span>
                  )}
                </div>
                <div className="product-card-footer">
                  <button className="btn-view-details">
                    View Details →
                  </button>
                  <button className="btn-quote-icon" title="Request a quote">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No products found for "<strong>{searchQuery}</strong>"</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Products;
