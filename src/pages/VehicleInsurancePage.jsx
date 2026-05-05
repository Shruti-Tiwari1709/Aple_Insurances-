import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from '../components/Icons';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, vis] = useScrollAnimation(0.1);
  return <div ref={ref} className={`${className} ${vis ? `anim-up ${delay}` : ''}`} style={{ opacity: vis ? 1 : 0 }}>{children}</div>;
}

export default function VehicleInsurancePage() {
  const { t } = useLanguage();
  const v = t.vehiclePage;
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '' });

  return (
    <main>
      <section className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }} id="vehicle-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '56px', alignItems: 'center' }} className="lg:!grid-cols-2">
            <div className="anim-up" style={{ maxWidth: '560px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px', background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)', marginBottom: '36px' }}>
                <Icons.Car style={{ width: 16, height: 16, color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)' }}>Vehicle Insurance</span>
              </div>
              <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: '24px' }}>{v.hero}</h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '440px' }}>{v.sub}</p>
              <Link to="/quote" className="btn-main" style={{ padding: '16px 36px', fontSize: '0.95rem' }}>
                {v.cta} <Icons.ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
            <div className="hidden lg:flex anim-right" style={{ justifyContent: 'center' }}>
              <div className="anim-float" style={{ width: '320px', height: '320px', borderRadius: '32px', background: 'linear-gradient(145deg, rgba(56,189,248,0.06), rgba(56,189,248,0.015))', border: '1px solid rgba(56,189,248,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 100px rgba(56,189,248,0.05)' }}>
                <Icons.Car style={{ width: '120px', height: '120px', color: 'var(--color-accent)', opacity: 0.4 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="vehicle-coverage">
        <div className="wrap">
          <Reveal><div style={{ textAlign: 'center', marginBottom: '64px' }}><h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{v.coverage}</h2></div></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { Icon: Icons.Shield, color: 'cyan', title: v.accident, desc: v.accidentDesc },
              { Icon: Icons.LockClosed, color: 'gold', title: v.theft, desc: v.theftDesc },
              { Icon: Icons.DocumentCheck, color: 'emerald', title: v.thirdParty, desc: v.thirdPartyDesc },
            ].map((c, i) => (
              <Reveal key={i} delay={`delay-${i+1}`}>
                <div className="glass" style={{ padding: '40px 36px', height: '100%' }}>
                  <div className={`icon-box ${c.color}`} style={{ marginBottom: '28px' }}><c.Icon /></div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{c.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--color-bg-secondary)' }} id="vehicle-benefits">
        <div className="wrap">
          <Reveal><div style={{ textAlign: 'center', marginBottom: '64px' }}><h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{v.benefits}</h2></div></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[v.b1, v.b2, v.b3, v.b4].map((b, i) => (
              <Reveal key={i} delay={`delay-${i+1}`}>
                <div className="glass" style={{ padding: '36px 24px', textAlign: 'center' }}>
                  <div className="icon-box cyan" style={{ margin: '0 auto 20px' }}><Icons.Check /></div>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="vehicle-form">
        <div className="wrap" style={{ maxWidth: '560px' }}>
          <Reveal>
            <div className="glass-static" style={{ padding: '48px 40px' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '36px', textAlign: 'center' }}>{v.formTitle}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div><label className="label">{t.quote.fullName}</label><input className="input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                <div><label className="label">{t.quote.phone}</label><input className="input" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
                <div><label className="label">Vehicle Type</label><input className="input" placeholder="Car / Bike / Commercial" value={form.vehicle} onChange={e => setForm({...form, vehicle: e.target.value})} /></div>
                <Link to="/quote" className="btn-main" style={{ justifyContent: 'center', padding: '16px', marginTop: '8px' }}>{v.cta}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
