import React from 'react';

export default function DeleteAccount() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
      <h1 className="text-3xl font-bold mb-8">Akkauntni Oʻchirish (Delete Account)</h1>
      <p className="mb-8 text-secondary">
        Spendex ilovasida oʻz akkauntingizni va barcha moliyaviy maʼlumotlaringizni oʻchirishingiz mumkin.
      </p>

      <section className="bg-surface p-6 rounded-lg border border-border mb-8 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-danger">Akkauntini oʻchirish tartibi:</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Spendex ilovasining Sozlamalar (Settings) boʻlimiga kiring.</li>
          <li>"Profilni oʻchirish" (Delete Profile) tugmasini toping.</li>
          <li>Akkauntni oʻchirish tugmasini bosing va tasdiqlang.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-danger">Diqqat!</h3>
        <p className="mb-4">
          Akkauntni oʻchirganingizdan soʻng barcha maʼlumotlaringiz butunlay oʻchirib yuboriladi va ularni tiklab boʻlmaydi. Bu orqali sizning xarajatlaringiz va daromadlaringiz tarixi bizning tizimdan toʻliq oʻchiriladi.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Savollar boʻyicha:</h3>
        <p className="mb-4">
          Agar savollaringiz boʻlsa, biz bilan spendex.app@gmail.com orqali bogʻlanishingiz mumkin.
        </p>
      </section>
    </div>
  );
}
