import { useEffect, useState } from 'react';
import HeroSection from './Components/Hero';
import AcademicFlip from './Components/AcademicFlip';
import AcademicsPage from './Components/AcademicsPage';
import AboutPage from './Components/AboutPage';
import AdmissionsPage from './Components/AdmissionsPage';
import CommunityPage from './Components/CommunityPage';
import ContactsPage from './Components/ContactsPage';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import SchoolNews from './Components/SchoolNews';
import Testimonials from './Components/Testimonials';

const getCurrentPage = () => {
  if (typeof window === 'undefined') return 'home';

  const pathSegments = window.location.pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => segment.toLowerCase());
  const [section] = pathSegments;

  if (section === 'about') return 'about';
  if (section === 'academics' || window.location.hash === '#academics') {
    return 'academics';
  }
  if (section === 'admissions') return 'admissions';
  if (section === 'community' || window.location.hash === '#community') {
    return 'community';
  }
  if (section === 'contacts' || window.location.hash === '#contacts') {
    return 'contacts';
  }

  return 'home';
};

function HomePage() {
  return (
    <>
      <HeroSection/>
      <Intro />
      <AcademicFlip />
      <SchoolNews />
      <Testimonials />
    </>
  );
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => getCurrentPage());

  useEffect(() => {
    const updatePage = () => setCurrentPage(getCurrentPage());

    window.addEventListener('popstate', updatePage);
    window.addEventListener('ags:navigate', updatePage);

    return () => {
      window.removeEventListener('popstate', updatePage);
      window.removeEventListener('ags:navigate', updatePage);
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) return undefined;

    const hash = window.location.hash;
    const timer = window.setTimeout(() => {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ block: 'start' });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [currentPage]);

  return (
    <div>
      <Navbar currentPage={currentPage} />
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'academics' && <AcademicsPage />}
      {currentPage === 'admissions' && <AdmissionsPage />}
      {currentPage === 'community' && <CommunityPage />}
      {currentPage === 'contacts' && <ContactsPage />}
      {currentPage === 'home' && <HomePage />}
      <Footer />
    </div>
  )
}

export default App
