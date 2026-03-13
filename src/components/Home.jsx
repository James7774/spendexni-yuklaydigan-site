import React from 'react'
import { BarChart3, ShieldCheck, Cloud, ArrowRight, Wallet, TrendingUp } from 'lucide-react'

const Home = ({ t, setTab }) => {
  return (
    <div className="view-container" style={{ paddingTop: '20px' }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(36, 161, 222, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: -1,
        borderRadius: '50%'
      }}></div>

      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '40px',
        marginBottom: '100px',
        padding: '40px 0'
      }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'rgba(36, 161, 222, 0.1)', 
            borderRadius: '100px', 
            color: '#24A1DE',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Nova.X — Kelajak moliyasi
          </div>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)', 
            lineHeight: '1.1',
            marginBottom: '24px', 
            fontWeight: '850', 
            color: '#1a1a1a',
            letterSpacing: '-0.02em'
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#555', 
            maxWidth: '540px', 
            marginBottom: '40px', 
            lineHeight: '1.6' 
          }}>
            {t.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary" 
              onClick={() => setTab('apps')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              Boshlash <ArrowRight size={20} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#707579' }}>
              <div style={{ display: 'flex', marginLeft: '10px' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    border: '2px solid #fff',
                    background: '#eee',
                    marginLeft: '-10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px'
                  }}>👤</div>
                ))}
              </div>
              <span style={{ fontSize: '14px' }}><b>10,000+</b> foydalanuvchilar</span>
            </div>
          </div>
        </div>
        
        <div style={{ flex: '1 1 400px', textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(36, 161, 222, 0.05) 0%, transparent 70%)',
            zIndex: -1
          }}></div>
          <img 
            src="/images/hero_stats.png" 
            alt="Nova stats" 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
              animation: 'floatAnimation 6s ease-in-out infinite'
            }} 
          />
        </div>
      </section>

      {/* Stats Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '120px'
      }}>
        <StatItem icon={<TrendingUp color="#24A1DE" />} label="Oylik tahlillar" value="Cheksiz" />
        <StatItem icon={<Wallet color="#24A1DE" />} label="Kategoriyalar" value="50+" />
        <StatItem icon={<Cloud color="#24A1DE" />} label="Cloud Sync" value="100%" />
      </div>

      <style>{`
        @keyframes floatAnimation {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      {/* Feature Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>Imkoniyatlarimiz</h2>
        <div style={{ width: '60px', height: '4px', background: '#24A1DE', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      {/* Grid Features */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        paddingBottom: '80px'
      }}>
        <FeatureCard 
          icon={<BarChart3 size={28} />} 
          title={t.feature1Title} 
          desc={t.feature1Desc}
          color="#24A1DE"
        />
        <FeatureCard 
          icon={<ShieldCheck size={28} />} 
          title={t.feature2Title} 
          desc={t.feature2Desc}
          color="#00C48C"
        />
        <FeatureCard 
          icon={<Cloud size={28} />} 
          title={t.feature3Title} 
          desc={t.feature3Desc}
          color="#FFBB00"
        />
      </div>
    </div>
  )
}

const StatItem = ({ icon, label, value }) => (
  <div style={{ 
    padding: '24px', 
    background: 'rgba(255,255,255,0.7)', 
    borderRadius: '20px', 
    border: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
    <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '12px' }}>{icon}</div>
    <div>
      <div style={{ fontSize: '12px', color: '#707579' }}>{label}</div>
      <div style={{ fontSize: '18px', fontWeight: '700' }}>{value}</div>
    </div>
  </div>
)

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="card-hover" style={{ 
    padding: '48px 40px', 
    background: '#ffffff', 
    borderRadius: '32px', 
    boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
    border: '1px solid #f0f0f0',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ 
      width: '60px', 
      height: '60px', 
      borderRadius: '20px', 
      background: `${color}15`, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: color,
      marginBottom: '30px'
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#1a1a1a', fontWeight: '700' }}>{title}</h3>
    <p style={{ color: '#666', lineHeight: '1.7', fontSize: '16px' }}>{desc}</p>
    
    <div style={{
      position: 'absolute',
      bottom: '-20px',
      right: '-20px',
      width: '80px',
      height: '80px',
      background: `${color}05`,
      borderRadius: '50%',
      zIndex: 0
    }}></div>
  </div>
)

export default Home
