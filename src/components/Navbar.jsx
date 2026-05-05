import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Icons from './Icons';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/vehicle-insurance', label: t.nav.vehicle },
    { to: '/health-insurance', label: t.nav.health },
    { to: '/life-insurance', label: t.nav.life },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (p) => location.pathname === p;

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none' }} id="main-navbar">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '72px' }}>

          {/* ── LOGO — pushed to the left ── */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginRight: '48px', flexShrink: 0 }} id="logo-link">
            <img src="/logo.png" alt="Aple Insurance" style={{ width: '34px', height: '34px', borderRadius: '8px' }} />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#fff' }}>Aple</span>
              <span className="grad-text" style={{ marginLeft: '5px' }}>Insurance</span>
            </span>
          </Link>

          {/* ── NAV LINKS — centered with flex:1 ── */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden lg:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                  color: isActive(l.to) ? '#fff' : 'var(--color-text-secondary)',
                  background: isActive(l.to) ? 'rgba(56,189,248,0.08)' : 'transparent',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (!isActive(l.to)) { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}}
                onMouseLeave={e => { if (!isActive(l.to)) { e.target.style.color = 'var(--color-text-secondary)'; e.target.style.background = 'transparent'; }}}
              >{l.label}</Link>
            ))}
          </div>

          {/* ── RIGHT: CTA → Language (far right) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto', flexShrink: 0 }}>

            {/* CTA Button — comes FIRST */}
            <Link to="/quote" className="hidden lg:inline-flex" id="nav-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '9px 22px', borderRadius: '12px',
                fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap',
                background: 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent))',
                color: '#fff', border: 'none', cursor: 'pointer',
                boxShadow: '0 2px 16px rgba(2, 132, 199, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(2,132,199,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(2,132,199,0.2)'; }}
            >
              {t.hero.cta1}
            </Link>

            {/* Divider line */}
            <div className="hidden lg:block" style={{ width: '1px', height: '24px', background: 'rgba(56,189,248,0.08)' }} />

            {/* Language Toggle — at the FAR RIGHT */}
            <div style={{ display: 'flex', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(56,189,248,0.08)', background: 'rgba(5,10,24,0.5)' }}>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '7px 14px', fontSize: '0.75rem', fontWeight: 600,
                  background: lang === 'en' ? 'rgba(56,189,248,0.12)' : 'transparent',
                  color: lang === 'en' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.25s ease',
                  fontFamily: 'Plus Jakarta Sans',
                }}
              >EN</button>
              <button
                onClick={() => setLang('mr')}
                style={{
                  padding: '7px 14px', fontSize: '0.75rem', fontWeight: 600,
                  background: lang === 'mr' ? 'rgba(56,189,248,0.12)' : 'transparent',
                  color: lang === 'mr' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  border: 'none', borderLeft: '1px solid rgba(56,189,248,0.06)',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                }}
              >मराठी</button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
              style={{ padding: '8px', borderRadius: '10px', background: 'transparent', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', marginLeft: '4px' }}
              id="mobile-menu-btn"
            >
              {mobileOpen
                ? <Icons.X style={{ width: 22, height: 22 }} />
                : <Icons.Menu style={{ width: 22, height: 22 }} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <>
          <div className="mobile-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className={`mobile-drawer lg:hidden ${mobileOpen ? 'open' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo.png" alt="" style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                  Aple<span className="grad-text" style={{ marginLeft: '4px' }}>Insurance</span>
                </span>
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ padding: '8px', background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                <Icons.X style={{ width: 20, height: 20 }} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {links.map((l) => (
                <Link key={l.to} to={l.to}
                  style={{
                    padding: '14px 18px', borderRadius: '14px', fontSize: '0.92rem', fontWeight: 500,
                    color: isActive(l.to) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    background: isActive(l.to) ? 'rgba(56,189,248,0.06)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >{l.label}</Link>
              ))}
            </div>

            <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid rgba(56,189,248,0.05)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/quote" className="btn-main" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
                {t.hero.cta1}
              </Link>
              <div style={{ display: 'flex', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(56,189,248,0.08)' }}>
                <button onClick={() => setLang('en')} style={{ flex: 1, padding: '12px', fontSize: '0.82rem', fontWeight: 600, background: lang === 'en' ? 'rgba(56,189,248,0.1)' : 'transparent', color: lang === 'en' ? 'var(--color-accent)' : 'var(--color-text-muted)', border: 'none', cursor: 'pointer' }}>English</button>
                <button onClick={() => setLang('mr')} style={{ flex: 1, padding: '12px', fontSize: '0.82rem', fontWeight: 600, background: lang === 'mr' ? 'rgba(56,189,248,0.1)' : 'transparent', color: lang === 'mr' ? 'var(--color-accent)' : 'var(--color-text-muted)', border: 'none', borderLeft: '1px solid rgba(56,189,248,0.06)', cursor: 'pointer' }}>मराठी</button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
