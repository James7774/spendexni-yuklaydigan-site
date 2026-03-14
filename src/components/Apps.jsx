import React, { useState, useEffect } from 'react'
import { Download } from 'lucide-react'

const Apps = ({ t }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll
  // The effect starts after some scrolling
  const scrollRatio = Math.min(Math.max((scrollY - 100) / 400, 0), 1);
  const leftShift = scrollRatio * 180; // Moves towards center
  const rightShift = scrollRatio * 180; // Moves towards center

  return (
    <div className="view-container" style={{ textAlign: 'center' }}>
      {/* Premium Triple Phone Mockup - Fully Responsive with Scroll Animation */}
      <style>{`
        .mockup-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 600px;
          margin: 0 auto 60px;
          display: flex;
          justify-content: center;
          alignItems: center;
          overflow: visible;
          perspective: 1000px;
        }
        .phone-bg {
          width: 260px;
          height: 540px;
          background: #000;
          border-radius: 32px;
          border: 1px solid #222;
          position: absolute;
          top: 50%;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          transition: transform 0.1s ease-out, opacity 0.3s ease;
          will-change: transform;
        }
        .phone-left {
          left: 50%;
          transform: translateY(-50%) translateX(calc(-320px + ${leftShift}px)) rotate(-12deg) scale(${0.85 + (scrollRatio * 0.05)});
          opacity: ${0.9 - (scrollRatio * 0.1)};
        }
        .phone-right {
          right: 50%;
          transform: translateY(-50%) translateX(calc(320px - ${rightShift}px)) rotate(12deg) scale(${0.85 + (scrollRatio * 0.05)});
          opacity: ${0.9 - (scrollRatio * 0.1)};
        }
        .phone-main {
          width: 300px;
          height: 620px;
          position: relative;
          border-radius: 38px;
          background: #000;
          padding: 8px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.4);
          border: 1px solid #282828;
          z-index: 5;
          transform: translateZ(50px) translateY(${scrollRatio * -20}px);
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .mockup-container {
            height: 450px;
            margin-bottom: 40px;
          }
          .phone-main {
            width: 220px;
            height: 450px;
            border-radius: 28px;
          }
          .phone-bg {
            width: 190px;
            height: 400px;
            border-radius: 24px;
          }
          .phone-left {
            transform: translateY(-50%) translateX(calc(-220px + ${leftShift * 0.7}px)) rotate(-12deg) scale(0.85);
          }
          .phone-right {
            transform: translateY(-50%) translateX(calc(220px - ${rightShift * 0.7}px)) rotate(12deg) scale(0.85);
          }
        }

        @media (max-width: 480px) {
          .mockup-container {
            height: 320px;
          }
          .phone-main {
            width: 160px;
            height: 330px;
            border-radius: 20px;
          }
          .phone-bg {
            width: 140px;
            height: 290px;
            border-radius: 18px;
          }
          .phone-left {
            transform: translateY(-50%) translateX(calc(-155px + ${leftShift * 0.5}px)) rotate(-12deg) scale(0.85);
          }
          .phone-right {
            transform: translateY(-50%) translateX(calc(155px - ${rightShift * 0.5}px)) rotate(12deg) scale(0.85);
          }
        }
      `}</style>
      
      <div className="mockup-container">
        {/* Background Phone Left (Grafiklar) */}
        <div className="phone-bg phone-left">
          <img src="/images/spend_charts.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </div>

        {/* Background Phone Right (Maqsadlar) */}
        <div className="phone-bg phone-right">
          <img src="/images/spend_goals.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </div>

        {/* Main Phone (Front) */}
        <div className="phone-main">
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            overflow: 'hidden',
            background: '#111',
            position: 'relative',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
          }}>
            <img 
              src="/images/spend.png" 
              alt="Spendex App Screenshot" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }} 
            />
            {/* Glossy Reflection Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
              pointerEvents: 'none',
              zIndex: 10
            }}></div>
          </div>
        </div>
      </div>

      <h1 style={{ fontSize: '36px', marginBottom: '16px', fontWeight: '700' }}>{t.title}</h1>
      <p style={{ color: '#707579', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.5' }}>
        {t.desc}
      </p>

      <div style={{ marginBottom: '32px' }}>
        <a href="/downloads/spendex.apk" className="btn-primary" download style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Download size={20} />
          {t.download}
        </a>
      </div>

      <div style={{ marginTop: '80px', color: '#707579', fontSize: '14px', lineHeight: '2' }}>
        <p>{t.team}</p>
      </div>
    </div>
  )
}

export default Apps
