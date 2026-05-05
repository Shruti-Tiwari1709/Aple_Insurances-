import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from '../components/Icons';

function Reveal({ children, className = '' }) {
  const [ref, vis] = useScrollAnimation(0.1);
  return <div ref={ref} className={`${className} ${vis ? 'anim-up' : ''}`} style={{ opacity: vis ? 1 : 0 }}>{children}</div>;
}

export default function ContactPage() {
  const { t } = useLanguage(); const c = t.contactPage;
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const up = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  return (
    <main>
      <section className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }} id="contact-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '100px', maxWidth: '720px', textAlign: 'center' }}>
          <div className="anim-up">
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>{c.title}</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>{c.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="sec" id="contact-form">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '36px' }} className="lg:!grid-cols-[3fr_2fr]">
            <Reveal>
              <div className="glass-static" style={{ padding: '48px 44px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div className="icon-box emerald" style={{ margin: '0 auto 24px', width: 64, height: 64 }}><Icons.Check style={{ width: 32, height: 32 }} /></div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Thank you!</h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                      <div><label className="label">{c.form.name}</label><input className="input" value={form.name} onChange={up('name')} required /></div>
                      <div><label className="label">{c.form.phone}</label><input className="input" type="tel" value={form.phone} onChange={up('phone')} required /></div>
                    </div>
                    <div><label className="label">{c.form.email}</label><input className="input" type="email" value={form.email} onChange={up('email')} required /></div>
                    <div><label className="label">{c.form.message}</label><textarea className="input" style={{ minHeight: '140px', resize: 'none' }} value={form.message} onChange={up('message')} required /></div>
                    <button type="submit" className="btn-main" style={{ justifyContent: 'center', padding: '16px', marginTop: '4px' }}>{c.form.submit}</button>
                  </form>
                )}
              </div>
            </Reveal>
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="glass-static" style={{ padding: '40px 36px' }}>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>{c.info}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {[{ Icon: Icons.Phone, text: '+91 99999 99999', color: 'cyan' },{ Icon: Icons.Mail, text: 'hello@apleinsurance.in', color: 'gold' },{ Icon: Icons.MapPin, text: 'Mumbai, Maharashtra, India', color: 'emerald' }].map((it, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                        <div className={`icon-box ${it.color}`} style={{ width: 48, height: 48, minWidth: 48 }}><it.Icon style={{ width: 20, height: 20 }} /></div>
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{it.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-static" style={{ overflow: 'hidden' }}>
                  <div style={{ padding: '28px 36px 16px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>{c.map}</h3>
                  </div>
                  <div className="map-box" style={{ margin: '0 24px 24px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <Icons.MapPin style={{ width: 32, height: 32, margin: '0 auto 12px', opacity: 0.35 }} />
                      <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Map will be integrated here</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
