import { useState } from 'react';
import './index.css';

const NAV_LINKS = ['About Us', 'Services', 'Coverage', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(7,20,7,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 40px', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ fontWeight: 700, fontSize: 20, color: 'var(--green-light)', letterSpacing: '-0.3px' }}>
        Sri Vijetha <span style={{ color: 'var(--text3)', fontWeight: 400 }}>Logistics</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
            color: 'var(--text2)', textDecoration: 'none', fontSize: 14,
            fontWeight: 500, padding: '6px 14px', borderRadius: 'var(--radius-sm)',
            transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--green-light)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >{link}</a>
        ))}
      </div>
    </nav>
  );
}

function Section({ id, label, children }) {
  return (
    <section id={id} style={{ padding: '80px 40px', maxWidth: 960, margin: '0 auto', width: '100%' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green-bright)', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
        {label}
      </div>
      {children}
    </section>
  );
}

function PlaceholderCard({ text }) {
  return (
    <div style={{
      background: 'var(--green-mid)', border: '1px dashed var(--border)',
      borderRadius: 'var(--radius)', padding: 32, textAlign: 'center',
      color: 'var(--text3)', fontSize: 14, fontStyle: 'italic',
    }}>{text}</div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '100px 40px 60px',
        background: 'radial-gradient(ellipse at 50% 40%, #163516 0%, #0d200d 50%, #071407 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Leaf decoration */}
        <div style={{ fontSize: 48, marginBottom: 24, opacity: 0.8 }}>🌿</div>

        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-bright)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>
          Hyderabad, India
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 700,
          color: 'var(--text)', letterSpacing: '-2px', lineHeight: 1.1,
          marginBottom: 24, fontFamily: 'IBM Plex Sans, sans-serif',
        }}>
          Sri Vijetha<br />
          <span style={{ color: 'var(--green-light)' }}>Logistics</span>
        </h1>
        <p style={{
          fontSize: 18, color: 'var(--text2)', maxWidth: 520,
          lineHeight: 1.7, marginBottom: 40,
        }}>
          Safe, reliable and compliant transport of hazardous chemicals across India.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#about-us" style={{
            background: 'var(--green-accent)', color: '#fff', textDecoration: 'none',
            padding: '12px 28px', borderRadius: 999, fontWeight: 600, fontSize: 15,
          }}>Learn More</a>
          <a href="#contact" style={{
            background: 'transparent', color: 'var(--green-light)', textDecoration: 'none',
            padding: '12px 28px', borderRadius: 999, fontWeight: 600, fontSize: 15,
            border: '1px solid var(--green-accent)',
          }}>Contact Us</a>
        </div>

        {/* Down arrow */}
        <div style={{ marginTop: 60, color: 'var(--text3)', fontSize: 24, animation: 'bounce 2s infinite' }}>↓</div>
      </div>

      {/* About Us */}
      <Section id="about-us" label="About Us">
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', marginBottom: 24, letterSpacing: '-0.5px' }}>
          Who We Are
        </h2>
        <PlaceholderCard text="About us content coming soon — share your company story and we'll add it here." />
      </Section>

      <div style={{ height: 1, background: 'var(--border)', maxWidth: 960, margin: '0 auto' }} />

      {/* Services */}
      <Section id="services" label="Our Services">
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', marginBottom: 24, letterSpacing: '-0.5px' }}>
          What We Do
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {['Service 1', 'Service 2', 'Service 3'].map(s => (
            <PlaceholderCard key={s} text={`${s} — content coming soon`} />
          ))}
        </div>
      </Section>

      <div style={{ height: 1, background: 'var(--border)', maxWidth: 960, margin: '0 auto' }} />

      {/* Coverage */}
      <Section id="coverage" label="Coverage">
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', marginBottom: 24, letterSpacing: '-0.5px' }}>
          Where We Operate
        </h2>
        <PlaceholderCard text="Coverage areas coming soon — share your routes and regions and we'll add them here." />
      </Section>

      <div style={{ height: 1, background: 'var(--border)', maxWidth: 960, margin: '0 auto' }} />

      {/* Contact */}
      <Section id="contact" label="Contact Us">
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', marginBottom: 32, letterSpacing: '-0.5px' }}>
          Get In Touch
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>

          {/* Founder */}
          <div style={{ background: 'var(--green-mid)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green-bright)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Founder</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: 'var(--text)' }}>Battula Prasad</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+919848037345" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text2)', textDecoration: 'none', fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>📞</span> +91 98480 37345
              </a>
              <a href="mailto:battula.transport@yahoo.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text2)', textDecoration: 'none', fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>✉</span> battula.transport@yahoo.com
              </a>
            </div>
          </div>

          {/* Proprietor */}
          <div style={{ background: 'var(--green-mid)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green-bright)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Proprietor</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: 'var(--text)' }}>Battula Sashank</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+919703366668" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text2)', textDecoration: 'none', fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>📞</span> +91 97033 66668
              </a>
              <a href="mailto:shasankbattula@vijethalogistics.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text2)', textDecoration: 'none', fontSize: 14 }}>
                <span style={{ fontSize: 18 }}>✉</span> shasankbattula@vijethalogistics.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div style={{ background: 'var(--green-mid)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green-bright)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Address</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text2)', fontSize: 14, lineHeight: 1.8 }}>
              <span style={{ fontSize: 20, marginTop: 2 }}>📍</span>
              <span>Flat 401, RV'S Sarala Sadan,<br />Sri Nagar Colony, Yellareddyguda,<br />Hyderabad — 500072</span>
            </div>
          </div>

        </div>
      </Section>

      {/* Footer */}
      <footer style={{
        background: 'var(--green-deep)', borderTop: '1px solid var(--border)',
        padding: '28px 40px', textAlign: 'center',
        color: 'var(--text3)', fontSize: 13,
      }}>
        <div style={{ fontWeight: 600, color: 'var(--text2)', marginBottom: 6 }}>Sri Vijetha Logistics</div>
        <div>© {new Date().getFullYear()} Sri Vijetha Logistics Pvt. Ltd. · Hyderabad, India</div>
      </footer>
    </div>
  );
}
