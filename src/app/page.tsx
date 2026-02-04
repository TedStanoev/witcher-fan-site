import HeroSection from '@/components/sections/home/HeroSection';
import SoundtrackSection from '@/components/sections/home/SoundtrackSection';
import CharactersSection from '@/components/sections/home/CharactersSection';

import './page.scss';

export default function Home() {
  return (
    <div className="Home-Page">
      <div className="Scroll-Wrapper">
        <div className="Vignette">
          <HeroSection />
        </div>
        <CharactersSection />
        <SoundtrackSection />
      </div>
    </div>
  );
}
