import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from '../components/Icons';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, vis] = useScrollAnimation(0.1);
  return <div ref={ref} className={`${className} ${vis ? `anim-up ${delay}` : ''}`} style={{ opacity: vis ? 1 : 0 }}>{children}</div>;
}

export default function AboutPage() {
  const { t } = useLanguage(); const a = t.about;
  return (
    <main>
      <section className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }} id="about-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '100px', maxWidth: '720px', textAlign: 'center' }}>
          <div className="anim-up">
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>{a.title}</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>{a.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="sec" id="mission">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <Reveal>
              <div className="glass" style={{ padding: '48px 40px', height: '100%' }}>
                <div className="icon-box cyan" style={{ marginBottom: '28px' }}><Icons.Sparkles /></div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{a.mission}</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{a.missionDesc}</p>
              </div>
            </Reveal>
            <Reveal delay="delay-1">
              <div className="glass" style={{ padding: '48px 40px', height: '100%' }}>
                <div className="icon-box gold" style={{ marginBottom: '28px' }}><Icons.Globe /></div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{a.vision}</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{a.visionDesc}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: 'var(--color-bg-secondary)' }} id="values">
        <div className="wrap">
          <Reveal><div style={{ textAlign: 'center', marginBottom: '64px' }}><h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{a.values}</h2></div></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[{ Icon: Icons.DocumentCheck, color: 'cyan', l: a.v1 },{ Icon: Icons.Heart, color: 'rose', l: a.v2 },{ Icon: Icons.Bolt, color: 'gold', l: a.v3 },{ Icon: Icons.Shield, color: 'emerald', l: a.v4 }].map((v, i) => (
              <Reveal key={i} delay={`delay-${i+1}`}>
                <div className="glass" style={{ padding: '44px 24px', textAlign: 'center' }}>
                  <div className={`icon-box ${v.color}`} style={{ margin: '0 auto 24px' }}><v.Icon /></div>
                  <p style={{ color: '#fff', fontWeight: 700, fontFamily: 'Space Grotesk', fontSize: '1rem' }}>{v.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" id="stats">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {[{ n: '10K+', l: 'Happy Customers' },{ n: '₹50Cr+', l: 'Claims Settled' },{ n: '99%', l: 'Satisfaction Rate' },{ n: '24/7', l: 'Customer Support' }].map((s, i) => (
              <Reveal key={i} delay={`delay-${i+1}`}>
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <p className="grad-text" style={{ fontFamily: 'Space Grotesk', fontSize: '2.75rem', fontWeight: 800, marginBottom: '12px' }}>{s.n}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', fontWeight: 500 }}>{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
