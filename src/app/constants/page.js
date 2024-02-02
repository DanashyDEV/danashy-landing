import air from "@/app/assets/air.svg"
import camera from "@/app/assets/camera.svg"
import cyborg from "@/app/assets/cyborg.svg"
import db from "@/app/assets/db.svg"
import elevator from "@/app/assets/elevator.svg"
import ensamble from "@/app/assets/ensamble.svg"
import factory from "@/app/assets/factory.svg"
import scalator from "@/app/assets/scalator.svg"
import screem from "@/app/assets/screen.svg"

import card1 from "@/app/assets/card1.svg"
import card2 from "@/app/assets/card2.svg"
import card3 from "@/app/assets/card3.svg"

import client1 from "@/app/assets/client1.svg"
import client2 from "@/app/assets/client2.svg"
import client3 from "@/app/assets/client3.svg"

export const NAV_LINKS = [
  {
    href: "/",
    key: "home",
    label: "INICIO",
  },
  {
    href: "/",
    key: "about-us",
    label: "NOSOTROS",
  },
  {
    href: "/",
    key: "services",
    label: "SERVICIOS",
  },
  {
    href: "/",
    key: "contact",
    label: "CONTACTO",
  },
  {
    href: "/",
    key: "store",
    label: "TIENDA",
  },
];

export const SOCIAL_MEDIA = [
    {
        href: "mailto:contacto@danashy.mx?subject=Solicito%20m%C3%A1s%20informaci%C3%B3n",
        key: "email",
        icon: "/email.svg"
    },
    {
        href: "https://wa.me/5618374471/?text=Requiro%20más%20información%20de%20sus%20servicios...",
        key: "teléfono",
        icon: "/phone.svg"
    },
    {
        href: "https://www.facebook.com/danashyoficial/",
        key: "facebook",
        icon: "/facebook.svg"
    }
]

export const LIST_SERVICES = [
  {
    src: air,
    description: "Venta de refacciones y tableros de control",
    key: "venta-de-refacciones",
  },
  {
    src: camera,
    description: "Sistemas CCTV",
    key: "cctv",
  },
  {
    src: cyborg,
    description: "Reparaciones mayores",
    key: "reparaciones-mayores",
  },
  {
    src: db,
    description: "Reparación de tarjetas electrónicas",
    key: "tarjetas-electronicas",
  },
  {
    src: elevator,
    description: "Reparación y modernización de ascensores",
    key: "ascensores-elevadores",
  },
  {
    src: ensamble,
    description: "Automatización y control",
    key: "automatizacion-y-control",
  },
  {
    src: factory,
    description: "Mantenimiento preventivo y correctivo",
    key: "mantenimiento-preventivo",
  },
  {
    src: scalator,
    description: "Reparación y modernización de escaleras mecánicas",
    key: "escaleras mecanicas",
  },
  {
    src: screem,
    description: "Sistemas de monitoreo",
    key: "sistema-de-monitoreo",
  },
] 

export const SPECIALTY = [
  {
    src: card1,
    key: "transporte vertical",
    title: "TRANSPORTE VERTICAL",
    description: [
      { list: "Reparación de equipos"},
      { list: "Mantenimientos preventivos y correctivos"},
      { list: "Modernización de tableros de control"},
      { list: "Inspección de equipos"},
      { list: "Venta de refacciones"},
      { list: "Reparación de tarjetas de control"},
      { list: "Reparación de motores y reductores"},
      { list: "Estilización exterior de equipos"},
    ],  
  },
  {
    src: card2,
    key: "sistemas de monitoreo",
    title: "SISTEMAS DE MONITOREO",
    description: [
      { list: "Historial y reportes"},
      { list: "Alertas y notificaciones"},
      { list: "Integración con sistemas existentes"},
      { list: "Adquisición de datos"},
      { list: "Análisis Predictivo"},
      { list: "Software a la medida"},
      { list: "Seguridad cibernética"},
      { list: "Atención de averías"},,
    ],  
  },
  {
    src: card3,
    key: "automatizacion y control",
    title: "AUTOMATIZACIÓN Y CONTROL",
    description: [
      { list: "Modernización de tableros de control"},
      { list: "Programación de PLC's"},
      { list: "Mantenimiento eléctrico"},
      { list: "Desarrollo de sistemas de control"},
      { list: "Optimización y eficiencia energética"},
      { list: "Implementación de sistemas de seguridad"},
      { list: "Implementación de Internet de las Cosas"},
      { list: "Automatización de procesos"},
    ],  
  },
]

export const CLIENTS = [
  {
    src: client1,
    key: "antara polanco",
  },
  {
    src: client2,
    key: "plaza artz",
  },
  {
    src: client3,
    key: "esmica",
  },
]