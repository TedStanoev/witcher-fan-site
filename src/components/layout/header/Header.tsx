'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './Header.module.scss';
import Logo from '../../../../public/images/logo.png';

type Props = {
  id: string;
};

export default function Header({ id }: Props) {
  const logoTLRef = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    gsap.from('#app-header', {
      y: -500,
      duration: 1.5,
      ease: 'power2.inOut',
    });

    logoTLRef.current = gsap.timeline({ paused: true }).fromTo(
      `#${id}-logo`,
      {
        scale: 1,
      },
      { scale: 1.2 }
    );
  }, []);

  return (
    <nav id={id} className={styles['Header']}>
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
        <h1>The Witcher 3</h1>
      </Link>
      <div className={styles['Header--Right-Content']}>
        <ul className={styles['Header--Right-Content--List']}>
          {/* TODO: Add url navigations */}
          <li>
            <Link href="/">Characters</Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">Soundtrack</Link>
          </li>
          <li>
            <Link href="/">Community</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
