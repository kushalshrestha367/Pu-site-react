import HeroCarousel from '../components/HeroCarousel';
import Hero from '../components/Hero';
import About from '../components/About';
import Leadership from '../components/Leadership';
import VideoTour from '../components/VideoTour';
import FacultySlider from '../components/FacultySlider';
import Notice from '../components/Notice';
import NewsEvents from '../components/NewsEvents';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Hero />
      <About />
      <Leadership />
      <VideoTour />
      <FacultySlider />
      <Notice />
      <NewsEvents />
    </>
  );
}