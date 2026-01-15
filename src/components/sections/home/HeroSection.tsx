'use client';

import useResponsive from '@/hooks/useResponsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useMemo } from 'react';

import Witcher3ImgSrc from '../../../../public/images/the-wticher-hero.png';

import './HeroSection.scss';

export default function HeroSection() {
  const { isMobile, isTablet } = useResponsive();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('#Hero-Section-Vignette', {
      opacity: 0,
      duration: 1.5,
      scale: 3,
      ease: 'power2.out',
    }).from('#Hero-Section-Logo', {
      opacity: 0,
      bottom: -100,
      duration: 1.5,
      ease: 'power2.out',
    });

    const heroSectionMoveToX = gsap.quickTo('#Hero-Section', 'x', {
      duration: 0.8,
      ease: 'power3',
    });
    const heroSectionMoveToY = gsap.quickTo('#Hero-Section', 'y', {
      duration: 0.8,
      ease: 'power3',
    });

    const logoMoveToX = gsap.quickTo('#Hero-Section-Logo', 'x', {
      duration: 0.6,
      ease: 'power3',
    });
    const logoMoveToY = gsap.quickTo('#Hero-Section-Logo', 'y', {
      duration: 0.6,
      ease: 'power3',
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = clientX / window.innerWidth - 0.5;
      const yPercent = clientY / window.innerHeight - 0.5;

      heroSectionMoveToX(xPercent * 20);
      heroSectionMoveToY(yPercent * 20);

      logoMoveToX(xPercent * 50);
      logoMoveToY(yPercent * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { height: logoHeight, width: logoWidth } = useMemo(() => {
    if (isMobile) {
      return { height: 130, width: 270 };
    }
    if (isTablet) {
      return { height: 200, width: 370 };
    }
    return { height: 362, width: 701 };
  }, [isMobile, isTablet]);

  return (
    <section id="Hero-Section">
      <Image
        id="Hero-Section-Logo"
        src={Witcher3ImgSrc}
        alt="The Witcher 3 Wild Hunt"
        width={logoWidth}
        height={logoHeight}
        loading="eager"
      />
    </section>
  );
}
