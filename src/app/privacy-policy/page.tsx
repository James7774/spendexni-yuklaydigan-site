import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', color: '#fff', background: '#0a0c10', minHeight: '100vh' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: April 7, 2026</p>
      
      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to Spendex. We are committed to protecting your personal information and your right to privacy.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect information that you provide to us, such as your email address when you sign in, and transaction data that you enter into the app to help you track your finances.</p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to provide, operate, and maintain our application, and to improve your user experience by generating charts and reports.</p>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely using Firebase services.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to access, update, or delete your information at any time directly through the app settings.</p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@spendex.store.</p>
      </section>
    </div>
  );
}
