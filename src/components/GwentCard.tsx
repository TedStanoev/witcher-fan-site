'use client';

import { RefObject } from 'react';
import Image from 'next/image';

import usePickCardAnimation from '@/libs/gsap/animations/usePickCardAnimation';

import GwentBackImgSrc from '../../public/images/gwent-card-back.jpg';

import './GwentCard.scss';

type TProps = {
  name: string;
  imgName: string;
  isFlipped: boolean;
  onClick: (name: string, tlRef: RefObject<gsap.core.Timeline | null>) => void;
};

export default function GwentCard({
  name,
  imgName,
  isFlipped,
  onClick,
}: TProps) {
  const { tlRef } = usePickCardAnimation(
    `.${name}`,
    `.Gwent-Card--Wrapper:not(.${name})`,
  );

  return (
    <div
      className={['Gwent-Card--Wrapper', name].join(' ')}
      onClick={() => onClick(name, tlRef)}
    >
      <div className={'Gwent-Card' + (isFlipped ? ' Flipped' : '')}>
        <div
          className={'Gwent-Card--Inner' + (isFlipped ? ' Card-Flipped' : '')}
        >
          <div className="Gwent-Card--Back">
            <Image
              src={GwentBackImgSrc}
              alt="Gwent Card Back"
              sizes="300px"
              fill
            />
          </div>
          <div className="Gwent-Card--Front">
            <Image
              src={`/images/${imgName}`}
              alt="Hero Card"
              sizes="300px"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
