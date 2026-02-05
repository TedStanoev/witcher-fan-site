'use client';

import { useRef } from 'react';
import Image from 'next/image';

import CharacterSectionTemplate from '@/components/templates/CharacterSectionTemplate';

import GeraltSrc from '../../../../../public/images/geralt.png';
import GeraltBGSrc from '../../../../../public/images/geralt-background.jpg';

import './GeraltCharacterSection.scss';

type TProps = { zIndex?: number };

export default function GeraltCharacterSection({ zIndex }: TProps) {
  return (
    <CharacterSectionTemplate
      id="geralt-character-section"
      classNamePrefix="Geralt"
      backgroundImgSrc={GeraltBGSrc}
      backgroundAltText="Geralt background"
      characterImgSrc={GeraltSrc}
      characterAltText="Geralt of Rivia"
      characterName="Geralt of Rivia"
      characterQuote={`"I'm a Witcher. I don't kill people\nfor money. I kill monsters for money."`}
      zIndex={zIndex}
    />
  );
}
