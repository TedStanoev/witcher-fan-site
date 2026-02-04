'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';

import YenneferSrc from '../../../../../public/images/yennefer.png';

import './YenneferCharacterSection.scss';

type TProps = { id?: string };

export default function YenneferCharacterSection({ id }: TProps) {
  useGSAP(() => {}, []);

  return (
    <section id={id} className="Yennefer-Character-Section">
      <Image
        className="Yennefer-Character-Section--Image"
        src={YenneferSrc}
        alt="Yennefer of Vengerberg"
      />
      <div className="Yennefer-Character-Section--Inner-Wrapper">
        <div className="Yennefer-Character-Section--Description-Wrapper">
          <h2 className="Yennefer-Character-Section--Name">Yennefer of Vengerberg</h2>
          <p className="Yennefer-Character-Section--Quote">{`"I'm not heartless, I've just learned how to use my heart less."`}</p>
        </div>
      </div>
    </section>
  );
}
