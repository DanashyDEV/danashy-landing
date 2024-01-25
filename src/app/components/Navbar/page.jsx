"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS, SOCIAL_MEDIA } from "../../constants/page";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import useScreenSize from "../../hooks/useScreenSize";

export default function Navbar() {
  const [clickHam, setClickHam] = useState(false);
  const [ham1, setHam1] = useState(styles.bar1);
  const [ham2, setHam2] = useState(styles.bar2);
  const [ham3, setHam3] = useState(styles.bar3);
  const [menu, setMenu] = useState(styles.close);
  const width = useScreenSize();

  useEffect(() => {
    width >= 1025 ? setMenu(styles.menu) : setMenu(styles.close);
    setHam1(styles.bar1);
    setHam2(styles.bar2);
    setHam3(styles.bar3);
    setClickHam(false);
  }, [width]);

  function handleMenu() {
    if (!clickHam) {
      setHam1(`${styles.bar1} ${styles.dg1}`);
      setHam2(`${styles.bar2} ${styles.dg2}`);
      setHam3(`${styles.bar3} ${styles.dg3}`);
      setMenu(styles.menu);
    } else {
      setHam1(styles.bar1);
      setHam2(styles.bar2);
      setHam3(styles.bar3);
      setMenu(styles.close);
    }
    setClickHam(!clickHam);
  }

  return (
    <>
      <Link href="/" className={styles.logotype}>
        <Image
          src="/logotype.svg"
          alt="DANASHY"
          width={150}
          height={150}
          priority
        />
      </Link>
      <div className={styles.hamburguer} onClick={() => handleMenu()}>
        <span className={ham1}></span>
        <span className={ham2}></span>
        <span className={ham3}></span>
      </div>
      <nav className={menu}>
        <ul className={styles.navbar}>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </ul>
        <ul className={styles.social}>
          {SOCIAL_MEDIA.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              target="_blank"
              className={styles.icon}
            >
              <Image src={link.icon} alt={link.key} width={16} height={16} />
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
