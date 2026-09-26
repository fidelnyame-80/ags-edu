import { lazy, Suspense, useEffect, useState } from 'react';
import HeroSection from './Components/Hero';
import AcademicFlip from './Components/AcademicFlip';
const AcademicDivisionPage = lazy(() => import('./Components/AcademicDivisionPage'));
const AcademicsPage = lazy(() => import('./Components/AcademicsPage'));
const AboutPage = lazy(() => import('./Components/AboutPage'));
const FounderPage = lazy(() => import('./Components/FounderPage'));
const AdmissionsPage = lazy(() => import('./Components/AdmissionsPage'));
const HowToApplyPage = lazy(() => import('./Components/HowToApplyPage'));
const HowToEnrollPage = lazy(() => import('./Components/HowToEnrollPage'));
const TuitionAndFeesPage = lazy(() => import('./Components/TuitionAndFeesPage'));
const OnlineApplicationPage = lazy(() => import('./Components/OnlineApplicationPage'));
const HandbookPage = lazy(() => import('./Components/HandbookPage'));
const ParentTeacherAssociationPage = lazy(() => import('./Components/ParentTeacherAssociationPage'));
const AlumniPage = lazy(() => import('./Components/AlumniPage'));
const CommunityPage = lazy(() => import('./Components/CommunityPage'));
const ContactsPage = lazy(() => import('./Components/ContactsPage'));
const CounsellingPage = lazy(() => import('./Components/CounsellingPage'));
const CoCurricularPage = lazy(() => import('./Components/CoCurricularPage'));
const SportsPage = lazy(() => import('./Components/SportsPage'));
const TransportPage = lazy(() => import('./Components/TransportPage'));
const CafeteriaPage = lazy(() => import('./Components/CafeteriaPage'));
const EventsPage = lazy(() => import('./Components/EventsPage'));
const LibraryPage = lazy(() => import('./Components/LibraryPage'));
const StudentLoginPage = lazy(() => import('./Components/StudentLoginPage'));
const CampusTourPage = lazy(() => import('./Components/CampusTourPage'));
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import LearningEnvironment from './Components/LearningEnvironment';
import Navbar from './Components/Navbar';
const NewsPage = lazy(() => import('./Components/NewsPage'));
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

  if (section === 'about' || window.location.hash === '#about') {
    if (academicDivision === 'founder') return { page: 'founder', academicDivision: null };
    return { page: 'about', academicDivision: null };
  }
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
    if (subPage === 'sports') return { page: 'sports', academicDivision: null };
    if (subPage === 'transport') return { page: 'transport', academicDivision: null };
    if (subPage === 'cafeteria') return { page: 'cafeteria', academicDivision: null };
    if (subPage === 'events') return { page: 'events', academicDivision: null };
    if (subPage === 'janet-c-rickert-library') return { page: 'library', academicDivision: null };
    return { page: 'community', academicDivision: null };
  }
  if (section === 'counselling') return { page: 'counselling', academicDivision: null };
  if (section === 'co-curricular') return { page: 'co-curricular', academicDivision: null };
  if (section === 'contacts' || window.location.hash === '#contacts') {
    return { page: 'contacts', academicDivision: null };
  }
  if (section === 'student-login') return { page: 'student-login', academicDivision: null };
  if (section === 'campus-tour') return { page: 'campus-tour', academicDivision: null };

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
      <Suspense fallback={<div role="status" className="min-h-64 p-12 text-center">Loading page…</div>}>
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'founder' && <FounderPage />}
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
      {currentPage === 'sports' && <SportsPage />}
      {currentPage === 'transport' && <TransportPage />}
      {currentPage === 'cafeteria' && <CafeteriaPage />}
      {currentPage === 'events' && <EventsPage />}
      {currentPage === 'library' && <LibraryPage />}
      {currentPage === 'student-login' && <StudentLoginPage />}
      {currentPage === 'campus-tour' && <CampusTourPage />}
      {currentPage === 'contacts' && <ContactsPage />}
      {currentPage === 'news' && <NewsPage />}
      {currentPage === 'home' && <HomePage />}
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
