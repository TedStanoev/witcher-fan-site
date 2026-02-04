'use client';

import Image from 'next/image';

import TrissSrc from '../../../../../public/images/triss-cut.png';

import './TrissCharacterSection.scss';

type TProps = { id?: string };

export default function TrissCharacterSection({ id }: TProps) {
  return (
    <section id={id} className="Triss-Character-Section">
      <Image
        className="Triss-Character-Section--Image"
        src={TrissSrc}
        alt="Triss"
      />
      <div className="Triss-Character-Section--Inner-Wrapper">
        <div className="Triss-Character-Section--Description-Wrapper">
          <h2 className="Triss-Character-Section--Name">
            Triss Merigold
          </h2>
          <p className="Triss-Character-Section--Quote">{`"I can't keep running. I have to face my destiny... but I'll do it on my own terms."`}</p>
        </div>
      </div>
    </section>
  );
}
