"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "2026-yil 7-aprel";

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

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Maxfiylik Siyosati
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem' }}>
          Oxirgi yangilanish: {lastUpdated}
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>1. Kirish</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <b>Spendex - Shaxsiy Moliya</b> (keyingi oʻrinlarda "Ilova") foydalanuvchilarning maxfiyligini hurmat qiladi. Ushbu hujjat ilova qanday maʼlumotlarni yigʻishi, ulardan qanday foydalanilishi va himoya qilinishi haqida maʼlumot beradi.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>2. Maʼlumotlarni yigʻish</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Biz sizdan quyidagi holatlarda maʼlumot toʻplashimiz mumkin:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <li>Roʻyxatdan oʻtishda (Ism, telefon raqami yoki ijtimoiy tarmoq profili).</li>
            <li>Ilova ichidagi tranzaksiyalar (Xarajatlar, daromadlar va eslatmalar).</li>
            <li>Profil sozlamalari (Avatar, til tanlovi va valyuta).</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>3. Maʼlumotlardan foydalanish</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Siz kiritgan maʼlumotlar faqat Ilovaning ishlashini taʼminlash, shaxsiy statistikalarni shakllantirish va foydalanish tajribasini yaxshilash uchun ishlatiladi. Biz sizning ruxsatingizsiz maʼlumotlarni uchinchi shaxslarga sotmaymiz yoki ulashmaymiz.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>4. Maʼlumotlar xavfsizligi</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Sizning moliyaviy maʼlumotlaringiz xavfsizligini taʼminlash uchun biz zamonaviy shifrlash standartlaridan va xavfsiz bulut texnologiyalaridan foydalanamiz. Ilovaga kirishni PIN-kod orqali qoʻshimcha himoyalash imkoniyati ham mavjud.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>5. Akkauntni oʻchirish</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Siz istalgan vaqtda oʻz akkauntingizni va unga bogʻlangan barcha maʼlumotlarni "Sozlamalar" boʻlimi orqali yoki biz bilan bogʻlanib oʻchirib yuborishingiz mumkin.
          </p>
        </section>

        <section style={{ marginBottom: '4rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Savollar bormi?</h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Agar ushbu Maxfiylik Siyosati boʻyicha biror savol yoki taklifingiz boʻlsa, biz bilan quyidagi pochta orqali bogʻlaning:
            <br />
            <a href="mailto:spendex.app@gmail.com" style={{ color: 'var(--primary)', fontWeight: 700, display: 'block', marginTop: '8px' }}>
              spendex.app@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
