import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Database, Search, DollarSign, ArrowRight, UserCheck, Briefcase, FileText } from 'lucide-react';

const features = [
  { icon: Database, title: 'Upload Health Data', desc: 'Securely store your medical records and anonymize them for the marketplace.', color: '#00b4a0' },
  { icon: Shield, title: 'Ownership & Control', desc: 'You own your data. Only sell what you want, when you want, to whom you choose.', color: '#38bdf8' },
  { icon: Search, title: 'Data Requests', desc: 'Researchers and Doctors post specific requirements for medical data studies.', color: '#8b5cf6' },
  { icon: DollarSign, title: 'Monetize Records', desc: 'Earn rewards or payments by contributing to medical breakthroughs.', color: '#f97066' },
];

const stats = [
  { label: 'Active Sellers', value: '180K+' },
  { label: 'Data Buyers', value: '1,200+' },
  { label: 'Successful Trades', value: '45K+' },
  { label: 'Research Projects', value: '850+' },
];

const steps = [
  { num: '01', title: 'Upload & Secure', desc: 'Sellers (Patients) upload their medical data to their secure profile.' },
  { num: '02', title: 'Browse Requests', desc: 'Buyers (Researchers) post requirements for specific types of data.' },
  { num: '03', title: 'Consent to Sell', desc: 'Sellers receive requests and choose to provide data if they agree with the terms.' },
  { num: '04', title: 'Execute Exchange', desc: 'Secure data transfer is completed and compensation is disbursed instantly.' },
];

export default function Landing() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--white)' }}>
      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--gray-100)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #00b4a0, #38bdf8)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={20} color="white" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy)' }}>Medi Market</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/login" className="btn btn-secondary btn-sm">Sign In</Link>
            <Link to="/register" className="btn btn-primary btn-sm">Join Marketplace</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a5c 60%, #0e4a4a 100%)', padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(0,180,160,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(56,189,248,0.08)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="badge badge-teal" style={{ display: 'inline-flex', marginBottom: 20, background: 'rgba(0,180,160,0.15)', color: '#00d4bc' }}>
            Transforming Medical Research with Data
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', marginBottom: 20, lineHeight: 1.15 }}>
            Empowering Health Data<br />
            <span style={{ background: 'linear-gradient(90deg, #00b4a0, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Exchange & Research</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Medi Market connects patients with researchers. Securely upload your health records, browse data requests from top institutions, and contribute to medical breakthroughs on your own terms.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register?role=patient" className="btn btn-primary btn-lg">
              Start Selling Data <ArrowRight size={18} />
            </Link>
            <Link to="/register?role=buyer" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Acquire Research Data
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--teal)', padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 36, fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 12 }}>Marketplace Ecosystem</h2>
            <p style={{ color: 'var(--gray-500)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>Building the future of medical data transparency and accessibility.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {features.map(f => (
              <div key={f.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <f.icon size={24} color={f.color} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 36, fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 12 }}>How the Marketplace Works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {steps.map(step => (
              <div key={step.num} style={{ position: 'relative' }}>
                <div style={{ fontSize: 48, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gray-100)', marginBottom: 8, lineHeight: 1 }}>{step.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: 'var(--navy)' }}>{step.title}</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 15, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--navy), #0e4a4a)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Briefcase size={40} color="var(--teal)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 36, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', marginBottom: 12 }}>Ready to Join the Marketplace?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, marginBottom: 32 }}>Choose your role and start contributing to global health innovation.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register?role=patient" className="btn btn-lg" style={{ background: 'var(--teal)', color: 'white' }}>Register as Seller (Patient)</Link>
            <Link to="/register?role=buyer" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Register as Researcher</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--gray-900)', color: 'var(--gray-400)', padding: '32px 0', textAlign: 'center', fontSize: 14 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 8 }}>
            <Database size={16} color="var(--teal)" />
            <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Medi Market</span>
          </div>
          <p>© 2025 Medi Market. The Future of Medical Data Exchange.</p>
        </div>
      </footer>
    </div>
  );
}
