import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Icons from '../components/Icons';

const types = [
  { id: 'vehicle', Icon: Icons.Car, color: 'cyan' },
  { id: 'health', Icon: Icons.Heart, color: 'rose' },
  { id: 'life', Icon: Icons.Users, color: 'gold' },
];

export default function QuotePage() {
  const { t } = useLanguage(); const q = t.quote;
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: '', name: '', phone: '', email: '', age: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const up = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const labels = { vehicle: t.insurance.vehicleTitle, health: t.insurance.healthTitle, life: t.insurance.lifeTitle };
  const canNext = step === 1 ? form.type : step === 2 ? form.name && form.phone && form.email : true;

  return (
    <main>
      <section className="hero-bg" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }} id="quote">
        <div className="wrap" style={{ maxWidth: '640px', position: 'relative', zIndex: 10, width: '100%', paddingTop: '120px', paddingBottom: '80px' }}>

          <div className="anim-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>{q.title}</h1>
          </div>

          {submitted ? (
            <div className="glass-static anim-up" style={{ padding: '72px 48px', textAlign: 'center' }}>
              <div className="icon-box emerald" style={{ margin: '0 auto 28px', width: 64, height: 64 }}><Icons.Check style={{ width: 32, height: 32 }} /></div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{q.success}</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>We'll reach out to you at {form.phone}</p>
            </div>
          ) : (
            <div className="anim-up">
              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', maxWidth: '360px', margin: '0 auto 12px' }}>
                {[1, 2, 3].map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div className={`step-circle ${step > s ? 'done' : step === s ? 'active' : 'pending'}`}>
                      {step > s ? <Icons.Check style={{ width: 16, height: 16 }} /> : s}
                    </div>
                    {i < 2 && <div className={`step-bar ${step > s ? 'done' : ''}`} />}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '360px', margin: '0 auto 44px', padding: '0 4px' }}>
                {[q.step1, q.step2, q.step3].map((label, i) => (
                  <span key={i} style={{ fontSize: '0.7rem', fontWeight: 600, color: step >= i + 1 ? 'var(--color-accent)' : 'var(--color-text-muted)', textAlign: 'center', maxWidth: '90px' }}>{label}</span>
                ))}
              </div>

              <div className="glass-static" style={{ padding: '48px 44px' }}>
                {step === 1 && (
                  <div className="anim-fade">
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>{q.selectType}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {types.map(ty => (
                        <button key={ty.id} onClick={() => setForm({ ...form, type: ty.id })}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '20px',
                            padding: '22px 24px', borderRadius: '18px', textAlign: 'left', cursor: 'pointer',
                            border: `1.5px solid ${form.type === ty.id ? 'var(--color-accent)' : 'rgba(56,189,248,0.06)'}`,
                            background: form.type === ty.id ? 'rgba(56,189,248,0.05)' : 'rgba(12,22,50,0.3)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <div className={`icon-box ${ty.color}`}><ty.Icon /></div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', flex: 1 }}>{labels[ty.id]}</span>
                          {form.type === ty.id && (
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Icons.Check style={{ width: 14, height: 14, color: '#fff' }} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="anim-fade">
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>{q.step2}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div><label className="label">{q.fullName}</label><input className="input" value={form.name} onChange={up('name')} required /></div>
                      <div><label className="label">{q.phone}</label><input className="input" type="tel" value={form.phone} onChange={up('phone')} required /></div>
                      <div><label className="label">{q.email}</label><input className="input" type="email" value={form.email} onChange={up('email')} required /></div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div><label className="label">{q.age}</label><input className="input" type="number" value={form.age} onChange={up('age')} /></div>
                        <div><label className="label">{q.city}</label><input className="input" value={form.city} onChange={up('city')} /></div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="anim-fade">
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>{q.step3}</h3>
                    <div style={{ marginBottom: '8px' }}>
                      {[[q.step1, labels[form.type]], [q.fullName, form.name], [q.phone, form.phone], [q.email, form.email], [q.age, form.age || '—'], [q.city, form.city || '—']].map(([label, value], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid rgba(56,189,248,0.04)' }}>
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>{label}</span>
                          <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nav */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                  {step > 1 ? <button onClick={() => setStep(step - 1)} className="btn-outline" style={{ padding: '13px 28px', fontSize: '0.88rem' }}>{q.prev}</button> : <div />}
                  {step < 3 ? (
                    <button onClick={() => canNext && setStep(step + 1)} className="btn-main" style={{ padding: '13px 32px', fontSize: '0.88rem', opacity: canNext ? 1 : 0.4, cursor: canNext ? 'pointer' : 'not-allowed' }} disabled={!canNext}>{q.next}</button>
                  ) : (
                    <button onClick={() => setSubmitted(true)} className="btn-gold" style={{ padding: '13px 32px', fontSize: '0.88rem' }}>
                      {q.submit} <Icons.ArrowRight style={{ width: 16, height: 16 }} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
