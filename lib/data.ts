import fl1 from "@/public/fl1.png";
import fl2 from "@/public/fl2.png";
import fl3 from "@/public/fl3.png";
import fl4 from "@/public/fl4.png";
import fl5 from "@/public/fl5.png";

import car1 from "@/public/car1.jpg";
import car10 from "@/public/car10.jpg";
import car11 from "@/public/car11.jpg";
import car12 from "@/public/car12.jpg";
import car13 from "@/public/car13.jpg";
import car14 from "@/public/car14.jpg";
import car15 from "@/public/car15.jpg";
import car2 from "@/public/car2.jpg";
import car3 from "@/public/car3.jpg";
import car4 from "@/public/car4.jpg";
import car5 from "@/public/car5.jpg";
import car6 from "@/public/car6.jpg";
import car7 from "@/public/car7.jpg";
import car8 from "@/public/car8.jpg";
import car9 from "@/public/car9.jpg";

export const links = [
  {
    name: "Le studio",
    hash: '#home"',
    route: "/",
  },
  {
    name: "Les ateliers",
    hash: '#workshop"',
    route: "Ateliers",
  },
  {
    name: "Mes créations",
    hash: '#projects"',
    route: "projet",
  },
  {
    name: "Contact",
    hash: '#contact"',
    route: "contact",
  },
] as const;

export const activities = [
  {
    name: "identité visuelle",
    labels: "Charte graphique, Logo, Pictogrammes...",
    picture: fl1,
  },
  {
    name: "illustration",
    labels: "Pédagogique, Déco, Textiles, Edition, Mode, Vectorielle",
    picture: fl2,
  },
  {
    name: "mise en page print",
    labels: "Livret, Flyer, Carte de visite, Livre jeunesse, BD",
    picture: fl3,
  },
  {
    name: "peinture murale, fresque",
    labels: "Habillage de locaux d'entreprises ou de maison",
    picture: fl4,
  },
  {
    name: "communication et marketing",
    labels: "Stratégie de lancement, Community management",
    picture: fl5,
  },
] as const;

export const carousel = [
  {
    picture: car1,
  },
  {
    picture: car2,
  },
  {
    picture: car3,
  },
  {
    picture: car4,
  },
  {
    picture: car5,
  },
  {
    picture: car6,
  },
  {
    picture: car7,
  },
  {
    picture: car8,
  },
  {
    picture: car9,
  },
  {
    picture: car10,
  },
  {
    picture: car11,
  },
  {
    picture: car12,
  },
  {
    picture: car13,
  },
  {
    picture: car14,
  },
  {
    picture: car15,
  },
] as const;
