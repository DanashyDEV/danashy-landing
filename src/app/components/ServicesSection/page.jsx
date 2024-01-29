import React from "react";
import styles from "./ServicesSection.module.css";
import Icon from "./Icon";
import Card from "./Card";
import { LIST_SERVICES, SPECIALTY } from "@/app/constants/page";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <p className={`${styles.title} ${styles.left}`}>NUESTROS SERVICIOS</p>
      <div className={styles.icons}>
        {LIST_SERVICES.map((service) => (
          <Icon
            src={service.src}
            alt={service.key}
            key={service.key}
            data={service.description}
          />
        ))}
      </div>
      <p className={`${styles.title} ${styles.rigth}`}>
        SERVICIOS ESPECIALIZADOS
      </p>
      <div className={styles.cards}>
        {SPECIALTY.map((card) => (
          <Card
            key={card.key}
            src={card.src}
            alt={card.key}
            description={card.description}
            title={card.title}
          />
        ))}
      </div>
      <p className={`${styles.title} ${styles.left}`}>NUESTROS CLIENTES</p>
    </section>
  );
}
