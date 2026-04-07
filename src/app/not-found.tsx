"use client";
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100dvh',
      width: '100%',
      padding: '24px',
      background: 'var(--background)',
      color: 'var(--text-main)',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '10rem', opacity: 0.1, margin: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 900, zIndex: 0 }}>404</h1>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Voy! Bunday sahifa mavjud emas.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px' }}>
          Izlayotgan sahifangiz boshqa yerga koʻchirilgan yoki umuman mavjud boʻlmasligi mumkin.
        </p>
        
        <Link href="/" className="btn btn-primary">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
