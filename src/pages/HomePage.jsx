import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from '../components/Icons';

const testimonials = [
  { name: 'Rajesh Kumar', city: 'Mumbai', text: 'Best insurance experience! The claim process was incredibly smooth and fast. Highly recommended for everyone.', rating: 5 },
  { name: 'Priya Sharma', city: 'Delhi', text: 'Aple Insurance made health coverage so simple. Their team walked me through every detail patiently.', rating: 5 },
  { name: 'Amit Patel', city: 'Pune', text: 'Got my vehicle insured in just 3 minutes. The premium is very competitive and the coverage is comprehensive.', rating: 5 },
];

function Reveal({ children, className = '', delay = '' }) {
  const [ref, vis] = useScrollAnimation(0.1);
  return <div ref={ref} className={`${className} ${vis ? `anim-up ${delay}` : ''}`} style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.3s' }}>{children}</div>;
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      {/* ═══════ HERO ═══════ */}
      <section className="hero-bg" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }} id="hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center', paddingTop: '120px', paddingBottom: '80px' }} className="lg:!grid-cols-2">
            {/* Left */}
            <div className="anim-up" style={{ maxWidth: '580px' }}>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px', background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)', marginBottom: '36px' }}>
                <Icons.Sparkles style={{ width: 16, height: 16, color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)' }}>#1 Trusted Insurance Platform in India</span>
              </div>

              {/* Heading */}
              <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '28px' }}>
                {t.hero.headline.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="grad-text">{t.hero.headline.split(' ').slice(-2).join(' ')}</span>
              </h1>

              {/* Subtext */}
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '44px', maxWidth: '460px' }}>
                {t.hero.subtext}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
                <Link to="/quote" className="btn-main" style={{ padding: '16px 36px', fontSize: '0.95rem' }} id="hero-cta">
                  {t.hero.cta1}
                  <Icons.ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
                <Link to="/vehicle-insurance" className="btn-outline" style={{ padding: '16px 36px', fontSize: '0.95rem' }} id="hero-explore">
                  {t.hero.cta2}
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {[t.trust.badge1, t.trust.badge2, t.trust.badge3, t.trust.badge4].map((b, i) => (
                  <div key={i} className="trust-pill">
                    <Icons.Check style={{ width: 14, height: 14, color: 'var(--color-emerald)' }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:flex anim-right" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '420px', height: '420px' }}>
                {/* Glow */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)' }} />

                {/* Center logo */}
                <div className="anim-float" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '140px', height: '140px', borderRadius: '32px', background: 'linear-gradient(145deg, rgba(56,189,248,0.08), rgba(56,189,248,0.02))', border: '1px solid rgba(56,189,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 80px rgba(56,189,248,0.08)' }}>
                  <img src="/logo.png" alt="" style={{ width: '80px', height: '80px' }} />
                </div>

                {/* Orbiting icons */}
                {[
                  { Icon: Icons.Car, x: '8%', y: '10%', d: '0s', bg: 'rgba(56,189,248,0.06)', bc: 'rgba(56,189,248,0.1)', c: 'var(--color-accent)' },
                  { Icon: Icons.Heart, x: '76%', y: '6%', d: '1s', bg: 'rgba(251,113,133,0.06)', bc: 'rgba(251,113,133,0.1)', c: 'var(--color-rose)' },
                  { Icon: Icons.Users, x: '80%', y: '72%', d: '2s', bg: 'rgba(251,191,36,0.06)', bc: 'rgba(251,191,36,0.1)', c: 'var(--color-gold)' },
                  { Icon: Icons.Shield, x: '4%', y: '70%', d: '3s', bg: 'rgba(52,211,153,0.06)', bc: 'rgba(52,211,153,0.1)', c: 'var(--color-emerald)' },
                ].map((it, i) => (
                  <div key={i} className="anim-float"
                    style={{ position: 'absolute', left: it.x, top: it.y, width: '60px', height: '60px', borderRadius: '18px', background: it.bg, border: `1px solid ${it.bc}`, display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: it.d, animationDuration: '5s' }}
                  >
                    <it.Icon style={{ width: 26, height: 26, color: it.c }} />
                  </div>
                ))}

                {/* Rings */}
                <div style={{ position: 'absolute', inset: '48px', borderRadius: '50%', border: '1px solid rgba(56,189,248,0.04)' }} />
                <div style={{ position: 'absolute', inset: '96px', borderRadius: '50%', border: '1px solid rgba(56,189,248,0.06)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INSURANCE CARDS ═══════ */}
      <section className="sec" id="plans">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{t.insurance.title}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{t.insurance.subtitle}</p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {[
              { to: '/vehicle-insurance', Icon: Icons.Car, color: 'cyan', title: t.insurance.vehicleTitle, desc: t.insurance.vehicleDesc },
              { to: '/health-insurance', Icon: Icons.Heart, color: 'rose', title: t.insurance.healthTitle, desc: t.insurance.healthDesc },
              { to: '/life-insurance', Icon: Icons.Users, color: 'gold', title: t.insurance.lifeTitle, desc: t.insurance.lifeDesc },
            ].map((card, i) => (
              <Reveal key={card.to} delay={`delay-${i + 1}`}>
                <Link to={card.to} className="glass" style={{ display: 'block', padding: '40px 36px', cursor: 'pointer', height: '100%' }} id={`card-${card.color}`}>
                  <div className={`icon-box ${card.color}`} style={{ marginBottom: '28px' }}>
                    <card.Icon />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{card.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '32px' }}>{card.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontSize: '0.88rem', fontWeight: 600 }}>
                    {t.insurance.learnMore}
                    <Icons.ArrowRight style={{ width: 16, height: 16 }} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="sec" style={{ background: 'var(--color-bg-secondary)' }} id="why">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{t.why.title}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{t.why.subtitle}</p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { Icon: Icons.Bolt, color: 'cyan', title: t.why.r1, desc: t.why.r1d },
              { Icon: Icons.CurrencyRupee, color: 'gold', title: t.why.r2, desc: t.why.r2d },
              { Icon: Icons.Clock, color: 'emerald', title: t.why.r3, desc: t.why.r3d },
              { Icon: Icons.HandThumbUp, color: 'purple', title: t.why.r4, desc: t.why.r4d },
            ].map((item, i) => (
              <Reveal key={i} delay={`delay-${i + 1}`}>
                <div className="glass" style={{ padding: '36px 28px', textAlign: 'center', height: '100%' }}>
                  <div className={`icon-box ${item.color}`} style={{ margin: '0 auto 24px' }}>
                    <item.Icon />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="sec" id="testimonials">
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{t.testimonials.title}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{t.testimonials.subtitle}</p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={`delay-${i + 1}`}>
                <div className="test-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Icons.Star key={j} style={{ width: 16, height: 16, color: 'var(--color-gold)' }} />
                    ))}
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '32px', flex: 1 }}>"{item.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-accent), var(--color-gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>{item.name}</p>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '3px' }}>{item.city}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA BANNER ═══════ */}
      <section style={{ padding: '0 0 120px' }} id="cta">
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <Reveal>
            <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-accent-deep), #0369a1)' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
              <div style={{ position: 'relative', padding: '80px 48px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>{t.ctaBanner.title}</h2>
                <p style={{ color: 'rgba(186,230,253,0.9)', marginBottom: '40px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{t.ctaBanner.subtitle}</p>
                <Link to="/quote" className="btn-gold" style={{ padding: '16px 40px', fontSize: '0.95rem' }} id="banner-cta">
                  {t.ctaBanner.cta}
                  <Icons.ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
