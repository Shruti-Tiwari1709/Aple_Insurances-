import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid rgba(56,189,248,0.04)', background: 'linear-gradient(180deg, var(--color-bg-primary), #030712)' }} id="footer">
      <div className="wrap" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                Aple<span className="grad-text" style={{ marginLeft: '5px' }}>Insurance</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '28px' }}>{t.footer.tagline}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Fb', 'Tw', 'In', 'Li'].map((s) => (
                <a key={s} href="#" style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.72rem', fontWeight: 700, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.target.style.color = 'var(--color-accent)'; e.target.style.borderColor = 'rgba(56,189,248,0.2)'; }}
                  onMouseLeave={e => { e.target.style.color = 'var(--color-text-muted)'; e.target.style.borderColor = 'rgba(56,189,248,0.06)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px' }}>{t.footer.quickLinks}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[{ to: '/', l: t.nav.home }, { to: '/about', l: t.nav.about }, { to: '/contact', l: t.nav.contact }, { to: '/quote', l: t.hero.cta1 }].map(lk => (
                <Link key={lk.to} to={lk.to} style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}
                >{lk.l}</Link>
              ))}
            </div>
          </div>

          {/* Insurance */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px' }}>{t.footer.insurance}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[{ to: '/vehicle-insurance', l: t.nav.vehicle }, { to: '/health-insurance', l: t.nav.health }, { to: '/life-insurance', l: t.nav.life }].map(lk => (
                <Link key={lk.to} to={lk.to} style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}
                >{lk.l}</Link>
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', color: '#fff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px' }}>{t.footer.connect}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[{ code: 'en', label: 'English' }, { code: 'mr', label: 'मराठी' }].map(l => (
                <button key={l.code} onClick={() => setLang(l.code)}
                  style={{ textAlign: 'left', fontSize: '0.88rem', padding: '12px 18px', borderRadius: '12px', background: lang === l.code ? 'rgba(56,189,248,0.06)' : 'transparent', color: lang === l.code ? 'var(--color-accent)' : 'var(--color-text-secondary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Plus Jakarta Sans' }}
                >{l.label}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(56,189,248,0.04)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>© 2026 Aple Insurance. {t.footer.rights}</p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
            >{t.footer.privacy}</a>
            <a href="#" style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
            >{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
