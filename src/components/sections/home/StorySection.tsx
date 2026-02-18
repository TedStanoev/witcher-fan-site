'use client';

import { RefObject, useCallback, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from '@/libs/gsap';
import GwentCard from '@/components/GwentCard';

import './StorySection.scss';

type CardData = {
  name: string;
  imgSrc: string;
};

const CARDS_DATA: CardData[] = [
  {
    name: 'Ciri-Gwent-Card',
    imgSrc: 'ciri-gwent-card.jpg',
  },
  {
    name: 'Eredin-Gwent-Card',
    imgSrc: 'eredin-gwent-card.jpg',
  },
  {
    name: 'Geralt-Gwent-Card',
    imgSrc: 'geralt-gwent-card.jpg',
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [flippedCard, setFlippedCard] = useState('');

  useGSAP(() => {
    if (!sectionRef.current) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
    });

    const storySplit = new SplitText('.Story-Section--Heading > h1', {
      type: 'chars',
    });
    const pickACardSplit = new SplitText('.Story-Section--Heading > h2', {
      type: 'chars',
    });

    timeline
      .from(storySplit.chars, {
        opacity: 0,
        xPercent: -10,
        yPercent: 10,
        ease: 'power2.inOut',
        stagger: 0.05,
      })
      .from(
        pickACardSplit.chars,
        {
          opacity: 0,
          xPercent: -10,
          yPercent: 10,
          ease: 'power2.inOut',
          stagger: 0.05,
        },
        '<0.2',
      )
      .from('.Gwent-Card--Wrapper', {
        yPercent: 50,
      })
      .from(
        '.Gwent-Card--Wrapper',
        {
          opacity: 0,
        },
        '<0.05',
      );
  }, []);

  const onCardClick = useCallback(
    (name: string, tlRef: RefObject<gsap.core.Timeline | null>) => {
      if (flippedCard === name) {
        setFlippedCard('');
        tlRef.current?.reverse();
      } else {
        setFlippedCard(name);
        tlRef.current?.play();
      }
    },
    [flippedCard],
  );

  return (
    <section className="Story-Section" ref={sectionRef}>
      <div className="Story-Section--Heading">
        <h1>Story</h1>
        <h2>Pick a card</h2>
      </div>

      <div className="Story-Section--Card-Container">
        {CARDS_DATA.map((c) => (
          <GwentCard
            key={c.name}
            name={c.name}
            imgName={c.imgSrc}
            isFlipped={flippedCard === c.name}
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
}
