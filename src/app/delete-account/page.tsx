import React from 'react';

export default function DeleteAccount() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', color: '#fff', background: '#0a0c10', minHeight: '100vh' }}>
      <h1>Account Deletion Process</h1>
      <p>Last updated: April 7, 2026</p>
      
      <section style={{ marginTop: '30px' }}>
        <h2>How to Delete Your Account</h2>
        <p>If you wish to delete your Spendex account and all associated data, you can do so directly within the app.</p>
        
        <ol style={{ lineHeight: '1.8' }}>
          <li>Open the Spendex app on your device.</li>
          <li>Navigate to the <strong>Settings</strong> or <strong>Profile</strong> section from the bottom navigation bar.</li>
          <li>Scroll down and tap on the <strong>Delete Account</strong> option.</li>
          <li>Follow the on-screen prompts to confirm your decision. You will need to re-authenticate to verify your identity.</li>
        </ol>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>What Happens When You Delete Your Account?</h2>
        <p>Upon confirming account deletion:</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Your user profile and authentication credentials will be permanently erased.</li>
          <li>All your financial data, including transactions, charts, and goals, will be permanently deleted from our servers.</li>
          <li>This action is irreversible. We cannot recover your data once your account is deleted.</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Need Help?</h2>
        <p>If you no longer have access to the app or are encountering issues with deleting your account, please send an email to <strong>support@spendex.store</strong> with the subject "Account Deletion Request", and we will assist you manually.</p>
      </section>
    </div>
  );
}
