import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
      <h1 className="text-3xl font-bold mb-8">Spendex - Maxfiylik Siyosati</h1>
      <p className="mb-4 text-secondary">Oxirgi yangilanish: 2026-yil 7-aprel</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Maʼlumotlarni yigʻish</h2>
        <p className="mb-4">
          Spendex ilovasi va veb-sayti foydalanuvchilarning shaxsiy moliyaviy maʼlumotlarini faqat ilova ichida saqlash va hisob-kitob qilish uchun foydalanadi. Biz sizning ruxsatingizsiz uchinchi shaxslarga maʼlumotlarni uzatmaymiz.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Maʼlumotlardan foydalanish</h2>
        <p className="mb-4">
          Siz kiritgan xarajatlar va daromadlar faqat sizga statistik maʼlumotlar koʻrsatish uchun ishlatiladi. Maʼlumotlar qurilmangizda yoki xavfsiz serverlarda saqlanadi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Xavfsizlik</h2>
        <p className="mb-4">
          Sizning maʼlumotlaringiz xavfsizligini taʼminlash uchun biz zamonaviy shifrlash usullaridan foydalanamiz.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Bogʻlanish</h2>
        <p className="mb-4">
          Maxfiylik siyosati boʻyicha savollaringiz boʻlsa, biz bilan spendex.app@gmail.com orqali bogʻlanishingiz mumkin.
        </p>
      </section>
    </div>
  );
}
