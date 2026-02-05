'use client';

import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from '@/libs/gsap';
import Image from 'next/image';

import GeraltSrc from '../../../../../public/images/geralt.png';
import GeraltBGSrc from '../../../../../public/images/geralt-background.jpg';
import { breakpoints } from '@/hooks/useResponsive';

import './GeraltCharacterSection.scss';
import { useRef } from 'react';

type TProps = { id?: string };

export default function GeraltCharacterSection({ id }: TProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // gsap.matchMedia().add(`(max-width: ${breakpoints.laptop}px)`, () => {
    //   const textSplit = new SplitText('.Geralt-Character-Section--Quote', {
    //     type: 'lines',
    //   });

    //   gsap.from(textSplit.lines, {
    //     yPercent: 15,
    //     xPercent: -15,
    //     opacity: 0,
    //     ease: 'power1.inOut',
    //     stagger: 0.3,
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'top center',
    //     },
    //   });
    // });
  }, []);

  return (
    <section ref={sectionRef} id={id} className="Geralt-Character-Section">
      <Image
        src={GeraltBGSrc}
        alt="Geralt Background"
        className="Geralt-Character-Section--Background"
      />
      <Image
        className="Geralt-Character-Section--Image"
        src={GeraltSrc}
        alt="Geralt of Rivia"
      />
      <div className="Geralt-Character-Section--Inner-Wrapper">
        <div className="Geralt-Character-Section--Description-Wrapper">
          <h2 className="Geralt-Character-Section--Name">Geralt of Rivia</h2>
          <div className="Geralt-Character-Section--Quote--Wrapper">
            <p className="Geralt-Character-Section--Quote">{`"I'm a Witcher. I don't kill people\nfor money. I kill monsters for money."`}</p>
          </div>
        </div>
      </div>
      <div className="Geralt-Character-Section--Outer-Wrapper">
        <div className="Geralt-Character-Section--Description-Wrapper">
          <h2 className="Geralt-Character-Section--Name">Geralt of Rivia</h2>
          <div className="Geralt-Character-Section--Quote--Wrapper">
            <p className="Geralt-Character-Section--Quote">{`"I'm a Witcher. I don't kill people\nfor money. I kill monsters for money."`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
