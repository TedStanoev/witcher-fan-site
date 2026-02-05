import { useGSAP } from '@gsap/react';

import gsap from '..';

export default function useParallaxEffect(
  trigger: gsap.DOMTarget,
  background: gsap.TweenTarget,
  foreground: gsap.TweenTarget,
) {
  useGSAP(() => {
    gsap.matchMedia().add(`(max-width: 1024px)`, () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger,
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
          },
        })
        .from(background, {
          scale: 1.5,
        })
        .from(
          foreground,
          {
            scale: 0.5,
          },
          '<0',
        );
    });
  }, []);
}
