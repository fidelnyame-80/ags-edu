import HeroSection from './Components/Hero';
import AcademicFlip from './Components/AcademicFlip';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import SchoolNews from './Components/SchoolNews';
import Testimonials from './Components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Intro />
      <AcademicFlip />
      <SchoolNews />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
