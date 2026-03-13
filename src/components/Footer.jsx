import React from 'react'

const Footer = ({ t }) => {
  return (
    <footer style={{ 
      borderTop: '1px solid #eee', 
      padding: '80px 0 60px', 
      marginTop: '100px',
      background: '#fff'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '40px',
        textAlign: 'left'
      }}>
        {/* Brand Info */}
        <div style={{ gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#222' }}>Spendex</h3>
          <p style={{ color: '#707579', fontSize: '14px', lineHeight: '1.6', maxWidth: '280px' }}>
            {t.desc}
          </p>
          <div style={{ marginTop: '24px', color: '#24A1DE', fontWeight: '600', fontSize: '14px' }}>
            Nova.X Team
          </div>
        </div>

        {/* About Column */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '20px', color: '#222' }}>{t.about}</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><FooterLink href="#">{t.faq}</FooterLink></li>
            <li><FooterLink href="#">{t.privacy}</FooterLink></li>
            <li><FooterLink href="#">{t.press}</FooterLink></li>
          </ul>
        </div>

        {/* Mobile Apps Column */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '20px', color: '#222' }}>{t.apps}</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><FooterLink href="/downloads/app-debug.apk">{t.android}</FooterLink></li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ 
        marginTop: '60px', 
        paddingTop: '30px', 
        borderTop: '1px solid #f5f5f5', 
        textAlign: 'center',
        color: '#b0b5b9',
        fontSize: '13px'
      }}>
        {t.copy}
      </div>
    </footer>
  )
}

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    style={{ 
      color: '#24A1DE', 
      textDecoration: 'none', 
      fontSize: '14px', 
      fontWeight: '500',
      transition: 'opacity 0.2s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
  >
    {children}
  </a>
)

export default Footer
