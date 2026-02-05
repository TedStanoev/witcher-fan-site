'use client';

import CiriSrc from '../../../../../public/images/ciri.png';
import CiriBGSrc from '../../../../../public/images/ciri-background.jpg';

import './CiriCharacterSection.scss';
import CharacterSectionTemplate from '@/components/templates/CharacterSectionTemplate';
import useParallaxEffect from '@/libs/gsap/animations/useParallaxTransition';

type TProps = { zIndex?: number };

export default function CiriCharacterSection({ zIndex }: TProps) {
  useParallaxEffect(
    '#ciri-character-section',
    '.Ciri-Character-Section--Background',
    '.Ciri-Character-Section--Image',
  );

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
