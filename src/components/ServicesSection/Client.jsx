import styles from "./Client.module.css"
import Image from 'next/image'

export default function Client(props) {
  return (
    <article className={styles.client}>
      <Image src={props.src} alt={props.alt} className={styles.image}/>
    </article>
  )
}
