import { useState, useEffect } from 'react'
import Home from './components/Home'
import FAQ from './components/FAQ'
import Apps from './components/Apps'
import Footer from './components/Footer'
import translations from './translations'
import { Globe, ChevronDown } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('apps')
  const [lang, setLang] = useState(localStorage.getItem('spendex_lang') || 'uz')
  const [isLangOpen, setIsLangOpen] = useState(false)

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('spendex_lang', lang);
  }, [lang]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home t={t.home} setTab={setActiveTab} />
      case 'faq': return <FAQ t={t.faq} />
      case 'apps': return <Apps t={t.apps} />
      default: return <Apps t={t.apps} />
    }
  }

  const languages = [
    { code: 'uz', name: 'O\'zbek' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-container nav-content">
          <nav className="tabs">
            <div 
              className={`tab-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              {t.nav.home}
            </div>
            <div 
              className={`tab-item ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              {t.nav.faq}
            </div>
            <div 
              className={`tab-item ${activeTab === 'apps' ? 'active' : ''}`}
              onClick={() => setActiveTab('apps')}
            >
              {t.nav.apps}
            </div>
          </nav>
          
          <div style={{ position: 'relative' }}>
            <div 
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '10px',
                background: isLangOpen ? 'rgba(36, 161, 222, 0.08)' : 'transparent',
                cursor: 'pointer',
                color: '#24A1DE',
                fontSize: '14px',
                fontWeight: '700',
                transition: '0.2s ease',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(36, 161, 222, 0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = isLangOpen ? 'rgba(36, 161, 222, 0.08)' : 'transparent'}
            >
              <Globe size={18} />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown size={14} style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
            </div>

            {isLangOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '10px',
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: '14px',
                boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
                padding: '6px',
                minWidth: '130px',
                zIndex: 2000,
                animation: 'slideUp 0.2s ease-out'
              }}>
                {languages.map((l) => (
                  <div 
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    style={{
                      padding: '10px 14px',
                      cursor: 'pointer',
                      borderRadius: '10px',
                      background: lang === l.code ? 'rgba(36, 161, 222, 0.08)' : 'transparent',
                      color: lang === l.code ? '#24A1DE' : '#444',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: '0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (lang !== l.code) e.currentTarget.style.background = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (lang !== l.code) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {l.name}
                    {lang === l.code && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#24A1DE' }} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container">
        {renderContent()}
      </main>

      <Footer t={t.footer} />
    </div>
  )
}

export default App
