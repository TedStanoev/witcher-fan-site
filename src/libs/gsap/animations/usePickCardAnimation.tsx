import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import gsap from '..';

export default function usePickCardAnimation(
  cardTarget: gsap.TweenTarget,
  otherTargets: gsap.TweenTarget,
) {
  const tlRef = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    tlRef.current = gsap
      .timeline({
        paused: true,
      })
      .to(cardTarget, {
        yPercent: -50,
        ease: 'power2.inOut',
      })
      .to(
        otherTargets,
        {
          yPercent: 50,
          opacity: 0.1,
          ease: 'power2.inOut',
        },
        '<0',
      )
      .to(
        otherTargets,
        {
          opacity: 0,
          ease: 'power2.inOut',
        },
        '<0.1',
      )
      .to(cardTarget, {
        x: (i, target) => -(target.getBoundingClientRect().left - 100),
      });
  }, []);

  return { tlRef };
}
