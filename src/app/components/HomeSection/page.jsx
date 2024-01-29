import Link from "next/link";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.video}>
        <video
          src="/scalator.mp4"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
          controls={false}
          mute="true"
          autoPlay
          loop
          playsInline
        />
      </div>
      <div className={styles.label}>
        <p className={styles.title}>
          SOLUCIONES ESPECIALIZADAS PARA INSTALACIONES INTELIGENTES
        </p>
        <p className={styles.description}>
          Adquiere la mejor seguridad, confort y control de las instalaciones de
          tu organización, desde edificios y plazas comerciales hasta unidades
          habitacionales.
        </p>
        <Link href="/" className={styles.contact}>
          CONTÁCTANOS
        </Link>
      </div>
    </section>
  );
}