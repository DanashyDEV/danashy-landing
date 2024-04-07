"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import useScreenSize from "@/hooks/useScreenSize";

function AboutSection() {
  const [device1, setDevice1] = useState(styles.about);
  const [device3, setDevice3] = useState(styles.text1);
  const [device4, setDevice4] = useState(styles.text2);
  const width = useScreenSize();

  useEffect(() => {
    if (width < 768) {
      setDevice1(styles.aboutPhone);
      setDevice3(styles.text1Phone);
      setDevice4(styles.text2Phone);
    } else {
      setDevice1(styles.about);
      setDevice3(styles.text1);
      setDevice4(styles.text2);
    }
  }, [width]);

  return (
    <section id="about" className={device1}>
      <p className={device3}>
        Somos una empresa mexicana dedicada a satisfacer las necesidades de
        nuestros clientes, ofreciendo nuestros servicios y productos con una
        excelente calidad, proporcionado mejoras, desarrollo e innovación,
        comprometidos con la integridad, entusiasmo y responsabilidad propia de
        nuestra empresa.
      </p>
      <Image
        src="/about.svg"
        alt="sección sobre nosotros"
        fill
        className={styles.image}
        priority
      />
      <Image
        src="/about.svg"
        alt="sección sobre nosotros"
        width={290}
        height={290}
        className={styles.imagePhone}
        priority
      />
      <p className={device4}>
        Queremos consolidarnos como una de las mejores empresas a nivel nacional
        e internacional donde la ética profesional y los altos estándares de
        seguridad nos lleven de la mano a generar un grado máximo de
        satisfacción y confianza en cada uno de nuestros clientes, asociados y
        personal que hace posible la existencia y desarrollo de nuestra empresa.
      </p>
    </section>
  );
}

export default AboutSection