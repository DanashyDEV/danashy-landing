import Image from "next/image";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <article className={styles.card}>
      <Image
        src={props.src}
        alt={props.alt}
        fill
        priority
        className={styles.image}
      />
      <div className={styles.label}>
        <p className={styles.title}>{props.title}</p>
        <ul className={styles.description}>
          {props.description.map((dataList) => (
            <li key={dataList.list}>{dataList.list}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card