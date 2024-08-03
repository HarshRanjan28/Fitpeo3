import { BsBagPlus } from "react-icons/bs";
import { BsBagX } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";

export const resInfoStats = [
  {
    logo: BsBagPlus,
    Description: "Total Orders",
    Quantity: 75,
    bgColor: "#6666ff",
    increment: true,
  },

  {
    logo: BsBagCheck,
    Description: "Total Delivered",
    Quantity: 70,
    bgColor: "#66ff66",
    increment: false,
  },

  {
    logo: BsBagX,
    Description: "Total Cancelled",
    Quantity: 5,
    bgColor: "#FF3333",
    increment: true,
  },

  {
    logo: BsCurrencyDollar,
    Description: "Total Revenue",
    Quantity: "$12k",
    bgColor: "#ff66b2",
    increment: false,
  },
];

export const orderCategory = [
  {
    logo: GoGoal,
    title: "Goal",
    bgColor: "#E97451",
  },

  {
    logo: LiaHamburgerSolid,
    title: "Popular Dishes",
    bgColor: "#4B77BE",
  },

  {
    logo: BiDish,
    title: "Menus",
    bgColor: "#16A085",
  },
];
