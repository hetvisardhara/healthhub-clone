import React, { useState } from "react";
import "./Products.css";


const products = [
  {
    id: 1,
    category: "Feminine Hygiene Care",
    title: "Dreamease Feminine Hygiene Care",
    desc: "Premium feminine hygiene and intimate wellness essentials designed for comfort and protection.",
    tags: [
      "Disposable Period Panty",
      "Sanitary Pads",
      "Menstrual Cup",
    ],
    extraCount: 4,
  },

  {
    id: 2,
    category: "Baby Care",
    title: "Dreamease Baby Care",
    desc: "Safe, soft and dermatologically tested baby hygiene products.",
    tags: [
      "Baby Diapers",
      "Baby Wipes Regular",
      "Baby Wipes Honey",
    ],
    extraCount: 2,
  },

  {
    id: 3,
    category: "Adult Incontinence",
    title: "Adult Incontinence Care",
    desc: "Comfort-focused adult care and incontinence management products.",
    tags: [
      "Adult Pant Diaper",
      "Adult Tape Diaper",
      "Underpad Sheets",
    ],
    extraCount: 4,
  },

  {
    id: 4,
    category: "Women's Wellness",
    title: "Women's Wellness Gummies",
    desc: "Daily nutrition and wellness supplements for women’s health support.",
    tags: [
      "UTI Defence Gummies",
      "Iron Gummies",
      "Calcium Gummies",
    ],
    extraCount: 1,
  },

  {
    id: 5,
    category: "Medical Disposables",
    title: "Aurum Care Medical Disposables",
    desc: "Hospital-grade disposable and surgical medical essentials.",
    tags: [
      "Infusion Set",
      "Disposable Syringes",
      "IV Cannula",
    ],
    extraCount: 12,
  },

  {
    id: 6,
    category: "Wound Care & Cotton",
    title: "Wound Care & Cotton",
    desc: "Absorbent cotton, gauze and wound dressing essentials.",
    tags: [
      "Absorbent Cotton",
      "Crepe Bandage",
      "Gauze Swabs",
    ],
    extraCount: 8,
  },

  {
    id: 7,
    category: "Orthopaedic Supports",
    title: "Orthopaedic Supports & Braces",
    desc: "Advanced orthopedic braces and rehabilitation supports.",
    tags: [
      "Cervical Collar",
      "Knee Support",
      "Lumbo Sacral Belt",
    ],
    extraCount: 120,
  },

  {
    id: 8,
    category: "Compression Garments",
    title: "Compression Stockings & Garments",
    desc: "Medical compression products designed for circulation support and recovery.",
    tags: [
      "Compression Stockings",
      "Compression Gloves",
      "Varicose Vein Stockings",
    ],
    extraCount: 9,
  },

  {
    id: 9,
    category: "Neoprene Supports",
    title: "Neoprene Supports",
    desc: "Durable neoprene orthopedic supports for active recovery and stability.",
    tags: [
      "Wrist Wrap",
      "Knee Support Hinged",
      "Shoulder Support",
    ],
    extraCount: 9,
  },

  {
    id: 10,
    category: "Foot Care",
    title: "Foot Care Range",
    desc: "Orthotic and silicone-based foot support products.",
    tags: [
      "Silicone Insole",
      "Heel Cushion",
      "Toe Separator",
    ],
    extraCount: 16,
  },

  {
    id: 11,
    category: "Finger Splints",
    title: "Finger Splints",
    desc: "Protective and corrective splints for finger rehabilitation and support.",
    tags: [
      "Finger Cot",
      "Finger Extension Splint",
      "Mallet Finger Splint",
    ],
    extraCount: 0,
  },

  {
    id: 12,
    category: "Fracture Aids",
    title: "Fracture Aids",
    desc: "Immobilization and fracture management support products.",
    tags: [
      "Arm Sling",
      "Clavicle Brace",
      "Cast Cover",
    ],
    extraCount: 10,
  },

  {
    id: 13,
    category: "Traction Kits",
    title: "Traction Kits",
    desc: "Professional orthopedic traction systems and accessories.",
    tags: [
      "Cervical Traction Kit",
      "Pelvic Traction Belt",
      "Traction Pulley",
    ],
    extraCount: 7,
  },

  {
    id: 14,
    category: "Physiotherapy",
    title: "Physiotherapy & Rehabilitation",
    desc: "Recovery, rehabilitation and physiotherapy exercise products.",
    tags: [
      "Resistance Bands",
      "Exercise Ball",
      "Heating Pad",
    ],
    extraCount: 22,
  },

  {
    id: 15,
    category: "Medical Technologies",
    title: "Medical Technologies",
    desc: "Healthcare devices and therapeutic technology solutions.",
    tags: [
      "Nebuliser",
      "Spirometer",
      "Air Mattress",
    ],
    extraCount: 4,
  },

  {
    id: 16,
    category: "Walking Aids",
    title: "Walking Aids & Mobility",
    desc: "Mobility and rehabilitation support equipment for patient care.",
    tags: [
      "Wheelchair",
      "Walker",
      "Walking Stick",
    ],
    extraCount: 10,
  },

  {
    id: 17,
    category: "Surgical Dressing",
    title: "Surgical Dressing",
    desc: "Professional surgical dressing and fixation products.",
    tags: [
      "POP Bandage",
      "Microporous Tape",
      "Cannula Fixator",
    ],
    extraCount: 5,
  },

  {
    id: 18,
    category: "Sport Gear",
    title: "Samson Sport Gear",
    desc: "Sports supports, gym protection and athletic recovery products.",
    tags: [
      "Gym Gloves",
      "Yoga Mat",
      "Knee Support",
    ],
    extraCount: 10,
  },

  {
    id: 19,
    category: "Junior / Paediatric",
    title: "Junior / Paediatric Range",
    desc: "Orthopedic and rehabilitation products designed for children.",
    tags: [
      "Child Cervical Collar",
      "Child Arm Sling",
      "Paediatric Insoles",
    ],
    extraCount: 11,
  },
];



const categories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;

    const matchSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

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
            placeholder="Search products or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="view-toggles">
            <button
              className={`view-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
            >
              ⬜
            </button>

            <button
              className={`view-btn ${
                viewMode === "list" ? "active" : ""
              }`}
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

                <h3 className="product-card-title">
                  {product.title}
                </h3>

                <p className="product-card-desc">
                  {product.desc}
                </p>

                <div className="product-tags">
                  {product.tags.map((tag, i) => (
                    <span className="product-tag" key={i}>
                      {tag}
                    </span>
                  ))}

                  {product.extraCount > 0 && (
                    <span className="product-tag tag-extra">
                      +{product.extraCount}
                    </span>
                  )}
                </div>

                <div className="product-card-footer">

                  <button className="btn-view-details">
                    View Details →
                  </button>

                  <button
                    className="btn-quote-icon"
                    title="Request Quote"
                  >
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