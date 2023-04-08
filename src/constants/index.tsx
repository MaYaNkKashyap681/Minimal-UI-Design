import {
  Catalog,
  Circooles,
  Sisyphus,
  Layer,
  Quotient,
  Message,
  Zap,
  Logo,
} from "../assets";

interface Company {
  image: any;
}

const coimages: Company[] = [
  {
    image: Layer,
  },
  {
    image: Sisyphus,
  },
  {
    image: Circooles,
  },
  {
    image: Catalog,
  },
  {
    image: Quotient,
  },
];

interface AboutItem {
  img: any;
  alt: String;
  title: String;
  para: String;
}

const itemsList: AboutItem[] = [
  {
    img: Message,
    alt: "message",
    title: "Share team inboxes",
    para: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    img: Zap,
    alt: "zap",
    title: "Deliver instant answers",
    para: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
];

interface navLinks {
  name: String;
}

const navlinks: navLinks[] = [
  {
    name: "Overview",
  },
  {
    name: "Feature",
  },
  {
    name: "Pricing",
  },
  {
    name: "Carrers",
  },
  {
    name: "Help",
  },
  {
    name: "Privacy",
  },
];

export { coimages, itemsList, navlinks };
