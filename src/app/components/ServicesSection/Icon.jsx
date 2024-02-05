import Image from "next/image";
import styles from "./Icon.module.css";

function Icon(props) {
  return (
    <article className={styles.icon}>
      <div className={styles.circle}>
        <Image src={props.src} alt={props.alt} className={styles.image} />
      </div>
      <div className={styles.rectangle}>
        <p className={styles.description}>{props.data}</p>
      </div>
    </article>
  );
}

export default Icon