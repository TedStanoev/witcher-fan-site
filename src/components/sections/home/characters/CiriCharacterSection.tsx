'use client';

import Image from 'next/image';

import CiriSrc from '../../../../../public/images/ciri.png';

import './CiriCharacterSection.scss';

type TProps = { id?: string };

export default function CiriCharacterSection({ id }: TProps) {
  return (
    <section id={id} className="Ciri-Character-Section">
      <Image
        className="Ciri-Character-Section--Image"
        src={CiriSrc}
        alt="Ciri"
      />
      <div className="Ciri-Character-Section--Inner-Wrapper">
        <div className="Ciri-Character-Section--Description-Wrapper">
          <h2 className="Ciri-Character-Section--Name">
            Cirilla Fiona Elen Riannon
          </h2>
          <p className="Ciri-Character-Section--Quote">{`"I can't keep running. I have to face my destiny... but I'll do it on my own terms."`}</p>
        </div>
      </div>
    </section>
  );
}
