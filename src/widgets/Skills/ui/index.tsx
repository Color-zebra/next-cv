"use client";

import { WidthContainer } from "@/shared/ui/WidthContainer";
import s from "./Skills.module.scss";
import clsx from "clsx";

import { motion } from "framer-motion";
import { GearsAnimation } from "./components/GearsAnimation";

const skills = [
  {
    title: "React",
    items: [
      "Redux",
      "React-query (Tanstack)",
      "Zustand",
      "Material-UI",
      "Ant-design",
      "Framer-motion",
    ],
  },
  {
    title: "Next.JS",
    items: ["App / Pages router"],
  },
  {
    title: "Тестирование",
    items: ["Jest", "React-testing-library", "Mock Service Worker"],
  },
  {
    title: "Общее",
    items: [
      "Typescript",
      "JS(ES6-ES12)",
      "HTML",
      "CSS/SCSS/SASS",
      "Сборщики Vite/Webpack",
    ],
  },
];
const framerVariantLTR = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const framerVariantRTL = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const Skills = () => (
  <WidthContainer id="skill" className={s.wrapper}>
    <div className={s["decorated-title"]}>
      <h3 className={s["decorated-title__title"]}>Технологии</h3>
      <div
        className={clsx(
          s["decorated-title__title"],
          s["decorated-title__title_outline"],
        )}
      >
        Технологии
      </div>
      <GearsAnimation className={s["decorated-title__gears"]} />
    </div>
    <div className={s.technologies}>
      {skills.map(({ items, title }, index) => (
        <motion.div
          variants={index % 2 === 1 ? framerVariantRTL : framerVariantLTR}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className={s.technologies__item}
          key={title}
        >
          <h3 className={s.technologies__title}>
            &lt;<span>{title}</span>/&gt;
          </h3>
          <ul className={s.technologies__list}>
            {items.map((item) => (
              <li className={s["technologies__list-item"]} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
      <GearsAnimation className={s.technologies__gears} />
    </div>
  </WidthContainer>
);
