import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollProgress } from '../hooks/useScrollAnimation';
import Icons from './Icons';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="wa-btn" id="whatsapp-btn" aria-label="Chat on WhatsApp">
      <Icons.WhatsApp className="w-6 h-6 text-white" />
    </a>
  );
}

export function FloatingQuote() {
  const { t } = useLanguage();
  return (
    <div className="float-cta">
      <Link to="/quote" className="btn-main anim-glow text-sm py-3 px-6" id="floating-quote-btn">
        <Icons.Sparkles className="w-4 h-4" />
        {t.hero.cta1}
      </Link>
    </div>
  );
}
