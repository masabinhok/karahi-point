import { hamilton, toronto, sherway } from "../assets";

const projects = [
  {
    title: "Project Toronto",
    selectKey: "toronto",
    description: "Work in progress",
    image: toronto,
    totalCost: 100000,
    amountDue: 50000,
  },
  {
    title: "Project Hamilton",
    selectKey: "hamilton",
    description: "Work in progress",
    image: hamilton,
    totalCost: 100000,
    amountDue: 50000,
  },
  {
    title: "Sher Way Garden",
    selectKey: "sherway",
    description: "Work initiated",
    image: sherway,
    totalCost: 0,
    amountDue: 0,
  },
];

export default projects;
