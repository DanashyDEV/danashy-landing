import Image from "next/image";
import styles from "./ContactSection.module.css";
import contactUs from "@/assets/contactus.svg";

function ContactUs() {
  return (
    <section id="contact" className={styles.contactUs}>
      <Image
        src={contactUs}
        alt="mantenimiento preventivo"
        className={styles.image}
      />
      <form
        className={styles.form}
        action="https://formsubmit.co/contacto@danashy.mx"
        method="POST"
      >
        <p>Contáctanos</p>
        <div className={styles.box}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            maxLength={50}
            required
          />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className={styles.box}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="off"
            maxLength={50}
            required
          />
          <label htmlFor="company">Organización/Empresa</label>
        </div>
        <div className={styles.box}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            maxLength={50}
            required
          />
          <label htmlFor="email">Correo electrónico</label>
        </div>
        <div className={styles.box}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="off"
            minLength={10}
            maxLength={14}
            required
          />
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className={styles.boxMsg}>
          <textarea
            name="message"
            id="msg"
            autoComplete="off"
            maxLength={500}
          />
          <label htmlFor="message">Mensaje</label>
        </div>
        <input type="hidden" name="_next" value="https://www.danashy.mx/"></input>
        <button className={styles.btn} type="submit">
          Enviar
        </button>
      </form>
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
          &nbsp;&nbsp;55 9234 3497
        </div>
        <div className={styles.data}>
          <Image src="./whatsapp.svg" width={28} height={28} alt="whatsapp" />
          &nbsp;&nbsp;56 1837 4471
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

export default  ContactUs
