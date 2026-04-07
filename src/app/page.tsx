"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Smartphone, 
  Shield, 
  Zap, 
  PieChart, 
  Download,
  Menu,
  X
} from 'lucide-react';
import styles from './page.module.css';
import { DotLottiePlayer } from '@dotlottie/react-player';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--primary)' }}>Spendex</span>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="#features">Xizmatlar</Link>
          <Link href="#apps">Ilovalar</Link>
          <Link href="/privacy-policy">Maxfiylik</Link>
        </div>

        <div className={styles.navActions}>
          <Link href="/dashboard" className={styles.btnSecondary} style={{ padding: '0.6rem 1.2rem', borderRadius: '12px' }}>
            Kirish
          </Link>
          <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>
            <span>Yangi talqin 2.0 endi tayyor! 🚀</span>
          </div>
          <h1 className={styles.title}>
            Moliyangizni <br />
            <span className={styles.gradientText}>Aqlli Boshqaring</span>
          </h1>
          <p className={styles.subtitle}>
            Spendex bilan barcha xarajatlaringizni nazorat qiling, 
            kelajakni rejalashtiring va moliyaviy erkinlikka erishing.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/dashboard" className={styles.btnPrimaryLarge}>
              Hozir Boshlash <ArrowRight size={20} />
            </Link>
            <Link href="#apps" className={styles.btnOutlineLarge}>
              Ilovani Yuklash
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.heroVisual}
        >
          <div className={styles.phoneMockup}>
             {/* Lottie Animation or Splash */}
             <DotLottiePlayer
                src="/animations/splash.lottie"
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
             />
          </div>
        </motion.div>
      </section>

      {/* Stats / Proof */}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <h3>100K+</h3>
          <p>Foydalanuvchilar</p>
        </div>
        <div className={styles.statItem}>
          <h3>4.9</h3>
          <p>Reyting</p>
        </div>
        <div className={styles.statItem}>
          <h3>$1M+</h3>
          <p>Tejalgan mablag'</p>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className={styles.appsSection}>
        <div className={styles.sectionHeader}>
          <h2>Ilovalarimizni Yuklang</h2>
          <p>Barcha qurilmalaringizda Spendex bilan birga bo'ling.</p>
        </div>

        <div className={styles.appCards}>
          <div className={styles.appCard}>
            <div className={styles.appIcon} style={{ background: '#3DDC84' }}>
              <Smartphone color="white" size={32} />
            </div>
            <h3>Android</h3>
            <p>Google Play Store orqali yuklab oling.</p>
            <Link href="https://play.google.com/store/apps/details?id=com.spendex.app" className={styles.downloadBtn}>
               <Download size={18} /> Yuklab Olish (APK)
            </Link>
          </div>

          <div className={styles.appCard}>
            <div className={styles.appIcon} style={{ background: '#000' }}>
              <Smartphone color="white" size={32} />
            </div>
            <h3>iOS</h3>
            <p>App Store orqali yuklab oling.</p>
            <div className={styles.comingSoon}>Tez kunda...</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Nega Spendex?</h2>
          <p>Biznes va shaxsiy moliya uchun mukammal yechim.</p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Zap className={styles.fIcon} />
            <h3>Tezkor Kiritish</h3>
            <p>Xarajatlarni bir necha soniyada qo'shing va toifalarga ajrating.</p>
          </div>
          <div className={styles.featureCard}>
            <PieChart className={styles.fIcon} />
            <h3>Vizual Hisobotlar</h3>
            <p>Grafiklar orqali pullaringiz qayerga ketayotganini aniq ko'ring.</p>
          </div>
          <div className={styles.featureCard}>
            <Shield className={styles.fIcon} />
            <h3>Xavfsiz Saqlash</h3>
            <p>Ma'lumotlaringiz bulutda shifrlangan holda xavfsiz saqlanadi.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerBottom}>
          <p>© 2026 Spendex. Barcha huquqlar himoyalangan.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy-policy">Maxfiylik Siyosati</Link>
            <Link href="/delete-account">Hisobni O'chirish</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay}>
           <Link href="#features" onClick={() => setIsMenuOpen(false)}>Xizmatlar</Link>
           <Link href="#apps" onClick={() => setIsMenuOpen(false)}>Ilovalar</Link>
           <Link href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>Maxfiylik</Link>
           <Link href="/dashboard" className={styles.btnPrimary} style={{ width: '80%', marginTop: '2rem' }}>
              Boshlash
           </Link>
        </div>
      )}
    </div>
  );
}
