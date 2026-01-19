'use client';

import { useMemo, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import useResponsive, { breakpoints } from '@/hooks/useResponsive';
import gsap from '@/libs/gsap';

import Witcher3ImgSrc from '../../../../public/images/the-wticher-hero.png';

import styles from './HeroSection.module.scss';

type TProps = { id?: string };

export default function HeroSection({ id }: TProps) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isScrollTriggered = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { isMobile, isTablet } = useResponsive();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(sectionRef.current, {
        opacity: 0,
        duration: 1.5,
        scale: 3,
        ease: 'power2.inOut',
      }).from(titleRef.current, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      const heroSectionMoveToX = gsap.quickTo(sectionRef.current, 'x', {
        duration: 0.8,
        ease: 'power3',
      });
      const heroSectionMoveToY = gsap.quickTo(sectionRef.current, 'y', {
        duration: 0.8,
        ease: 'power3',
      });

      const logoMoveToX = gsap.quickTo(titleRef.current, 'x', {
        duration: 0.6,
        ease: 'power3',
      });
      const logoMoveToY = gsap.quickTo(titleRef.current, 'y', {
        duration: 0.6,
        ease: 'power3',
      });

      gsap.to(sectionRef.current, {
        y: 200,
        scrollTrigger: {
          scrub: 1,
          onToggle: (self) => {
            if (!self.isActive) {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => {
                isScrollTriggered.current = self.isActive;
              }, 500);
            } else {
              isScrollTriggered.current = self.isActive;
            }
          },
        },
      });
      gsap.to(titleRef.current, {
        y: -150,
        scrollTrigger: {
          scrub: 1,
        },
      });

      // Enable parallax effect only on laptop and up
      gsap.matchMedia().add(`(min-width: ${breakpoints.laptop}px)`, () => {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;

          if (typeof window === 'undefined') return;

          const xPercent = clientX / window.innerWidth - 0.5;
          const yPercent = clientY / window.innerHeight - 0.5;

          if (isScrollTriggered.current) {
            heroSectionMoveToX(xPercent * 20);
            logoMoveToX(xPercent * 50);
            return;
          }

          heroSectionMoveToX(xPercent * 20);
          heroSectionMoveToY(yPercent * 20);

          logoMoveToX(xPercent * 50);
          logoMoveToY(yPercent * 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          window.removeEventListener('mousemove', handleMouseMove);
        };
      });
    },
    { scope: sectionRef },
  );

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
    <section ref={sectionRef} id={id} className={styles['Hero-Section']}>
      <Image
        ref={titleRef}
        src={Witcher3ImgSrc}
        width={logoWidth}
        height={logoHeight}
        className={styles['Hero-Section-Title']}
        alt="The Witcher 3 Wild Hunt"
        loading="eager"
      />
    </section>
  );
}
