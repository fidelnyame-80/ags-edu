import { useEffect, useState } from 'react';
import HeroSection from './Components/Hero';
import AcademicFlip from './Components/AcademicFlip';
import AcademicDivisionPage from './Components/AcademicDivisionPage';
import AcademicsPage from './Components/AcademicsPage';
import AboutPage from './Components/AboutPage';
import AdmissionsPage from './Components/AdmissionsPage';
import HowToApplyPage from './Components/HowToApplyPage';
import HowToEnrollPage from './Components/HowToEnrollPage';
import TuitionAndFeesPage from './Components/TuitionAndFeesPage';
import OnlineApplicationPage from './Components/OnlineApplicationPage';
import HandbookPage from './Components/HandbookPage';
import ParentTeacherAssociationPage from './Components/ParentTeacherAssociationPage';
import AlumniPage from './Components/AlumniPage';
import CommunityPage from './Components/CommunityPage';
import ContactsPage from './Components/ContactsPage';
import CounsellingPage from './Components/CounsellingPage';
import CoCurricularPage from './Components/CoCurricularPage';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import LearningEnvironment from './Components/LearningEnvironment';
import Navbar from './Components/Navbar';
import NewsPage from './Components/NewsPage';
import SchoolNews from './Components/SchoolNews';
import Testimonials from './Components/Testimonials';

const getCurrentRoute = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', academicDivision: null };
  }

  const pathSegments = window.location.pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => segment.toLowerCase());
  const [section, academicDivision] = pathSegments;

  if (section === 'about') return { page: 'about', academicDivision: null };
  if (section === 'academics' || window.location.hash === '#academics') {
    const normalizedDivision = academicDivision === 'pre-school' ? 'preschool' : academicDivision;
    const isAcademicDivision = [
      'preschool',
      'primary-school',
      'junior-high-school',
    ].includes(normalizedDivision);

    return {
      page: isAcademicDivision ? 'academicDivision' : 'academics',
      academicDivision: isAcademicDivision ? normalizedDivision : null,
    };
  }
  if (section === 'admissions') {
    const subPage = academicDivision;
    if (subPage === 'how-to-apply') return { page: 'how-to-apply', academicDivision: null };
    if (subPage === 'how-to-enroll') return { page: 'how-to-enroll', academicDivision: null };
    if (subPage === 'tuition-and-fees') return { page: 'tuition-and-fees', academicDivision: null };
    if (subPage === 'apply') return { page: 'online-application', academicDivision: null };
    if (subPage === 'handbook') return { page: 'handbook', academicDivision: null };
    return { page: 'admissions', academicDivision: null };
  }
  if (section === 'news') return { page: 'news', academicDivision: null };
  if (section === 'community' || window.location.hash === '#community') {
    const subPage = academicDivision;
    if (subPage === 'parent-teacher-association') return { page: 'parent-teacher-association', academicDivision: null };
    if (subPage === 'ags-alumni') return { page: 'ags-alumni', academicDivision: null };
    return { page: 'community', academicDivision: null };
  }
  if (section === 'counselling') return { page: 'counselling', academicDivision: null };
  if (section === 'co-curricular') return { page: 'co-curricular', academicDivision: null };
  if (section === 'contacts' || window.location.hash === '#contacts') {
    return { page: 'contacts', academicDivision: null };
  }

  return { page: 'home', academicDivision: null };
};

function HomePage() {
  return (
    <>
      <HeroSection/>
      <Intro />
      <LearningEnvironment />
      <AcademicFlip />
      <SchoolNews />
      <Testimonials />
    </>
  );
}

const App = () => {
  const [currentRoute, setCurrentRoute] = useState(() => getCurrentRoute());
  const { page: currentPage, academicDivision } = currentRoute;
  const navCurrentPage = currentPage === 'academicDivision' ? 'academics' : currentPage;

  useEffect(() => {
    const updatePage = () => setCurrentRoute(getCurrentRoute());

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
      <Navbar currentPage={navCurrentPage} />
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'academics' && <AcademicsPage />}
      {currentPage === 'academicDivision' && (
        <AcademicDivisionPage slug={academicDivision} />
      )}
      {currentPage === 'admissions' && <AdmissionsPage />}
      {currentPage === 'how-to-apply' && <HowToApplyPage />}
      {currentPage === 'how-to-enroll' && <HowToEnrollPage />}
      {currentPage === 'tuition-and-fees' && <TuitionAndFeesPage />}
      {currentPage === 'online-application' && <OnlineApplicationPage />}
      {currentPage === 'handbook' && <HandbookPage />}
      {currentPage === 'parent-teacher-association' && <ParentTeacherAssociationPage />}
      {currentPage === 'ags-alumni' && <AlumniPage />}
      {currentPage === 'community' && <CommunityPage />}
      {currentPage === 'counselling' && <CounsellingPage />}
      {currentPage === 'co-curricular' && <CoCurricularPage />}
      {currentPage === 'contacts' && <ContactsPage />}
      {currentPage === 'news' && <NewsPage />}
      {currentPage === 'home' && <HomePage />}
      <Footer />
    </div>
  )
}

export default App
