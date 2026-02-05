'use client';

import { useGSAP } from '@gsap/react';

import CharacterSectionTemplate from '@/components/templates/CharacterSectionTemplate';
import useParallaxEffect from '@/libs/gsap/animations/useParallaxTransition';

import YenneferSrc from '../../../../../public/images/yennefer.png';
import YenneferBGSrc from '../../../../../public/images/yennefer-background.png';

import './YenneferCharacterSection.scss';

type TProps = { zIndex?: number };

export default function YenneferCharacterSection({ zIndex }: TProps) {
  useGSAP(() => {}, []);

  useParallaxEffect(
    '#yennefer-character-section',
    '.Yennefer-Character-Section--Background',
    '.Yennefer-Character-Section--Image',
  );

  return (
    <CharacterSectionTemplate
      id="yennefer-character-section"
      classNamePrefix="Yennefer"
      backgroundImgSrc={YenneferBGSrc}
      backgroundAltText="Yennefer background"
      characterImgSrc={YenneferSrc}
      characterAltText="Yennefer of Vengerberg"
      characterName="Yennefer of Vengerberg"
      characterQuote={`"I'm not heartless, I've just learned how to use my heart less."`}
      zIndex={zIndex}
    />
  );

  // return (
  //   <section id={id} className="Yennefer-Character-Section">
  //     <Image
  //       className="Yennefer-Character-Section--Image"
  //       src={YenneferSrc}
  //       alt="Yennefer of Vengerberg"
  //     />
  //     <div className="Yennefer-Character-Section--Inner-Wrapper">
  //       <div className="Yennefer-Character-Section--Description-Wrapper">
  //         <h2 className="Yennefer-Character-Section--Name">Yennefer of Vengerberg</h2>
  //         <p className="Yennefer-Character-Section--Quote">{`"I'm not heartless, I've just learned how to use my heart less."`}</p>
  //       </div>
  //     </div>
  //   </section>
  // );
}
