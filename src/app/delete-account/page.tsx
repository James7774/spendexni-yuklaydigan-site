"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Trash2 } from 'lucide-react';

export default function DeleteAccount() {
  return (
    <div style={{ 
      background: 'var(--background)', 
      color: 'var(--text-main)', 
      minHeight: '100vh',
      padding: 'max(2rem, env(safe-area-inset-top)) 1.5rem',
      userSelect: 'text',
      WebkitUserSelect: 'text'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '2rem',
          color: 'var(--primary)',
          fontSize: '0.9rem'
        }}>
          <ArrowLeft size={18} />
          Bosh sahifa
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
          Akkauntni Oʻchirish
          <Trash2 size={32} color="var(--danger)" />
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.7' }}>
          Siz oʻz akkauntingizni va barcha moliyaviy maʼlumotlaringizni istalgan vaqtda oʻchirishga haqlisiz.
        </p>

        <section style={{ 
          background: 'var(--surface)', 
          padding: '2rem', 
          borderRadius: '2rem', 
          border: '1px solid var(--border)', 
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--danger)' }}>
            Ilova ichidan oʻchirish:
          </h2>
          <ol style={{ 
            listStyleType: 'decimal', 
            paddingLeft: '1.5rem', 
            lineHeight: '2.2', 
            color: 'var(--text-main)',
            fontWeight: 600
          }}>
            <li>Spendex ilovasini oching.</li>
            <li>Sozlamalar (Settings) boʻlimiga oʻting.</li>
            <li>Profil sozlamalarini tanlang.</li>
            <li>U yerda koʻrinib turgan "Profilni oʻchirish" (Delete Profile) tugmasini bosing.</li>
            <li>Amalingizni tasdiqlang.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Maʼlumotlarning taqdiri nima boʻladi?</h3>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Akkauntingizni oʻchirganingizdan soʻng:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '8px' }}>Barcha tranzaksiyalar tarixi (Xarajatlar va daromadlar) butunlay oʻchiriladi.</li>
            <li style={{ marginBottom: '8px' }}>Eslatmalar va saqlangan maqsadlar bazadan yoʻqotiladi.</li>
            <li style={{ marginBottom: '8px' }}>Ismingiz, telefon raqamingiz va profil rasmingiz oʻchirib yuboriladi.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '4rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Pochta orqali oʻchirish</h3>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Agar ilovaga kira olmasangiz yoki akkauntingizni qoʻlda oʻchirishimizni istasangiz, bizga bogʻlangan pochtangizdan xat yuboring:
            <br />
            <a href="mailto:spendex.app@gmail.com" style={{ color: 'var(--primary)', fontWeight: 700, display: 'block', marginTop: '8px' }}>
              spendex.app@gmail.com
            </a>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '12px' }}>
            * Maʼlumotlar 24 soat ichida butunlay oʻchirib yuboriladi.
          </p>
        </section>
      </div>
    </div>
  );
}
