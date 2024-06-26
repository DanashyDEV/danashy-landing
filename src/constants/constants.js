import air from "@/assets/air.svg"
import camera from "@/assets/camera.svg"
import cyborg from "@/assets/cyborg.svg"
import db from "@/assets/db.svg"
import elevator from "@/assets/elevator.svg"
import ensamble from "@/assets/ensamble.svg"
import factory from "@/assets/factory.svg"
import scalator from "@/assets/scalator.svg"
import screem from "@/assets/screen.svg"

import card1 from "@/assets/card1.svg"
import card2 from "@/assets/card2.svg"
import card3 from "@/assets/card3.svg"

import client1 from "@/assets/client1.svg"
import client2 from "@/assets/client2.svg"
import client3 from "@/assets/client3.svg"

export const NAV_LINKS = [
  {
    href: "/#home",
    key: "home",
    label: "INICIO",
  },
  {
    href: "/#about",
    key: "about-us",
    label: "NOSOTROS",
  },
  {
    href: "/#services",
    key: "services",
    label: "SERVICIOS",
  },
  {
    href: "/#contact",
    key: "contact",
    label: "CONTACTO",
  },
  {
    href: "/store",
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
        icon: "/whatsapp.svg"
    },
    {
        href: "https://www.facebook.com/danashysoficial/",
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
