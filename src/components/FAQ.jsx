import React from 'react'
import { 
  HelpCircle, Shield, Download, Smartphone, Settings, Zap, Lock, Languages, 
  Database, Moon, CreditCard, MessageCircle, TrendingUp, Calculator, 
  Share2, Bell, FileText, UserPlus, Fingerprint, RefreshCcw, PieChart, 
  Wallet, History, Search, Tag, Calendar, DownloadCloud, Globe, AlertCircle
} from 'lucide-react'

const FAQ = ({ t }) => {
  const faqs = [
    { q: t.q1, a: t.a1, icon: <HelpCircle size={20} /> },
    { q: t.q2, a: t.a2, icon: <PieChart size={20} /> },
    { q: t.q3, a: t.a3, icon: <Lock size={20} /> },
    { q: t.q4, a: t.a4, icon: <Zap size={20} /> },
    { q: t.q5, a: t.a5, icon: <Tag size={20} /> },
    { q: t.q6, a: t.a6, icon: <Settings size={20} /> },
    { q: t.q7, a: t.a7, icon: <Database size={20} /> },
    { q: t.q8, a: t.a8, icon: <Moon size={20} /> },
    { q: t.q9, a: t.a9, icon: <Globe size={20} /> },
    { q: t.q10, a: t.a10, icon: <Wallet size={20} /> },
    { q: t.q11, a: t.a11, icon: <FileText size={20} /> },
    { q: t.q12, a: t.a12, icon: <TrendingUp size={20} /> },
    { q: t.q13, a: t.a13, icon: <Fingerprint size={20} /> },
    { q: t.q14, a: t.a14, icon: <Search size={20} /> },
    { q: t.q15, a: t.a15, icon: <History size={20} /> },
    { q: t.q16, a: t.a16, icon: <Bell size={20} /> },
    { q: t.q17, a: t.a17, icon: <Shield size={20} /> },
    { q: t.q18, a: t.a18, icon: <Settings size={20} /> },
    { q: t.q19, a: t.a19, icon: <Calendar size={20} /> },
    { q: t.q20, a: t.a20, icon: <DownloadCloud size={20} /> },
    { q: t.q21, a: t.a21, icon: <AlertCircle size={20} /> }
  ]

  return (
    <div className="view-container">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1.5px' }}>{t.title}</h1>
        <p style={{ color: '#707579', marginTop: '12px', fontSize: '18px' }}>{t.subtitle}</p>
      </div>

      <div className="faq-grid" style={{ 
        maxWidth: '1250px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1px',
        background: '#eef0f2',
        border: '1px solid #eef0f2'
      }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ 
            padding: '35px', 
            background: '#ffffff', 
            borderRadius: '0px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            transition: 'background 0.2s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ color: '#24A1DE', display: 'flex' }}>{faq.icon}</span>
              <h3 style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '700', lineHeight: '1.3' }}>{faq.q}</h3>
            </div>
            <p style={{ color: '#707579', lineHeight: '1.7', fontSize: '14.5px' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
