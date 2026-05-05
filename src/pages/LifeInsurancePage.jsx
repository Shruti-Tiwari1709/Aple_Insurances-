import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from '../components/Icons';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, vis] = useScrollAnimation(0.1);
  return <div ref={ref} className={`${className} ${vis ? `anim-up ${delay}` : ''}`} style={{ opacity: vis ? 1 : 0 }}>{children}</div>;
}

export default function LifeInsurancePage() {
  const { t } = useLanguage(); const l = t.lifePage;
  return (
    <main>
      <section className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }} id="life-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '56px', alignItems: 'center' }} className="lg:!grid-cols-2">
            <div className="anim-up" style={{ maxWidth: '560px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px', background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.12)', marginBottom: '36px' }}>
                <Icons.Users style={{ width: 16, height: 16, color: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gold)' }}>Life Insurance</span>
              </div>
              <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: '24px' }}>{l.hero}</h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '440px' }}>{l.sub}</p>
              <Link to="/quote" className="btn-main" style={{ padding: '16px 36px', fontSize: '0.95rem' }}>{l.cta} <Icons.ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
            <div className="hidden lg:flex anim-right" style={{ justifyContent: 'center' }}>
              <div className="anim-float" style={{ width: '320px', height: '320px', borderRadius: '32px', background: 'linear-gradient(145deg, rgba(251,191,36,0.06), rgba(251,191,36,0.015))', border: '1px solid rgba(251,191,36,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 100px rgba(251,191,36,0.04)' }}>
                <Icons.Users style={{ width: '120px', height: '120px', color: 'var(--color-gold)', opacity: 0.4 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="life-coverage">
        <div className="wrap">
          <Reveal><div style={{ textAlign: 'center', marginBottom: '64px' }}><h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{l.coverage}</h2></div></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[{ Icon: Icons.Shield, color: 'gold', title: l.protection, desc: l.protectionDesc },{ Icon: Icons.LockClosed, color: 'cyan', title: l.financial, desc: l.financialDesc },{ Icon: Icons.Clock, color: 'emerald', title: l.planning, desc: l.planningDesc }].map((c, i) => (
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
      <section className="sec" style={{ background: 'var(--color-bg-secondary)' }} id="life-benefits">
        <div className="wrap">
          <Reveal><div style={{ textAlign: 'center', marginBottom: '64px' }}><h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{l.benefits}</h2></div></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[l.b1, l.b2, l.b3, l.b4].map((b, i) => (
              <Reveal key={i} delay={`delay-${i+1}`}>
                <div className="glass" style={{ padding: '36px 24px', textAlign: 'center' }}>
                  <div className="icon-box gold" style={{ margin: '0 auto 20px' }}><Icons.Check /></div>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" id="life-cta">
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <Reveal>
            <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', background: 'linear-gradient(135deg, #92400e, var(--color-gold-deep))' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
              <div style={{ position: 'relative', padding: '80px 48px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>{l.hero}</h2>
                <p style={{ color: 'rgba(254,243,199,0.85)', marginBottom: '40px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{l.sub}</p>
                <Link to="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#92400e', fontWeight: 700, padding: '16px 40px', borderRadius: '16px', fontSize: '0.95rem', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                >{l.cta} <Icons.ArrowRight style={{ width: 16, height: 16 }} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
