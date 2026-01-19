import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  ScrollTrigger.refresh();

  // You can also set global defaults here
  gsap.defaults({ ease: 'power2.out', duration: 0.5 });
}

// export * from 'gsap';
export default gsap;
export { ScrollTrigger, SplitText };
