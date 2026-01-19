import HeroSection from '@/components/sections/home/HeroSection';
import SoundtrackSection from '@/components/sections/home/SoundtrackSection';

import './page.scss';

export default function Home() {
  return (
    <div className="Home-Page">
      <div className="Scroll-Wrapper">
        <div className="Vignette">
          <HeroSection />
        </div>
        <SoundtrackSection />
      </div>
    </div>
  );
}
