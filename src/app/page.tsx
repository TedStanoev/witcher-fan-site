import HeroSection from '@/components/sections/home/HeroSection';

import './page.scss';

export default function Home() {
  return (
    <div className="Home-Page">
      <div className="Scroll-Wrapper">
        <div id="Hero-Section-Vignette" className="vignette">
          <HeroSection />
        </div>
        <div style={{ height: '100vh' }}></div>
      </div>
    </div>
  );
}
