import Image from "next/image";
import styles from "./ContactSection.module.css";
import contactUs from "@/app/assets/contactus.svg";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.contactUs}>
      <Image
        src={contactUs}
        alt="mantenimiento preventivo"
        className={styles.image}
      />
      <div className={styles.form}>
        <p>Contáctanos</p>
        <div className={styles.box}>
          <input id="name" type="text" autoComplete="off" />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className={styles.box}>
          <input id="company" type="text" autoComplete="off" />
          <label htmlFor="company">Organización/Empresa</label>
        </div>
        <div className={styles.box}>
          <input id="mail" type="email" autoComplete="off" />
          <label htmlFor="mail">Correo electrónico</label>
        </div>
        <div className={styles.box}>
          <input id="phone" type="number" autoComplete="off" />
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className={styles.boxMsg}>
          <textarea name="msg" id="msg" autoComplete="off"></textarea>
          <label htmlFor="msg">Mensaje</label>
        </div>
        <div className={styles.btn}>Enviar</div>
      </div>
      <article className={styles.label}>
        <p className={styles.title}>¿En qué te podemos servir?</p>
        <p className={styles.description}>
          DANASHY ofrece un conjunto de servicios que permiten controlar,
          instalar, monitorear y mantener en óptimas condiciones las
          instalaciones de tu organización, somos la mejor opción, averigua como
          podemos ayudarte.
        </p>
        <div className={styles.data}>
          <Image src="./phone.svg" width={28} height={28} alt="teléfono" />
          &nbsp;&nbsp;56 1837 4471
        </div>
        <div className={styles.data}>
          <Image src="./whatsapp.svg" width={28} height={28} alt="whatsapp" />
          &nbsp;&nbsp;55 9234 3497
        </div>
        <div className={styles.data}>
          <Image
            src="./email.svg"
            width={28}
            height={28}
            alt="correo electrónico"
          />
          &nbsp;&nbsp;contacto@danashy.mx
        </div>
      </article>
    </section>
  );
}
