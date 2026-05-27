import './Home.css';
import { Link } from 'react-router-dom';

import heroImg from '../assets/hero-medical.jpg';
import orthopedicImg from '../assets/orthopedic.jpg';
import surgicalImg from '../assets/surgical.jpg';
import hygieneImg from '../assets/hygiene.jpg';
import equipmentImg from '../assets/equipment.jpg';
import physiotherapyImg from '../assets/physiotherapy.jpg';
import babyImg from '../assets/baby.jpg';
import adultImg from '../assets/adult.jpg';

// ── 1. HERO ──────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Trusted by hospitals, clinics &amp; pharmacies
          </div>
          <h1 className="hero-title">
            Trusted Medical <br />
            &amp; <span className="hero-highlight">Healthcare</span> <br />
            Distribution <br />
            Partner
          </h1>
          <p className="hero-sub">
            Supplying surgical, orthopedic, healthcare &amp; medical products
            across India — with the reliability hospitals depend on and the
            care every patient deserves.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn-primary">Explore Products →</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
            <Link to="/wholesale" className="btn-link">Wholesale Inquiry →</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">1,200+</span>
              <span className="stat-label">B2B Clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">24h</span>
              <span className="stat-label">Avg. Dispatch</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrapper">
            <img
              src={heroImg}
              alt="Medical products"
              className="hero-img"
            />
            <div className="hero-card top-right">
              <span className="card-icon">🚚</span>
              <div>
                <div className="card-title">Pan-India delivery</div>
                <div className="card-sub">Same-day dispatch</div>
              </div>
            </div>
            <div className="hero-card bottom-left">
              <span className="card-icon">🛡️</span>
              <div>
                <div className="card-title">ISO-grade quality</div>
                <div className="card-sub">Verified suppliers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 2. PRODUCTS ──────────────────────────────────────
function ProductsSection() {
  const products = [
    { name: 'Orthopedic Products', desc: 'Supports, braces & mobility aids', img: orthopedicImg, link: '/products/orthopedic' },
    { name: 'Surgical & Medical Disposables', desc: 'Hospital-grade disposables', img: surgicalImg, link: '/products/surgical' },
    { name: 'Hygiene Care', desc: 'Personal & intimate hygiene', img: hygieneImg, link: '/products/hygiene' },
    { name: 'Medical Equipment', desc: 'Devices for care & recovery', img: equipmentImg, link: '/products/equipment' },
    { name: 'Physiotherapy Products', desc: 'Rehab & recovery essentials', img: physiotherapyImg, link: '/products/physiotherapy' },
    { name: 'Baby Care', desc: 'Gentle care for little ones', img: babyImg, link: '/products/baby' },
    { name: 'Adult Care', desc: 'Comfort & dignity', img: adultImg, link: '/products/adult' },
  ];
  return (
    <section className="products-section">
      <div className="section-inner">
        <div className="section-label">PRODUCT RANGE</div>
        <h2 className="section-title">A complete healthcare catalog</h2>
        <p className="section-sub">From orthopedic supports to hospital-grade disposables — sourced from quality-certified manufacturers.</p>
        <div className="products-grid">
          {products.map((product, index) => (
            <Link to={product.link} className="product-card" key={index}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-desc">{product.desc}</div>
                </div>
                <div className="product-arrow">→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 3. WHY CHOOSE US ─────────────────────────────────
function WhyChooseUs() {
  const features = [
    { icon: '🤝', title: 'Trusted Distribution', desc: 'Verified, compliant supply chain partners across India.' },
    { icon: '✅', title: 'Quality Products', desc: 'Hospital-grade products from certified manufacturers.' },
    { icon: '⚡', title: 'Fast Supply', desc: 'Same-day dispatch and reliable pan-India delivery.' },
    { icon: '📦', title: 'Wide Product Range', desc: '9+ categories, 500+ SKUs under a single roof.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Direct distributor pricing for wholesale buyers.' },
    { icon: '📞', title: 'Professional Support', desc: 'Dedicated B2B support team for every inquiry.' },
  ];
  return (
    <section className="why-section">
      <div className="section-inner">
        <div className="section-label">WHY CHOOSE US</div>
        <h2 className="section-title">Built on reliability and care</h2>
        <p className="section-sub">Every product, every shipment, every relationship — handled with the precision healthcare demands.</p>
        <div className="why-grid">
          {features.map((f, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{f.icon}</div>
              <h3 className="why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. INDUSTRY TRUST ────────────────────────────────
function IndustryTrust() {
  const clients = ['🏨 Hospitals', '👨‍⚕️ Doctors', '🏪 Clinics', '💊 Pharmacies', '🛒 Retail Customers'];
  return (
    <section className="industry-section">
      <div className="section-inner">
        <div className="section-label">INDUSTRY TRUST</div>
        <h2 className="section-title">Serving every link in the care chain</h2>
        <p className="section-sub">From large hospitals to neighborhood pharmacies, we keep the entire healthcare ecosystem stocked.</p>
        <div className="clients-row">
          {clients.map((c, i) => (
            <div className="client-pill" key={i}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. TESTIMONIALS ──────────────────────────────────
function Testimonials() {
  const reviews = [
    { text: 'HealthHub has been our preferred distributor for over two years. Dependable supply and excellent product quality.', name: 'Dr. R. Patel', role: 'Multi-specialty Clinic, Bhavnagar' },
    { text: 'Their wholesale pricing and fast dispatch let us keep our pharmacy fully stocked without effort.', name: 'Aarav Medical Store', role: 'Pharmacy Owner' },
    { text: 'Quality of orthopedic and surgical disposables is consistent. A truly professional team.', name: 'Procurement Lead', role: 'Private Hospital' },
  ];
  return (
    <section className="testi-section">
      <div className="section-inner">
        <div className="section-label">TESTIMONIALS</div>
        <h2 className="section-title">Trusted by people who matter most</h2>
        <div className="testi-grid">
          {reviews.map((r, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{r.text}"</p>
              <div className="testi-name">{r.name}</div>
              <div className="testi-role">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. CTA BANNER ────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-section">
      <div className="section-inner">
        <div className="cta-card">
          <div className="cta-left">
            <h2 className="cta-title">Become a partner of India's most reliable healthcare distributor.</h2>
            <p className="cta-sub">Bulk pricing, dedicated B2B support and fast dispatch — for hospitals, clinics, pharmacies and medical stores.</p>
          </div>
          <div className="cta-btns">
            <a href="/wholesale" className="cta-btn-white">Wholesale Inquiry</a>
            <a href="https://wa.me/918347480205" className="cta-btn-green" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MAIN HOME — always at the bottom ─────────────────
function Home() {
  return (
    <div className="home">
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustryTrust />
      <Testimonials />
      <CTABanner />
    </div>
  );
}

export default Home;
