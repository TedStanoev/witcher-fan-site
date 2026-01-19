'use client';

import { useMemo, useRef } from 'react';
import gsap, { SplitText } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import useResponsive from '@/hooks/useResponsive';

import './SoundtrackSection.scss';

export default function SoundtrackSection() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  const { isMobile, isTablet, isDesktop, isDesktopUp } = useResponsive();

  const iFrameWidth = useMemo(() => {
    if (isTablet || isMobile) return '320';
    if (isDesktop || isDesktopUp) return '560';
    return '420';
  }, [isDesktop, isDesktopUp, isTablet, isMobile]);

  useGSAP(
    () => {
      const soundtrackTitle = new SplitText(
        '.Soundtrack-Section--Container--Title',
        { type: 'chars' },
      );
      const soundtrackDescription = new SplitText(
        '.Soundtrack-Section--Container--Description',
        { type: 'words' },
      );

      gsap.fromTo(
        sectionRef.current,
        { y: -10 },
        {
          y: -250,
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
          },
          ease: 'power2.inOut',
        },
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom top',
          },
        })
        .from(soundtrackTitle.chars, {
          opacity: 0,
          stagger: 0.08,
          ease: 'power2.out',
        })
        .from(
          soundtrackDescription.words,
          {
            opacity: 0,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.5',
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="Soundtrack-Section">
      <div className="Soundtrack-Section--Container">
        <div className="Soundtrack-Section--Container--Inner">
          <h1 className="Soundtrack-Section--Container--Title">Soundtrack</h1>
          <p className="Soundtrack-Section--Container--Description">
            Experience the slavic soundtrack of The Witcher 3. Includes
            soundtracks from the base game and expansions.
          </p>
          <iframe
            width={iFrameWidth}
            height="315"
            src="https://www.youtube.com/embed/rI2vjPUztJc?si=xJJwRlefj3DP0lxS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div ref={videoWrapperRef} className="Soundtrack-Section--Video-Wrapper">
        <video
          ref={videoRef}
          className="Soundtrack-Section--Video-Background"
          src="/videos/meditating-geralt.mp4"
          controls={false}
          muted
          loop
          autoPlay
          playsInline
        />
      </div>
    </section>
  );
}
