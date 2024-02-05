import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants/page";
import styles from "./Footer.module.css";

import atcs from "@/app/assets/ATCS.svg";
import logotype from "@/app/assets/logotype.svg";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <Link href="/" className={styles.logotypebox}>
          <Image
            src={logotype}
            alt="danashy servicios integrales"
            className={styles.imageLogo}
          />
        </Link>
        <ul className={styles.menu}>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </ul>
        <Link href="/" className={styles.atcsbox}>
          <Image src={atcs} alt="ATCS WEB DEVELOPER" className={styles.imageLogo} />
        </Link>
      </div>
      <div className={styles.contact}>
        <div className={styles.data}>
          <Image
            src="./phone.svg"
            width={28}
            height={28}
            alt="teléfono"
            className={styles.image}
          />
          &nbsp;&nbsp;56 1837 4471
        </div>
        <div className={styles.data}>
          <Image
            src="./whatsapp.svg"
            width={28}
            height={28}
            alt="whatsapp"
            className={styles.image}
          />
          &nbsp;&nbsp;55 9234 3497
        </div>
        <div className={styles.data}>
          <Image
            src="./email.svg"
            width={28}
            height={28}
            alt="correo electrónico"
            className={styles.image}
          />
          &nbsp;&nbsp;contacto@danashy.mx
        </div>
      </div>
      <div className={styles.legend}>© 2024 Danashy - Servicios Integrales</div>
    </section>
  );
}

export default Footer
