import React, { useState } from "react";
import "./Wholesale.css";

const supplyTypes = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Hospital Supply",
    desc: "Long-term supply contracts for hospitals & nursing homes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 2h4"/><path d="M12 14v-4"/><circle cx="12" cy="14" r="8"/>
        <path d="M9 11h6"/>
      </svg>
    ),
    title: "Pharmacy Supply",
    desc: "Volume pricing for chemists and chain pharmacies.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Clinic & Doctor Supply",
    desc: "Reliable replenishment for clinics and OPDs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Dealer Partnership",
    desc: "Become a regional dealer with margin protection.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Bulk Orders",
    desc: "Same-day dispatch with logistics across India.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Quality Assurance",
    desc: "Verified manufacturers and batch-traceable products.",
  },
];

const stats = [
  { number: "1,200+", label: "B2B CLIENTS" },
  { number: "500+", label: "SKUS" },
  { number: "24h", label: "AVG. DISPATCH" },
  { number: "9+", label: "CATEGORIES" },
];

const categoryOptions = [
  "Orthopedic",
  "Surgical & Medical Disposables",
  "Hygiene Care",
  "Medical Equipment",
  "Physiotherapy Products",
  "Baby Care",
  "Adult Care",
];

const Wholesale = () => {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    category: "Orthopedic",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hi HealthHub Solution,\n\nWholesale Inquiry:\nName: ${form.fullName}\nBusiness: ${form.businessName}\nPhone: ${form.phone}\nEmail: ${form.email}\nCategory: ${form.category}\nMessage: ${form.message}`
    );
  };

  const handleSendWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/918347480205?text=${msg}`, "_blank");
  };

  const handleDirectWhatsApp = () => {
    window.open("https://wa.me/918347480205", "_blank");
  };

  return (
    <div className="wholesale-page">

      {/* ── Hero ── */}
      <section className="wholesale-hero">
        <p className="wholesale-eyebrow">WHOLESALE &amp; DISTRIBUTION</p>
        <h1 className="wholesale-title">
          Partner with India's<br />
          most reliable<br />
          healthcare distributor.
        </h1>
        <p className="wholesale-subtitle">
          Bulk pricing, dedicated account management and pan-India dispatch for hospitals,<br />
          pharmacies, medical stores and resellers.
        </p>
      </section>

      {/* ── Supply Type Cards ── */}
      <section className="wholesale-cards-section">
        <div className="wholesale-cards-grid">
          {supplyTypes.map((item, i) => (
            <div className="wholesale-card" key={i}>
              <div className="wholesale-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="wholesale-stats">
        {stats.map((s, i) => (
          <div className="wholesale-stat" key={i}>
            <span className="wstat-number">{s.number}</span>
            <span className="wstat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Inquiry Form ── */}
      <section className="wholesale-form-section">
        <p className="wholesale-eyebrow" style={{ textAlign: "center" }}>WHOLESALE INQUIRY</p>
        <h2 className="wholesale-form-title">Tell us about your needs</h2>
        <p className="wholesale-form-subtitle">
          Share a few details and our team will respond within one business day.
        </p>

        <div className="wholesale-form-card">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name <span className="required">*</span></label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Business / Hospital Name <span className="required">*</span></label>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group form-group-full">
            <label>Category of interest</label>
            <div className="select-wrapper">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <span className="select-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group form-group-full">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={5}
            />
          </div>

          <div className="form-actions">
            <button className="btn-whatsapp-send" onClick={handleSendWhatsApp}>
              Send Inquiry via WhatsApp
            </button>
            <button className="btn-whatsapp-direct" onClick={handleDirectWhatsApp}>
              Direct WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Wholesale;
