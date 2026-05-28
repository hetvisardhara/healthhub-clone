import React, { useState } from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    category: "Feminine Hygiene Care",
    desc: "Premium feminine hygiene and wellness essentials.",
  },
  {
    id: 2,
    category: "Baby Care",
    desc: "Dermatologically safe baby hygiene products.",
  },
  {
    id: 3,
    category: "Adult Incontinence",
    desc: "Comfort-focused adult care and protection solutions.",
  },
  {
    id: 4,
    category: "Women's Wellness",
    desc: "Daily wellness gummies and nutrition support.",
  },
  {
    id: 5,
    category: "Medical Disposables / Surgical",
    desc: "Hospital-grade disposable and surgical products.",
  },
  {
    id: 6,
    category: "Wound Care & Cotton",
    desc: "Cotton, gauze, bandages and wound care essentials.",
  },
  {
    id: 7,
    category: "Orthopaedic Supports & Braces",
    desc: "Orthopaedic rehabilitation and support products.",
  },
  {
    id: 8,
    category: "Fracture Aids",
    desc: "Immobilization and fracture management products.",
  },
  {
    id: 9,
    category: "Traction Kits",
    desc: "Professional traction systems and accessories.",
  },
  {
    id: 10,
    category: "Physiotherapy & Rehabilitation",
    desc: "Recovery, rehabilitation and physiotherapy aids.",
  },
  {
    id: 11,
    category: "Walking Aids & Mobility",
    desc: "Mobility assistance and rehabilitation equipment.",
  },
  {
    id: 12,
    category: "Surgical Dressing",
    desc: "Professional surgical dressing products.",
  },
  {
    id: 13,
    category: "Sport Gear",
    desc: "Sports supports and gym protection products.",
  },
  {
    id: 14,
    category: "Junior / Paediatric Range",
    desc: "Healthcare and orthopaedic products for children.",
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;

    const matchSearch =
      searchQuery.trim() === "" ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchSearch;
  });

  return (
    <div className="products-page">

      <section className="products-hero">
        <p className="products-eyebrow">CATALOG</p>

        <h1 className="products-title">
          Our complete{" "}
          <span className="products-title-accent">
            healthcare product range
          </span>
        </h1>

        <p className="products-subtitle">
          Browse our extensive range of medical, surgical, orthopedic,
          rehabilitation and wellness products for hospitals, clinics,
          pharmacies and healthcare distributors.
        </p>
      </section>

      <section className="products-controls">

        <div className="search-bar">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="view-toggles">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              ⬜
            </button>

            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              ☰
            </button>
          </div>
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${
                activeCategory === cat ? "pill-active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid-section">
        <div
          className={`products-grid ${
            viewMode === "list" ? "products-list" : ""
          }`}
        >
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-card-img placeholder-card">
                <div className="placeholder-icon">🏥</div>
              </div>

              <div className="product-card-body">

                <p className="product-category-name">
                  {product.category}
                </p>

                <p className="product-card-desc">
                  {product.desc}
                </p>

                <div className="product-card-footer">
                  <button className="btn-view-details">
                    View Details →
                  </button>

                  <button className="btn-quote-icon" title="Request Quote">
                    💬
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            No products found.
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;