'use client';

import CharacterSectionTemplate from '@/components/templates/CharacterSectionTemplate';

import TrissSrc from '../../../../../public/images/triss-cut.png';
import TrissBGSrc from '../../../../../public/images/triss-background.jpg';

import './TrissCharacterSection.scss';

type TProps = { zIndex?: number };

export default function TrissCharacterSection({ zIndex }: TProps) {
  return (
    <CharacterSectionTemplate
      id="triss-character-section"
      classNamePrefix="Triss"
      backgroundImgSrc={TrissBGSrc}
      backgroundAltText="Triss background"
      characterImgSrc={TrissSrc}
      characterAltText="Triss Merigold"
      characterName="Triss Merigold"
      characterQuote={`"Winning a war takes three things. Coin, coin, and even more coin."`}
      zIndex={zIndex}
    />
  );
}
