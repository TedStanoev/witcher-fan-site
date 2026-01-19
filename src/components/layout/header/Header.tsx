'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap, { ScrollTrigger } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './Header.module.scss';
import Logo from '../../../../public/images/logo.png';
import HamburgerIcon from '../../../../public/icons/hamburger.svg';

import useResponsive from '@/hooks/useResponsive';
import { navigationLinks } from '@/constants/links';

type Props = {
  id: string;
};

export default function Header({ id }: Props) {
  const navRef = useRef<HTMLElement>(null);
  const logoTLRef = useRef<GSAPTimeline>(null);

  const { isMobile, isTablet } = useResponsive();

  useGSAP(() => {
    const showNav = gsap.from(navRef.current, {
      yPercent: -100,
      ease: 'power3.inOut',
      paused: true,
      delay: 1,
    });

    showNav.play();

    new ScrollTrigger({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) =>
        self.direction === 1
          ? showNav.delay(0).reverse()
          : showNav.delay(0).play(),
    });

    logoTLRef.current = gsap.timeline({ paused: true }).fromTo(
      `#${id}-logo`,
      {
        scale: 1,
      },
      { scale: 1.2 },
    );
  }, []);

  return (
    <nav ref={navRef} id={id} className={styles['Header']}>
      <div className={styles['Header--Inner']}>
        <Link
          href="/"
          className={styles['Header--Left-Content']}
          onMouseEnter={() => logoTLRef.current?.play()}
          onMouseLeave={() => logoTLRef.current?.reverse()}
        >
          <Image
            id={`${id}-logo`}
            src={Logo}
            alt="logo"
            width={60}
            height={60}
            loading="eager"
          />
          {!isMobile && <h1>The Witcher 3</h1>}
        </Link>
        <div className={styles['Header--Right-Content']}>
          {[isTablet, isMobile].filter((x) => x).length === 0 ? (
            <ul className={styles['Header--Right-Content--List']}>
              {navigationLinks.map((nl) => (
                <li key={nl.id}>
                  <Link href={nl.href}>{nl.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <div className={styles['Header--Right-Content--List']}>
                <button
                  className={styles['Header--Menu-Button']}
                  aria-label="open-menu-button"
                >
                  <HamburgerIcon
                    width={50}
                    height={50}
                    onClick={() => gsap.to('#nav-menu', { left: 0 })}
                  />
                </button>
              </div>
              <div id="nav-menu" className={styles['Header--Menu']}>
                <div className={styles['Header--Menu--Inner']}>
                  <div
                    className={styles['Header--Menu--Head']}
                    onClick={() =>
                      gsap.to('#nav-menu', { left: isMobile ? '200%' : '110%' })
                    }
                  >
                    <button aria-label="close-menu-button">X</button>
                  </div>
                  <div className={styles['Header--Menu--Body']}>
                    <ul className={styles['Header--Menu--List']}>
                      {navigationLinks.map((nl) => (
                        <li key={nl.id}>
                          <Link href={nl.href}>{nl.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
