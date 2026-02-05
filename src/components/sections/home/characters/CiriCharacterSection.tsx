'use client';

import Image from 'next/image';

import CiriSrc from '../../../../../public/images/ciri.png';
import CiriBGSrc from '../../../../../public/images/ciri-background.jpg';

import './CiriCharacterSection.scss';
import CharacterSectionTemplate from '@/components/templates/CharacterSectionTemplate';
import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from '@/libs/gsap';

type TProps = { zIndex?: number };

export default function CiriCharacterSection({ zIndex }: TProps) {
  useGSAP(() => {
    gsap.matchMedia().add(`(max-width: 1024px)`, () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#ciri-character-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        })
        .from('.Ciri-Character-Section--Background', {
          scale: 2,
        })
        .from(
          '.Ciri-Character-Section--Image',
          {
            scale: 0.5,
          },
          '<0',
        );
    });
  }, []);
  return (
    <CharacterSectionTemplate
      id="ciri-character-section"
      classNamePrefix="Ciri"
      backgroundImgSrc={CiriBGSrc}
      backgroundAltText="Ciri background"
      characterImgSrc={CiriSrc}
      characterAltText="Ciri"
      characterName="Cirilla of Cintra"
      characterQuote={`"I can't keep running. I have to face my destiny... but I'll do it on my own terms."`}
      zIndex={zIndex}
    />
  );
}
