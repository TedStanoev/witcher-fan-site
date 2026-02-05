'use client';

import Image, { StaticImageData } from 'next/image';

type TProps = {
  id?: string;
  backgroundImgSrc: StaticImageData;
  backgroundAltText: string;
  characterImgSrc: StaticImageData;
  characterAltText: string;
  characterName: string;
  characterQuote: string;
  classNamePrefix?: string;
  zIndex?: number;
};

export default function CharacterSectionTemplate({
  id,
  backgroundImgSrc,
  backgroundAltText,
  characterImgSrc,
  characterAltText,
  characterName,
  characterQuote,
  classNamePrefix,
  zIndex,
}: TProps) {
  return (
    <section style={{ zIndex }} id={id} className="Geralt-Character-Section">
      <Image
        src={backgroundImgSrc}
        alt={backgroundAltText}
        className={`${classNamePrefix || 'Geralt'}-Character-Section--Background`}
      />
      <Image
        className={`${classNamePrefix || 'Geralt'}-Character-Section--Image`}
        src={characterImgSrc}
        alt={characterAltText}
      />
      <div
        className={`${classNamePrefix || 'Geralt'}-Character-Section--Inner-Wrapper`}
      >
        <div
          className={`${classNamePrefix || 'Geralt'}-Character-Section--Description-Wrapper`}
        >
          <h2
            className={`${classNamePrefix || 'Geralt'}-Character-Section--Name`}
          >
            {characterName}
          </h2>
          <div
            className={`${classNamePrefix || 'Geralt'}-Character-Section--Quote--Wrapper`}
          >
            <p
              className={`${classNamePrefix || 'Geralt'}-Character-Section--Quote`}
            >
              {characterQuote}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${classNamePrefix || 'Geralt'}-Character-Section--Outer-Wrapper`}
      >
        <div
          className={`${classNamePrefix || 'Geralt'}-Character-Section--Description-Wrapper`}
        >
          <h2
            className={`${classNamePrefix || 'Geralt'}-Character-Section--Name`}
          >
            {characterName}
          </h2>
          <div
            className={`${classNamePrefix || 'Geralt'}-Character-Section--Quote--Wrapper`}
          >
            <p
              className={`${classNamePrefix || 'Geralt'}-Character-Section--Quote`}
            >
              {characterQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
