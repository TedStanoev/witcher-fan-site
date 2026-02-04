'use client';

import { useGSAP } from '@gsap/react';
import gsap from '@/libs/gsap';
import Image from 'next/image';

import GeraltSrc from '../../../../../public/images/geralt.png';
import GeraltBGSrc from '../../../../../public/images/geralt-background.jpg';

import './GeraltCharacterSection.scss';

type TProps = { id?: string };

export default function GeraltCharacterSection({ id }: TProps) {
  useGSAP(() => {}, []);

  return (
    <section id={id} className="Geralt-Character-Section">
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
