import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Hero / Header */}
      <div className="contact-hero">
        <p className="contact-label">CONTACT</p>
        <h1 className="contact-title">
          Let's <span className="highlight">talk.</span>
        </h1>
        <p className="contact-subtitle">
          Product inquiries, wholesale partnerships, or just questions — we'd love
          to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Left: Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon phone-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className="info-text">
              <strong>Call us</strong>
              <span>7567945642</span>
              <span>8347480205</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon whatsapp-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="info-text">
              <strong>WhatsApp</strong>
              <span>8347480205</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="info-text">
              <strong>Email</strong>
              <span>Healthhubsolution03@gmail.com</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon location-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="info-text">
              <strong>Visit</strong>
              <span>Shop No. 03, Shiv Ranjani Complex</span>
              <span>Sidsar Road, Bhavnagar-364002</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon clock-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="info-text">
              <strong>Hours</strong>
              <span>Mon – Sat · 9:30 AM – 8:00 PM</span>
              <span>Sunday · Closed</span>
            </div>
          </div>
        </div>

        {/* Right: Form + Map */}
        <div className="contact-right">
          <div className="contact-form-card">
            <h2 className="form-title">Send us a message</h2>
            <p className="form-subtitle">We typically respond within one business day.</p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-send">
                  Send Message
                </button>
                <a href="tel:7567945642" className="btn-call">
                  Call 7567945642
                </a>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="map-container">
            <a
              
href="https://maps.google.com/?q=Shop+No.+03,+Shiv+Ranjani+Complex,+Sidsar+Road,+Bhavnagar,+Gujarat+364002,+India"
  target="_blank"
  rel="noopener noreferrer"
  className="map-open-link"
>
  Open in Maps ↗

            </a>
            <iframe
              title="HealthHub Location"
             src="https://maps.google.com/maps?q=Shop+No.+03,+Shiv+Ranjani+Complex,+Sidsar+Road,+Bhavnagar,+Gujarat+364002&output=embed"
      width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

