import Link from "next/link";
import Image from "next/image";
import styles from "./Whatsapp.module.css"
import whats from "../../../../public/whatsapp.svg"

export default function WhatsApp() {
  return (
    <Link
      href="https://wa.me/5618374471/?text=Requiro%20más%20información%20de%20sus%20servicios..."
      target="_blank"
      className={styles.whats}
    >
      <Image src={whats} alt="whatsapp" className={styles.image} />
    </Link>
  );
}
