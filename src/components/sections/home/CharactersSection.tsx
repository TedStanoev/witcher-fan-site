'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from '@/libs/gsap';

import GeraltCharacterSection from './characters/GeraltCharacterSection';
import CiriCharacterSection from './characters/CiriCharacterSection';
import YenneferCharacterSection from './characters/YenneferCharacterSection';
import TrissCharacterSection from './characters/TrissCharacterSection';

import './CharactersSection.scss';
import { breakpoints } from '@/hooks/useResponsive';

type TProps = { id?: string };

export default function CharactersSection({ id }: TProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sparksVideoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add(`(min-width: ${breakpoints.laptop}px)`, () => {
      if (window && scrollRef.current && triggerRef.current) {
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(scrollRef.current, {
          x: () => -(totalWidth - viewportWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: sectionRef.current,
            scrub: 1,
            start: 'top 15%',
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        })
        .from('.Geralt-Character-Section--Background', {
          scale: 2,
        })
        .from(
          '.Geralt-Character-Section--Image',
          {
            scale: 0.5,
          },
          '<0',
        )
        .to(
          sectionRef.current,
          {
            yPercent: -15,
          },
          '<0',
        );
    });

    gsap.matchMedia().add(`(max-width: ${breakpoints.laptop}px)`, () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
          },
        })
        .from('.Geralt-Character-Section--Background', {
          scale: 2,
        })
        .from(
          '.Geralt-Character-Section--Image',
          {
            scale: 0.5,
          },
          '<0',
        )
        .to(
          sectionRef.current,
          {
            yPercent: -15,
          },
          '<0',
        );
    });
  }, []);

  return (
    <section ref={sectionRef} id={id} className="Characters-Section">
      <div ref={triggerRef} className="Characters-Section--Header-Wrapper">
        <video
          ref={sparksVideoRef}
          src="/videos/fire-sparks.mp4"
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
        />
        {/* <h1 ref={headerRef} className="Characters-Section--Header">
          Characters
        </h1> */}
        <div ref={scrollRef} className="Character-Section--Container">
          <GeraltCharacterSection />
          <CiriCharacterSection />
          <YenneferCharacterSection />
          <TrissCharacterSection />
        </div>
      </div>
    </section>
  );
}
