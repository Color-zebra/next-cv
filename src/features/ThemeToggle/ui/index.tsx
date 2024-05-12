import s from "./ThemeToggler.module.scss";
import clsx from "clsx";
import Image from "next/image";

import cloudsImg from "../images/Clouds.svg";
import starsImg from "../images/Stars.svg";
import groundImg from "../images/Ground.svg";
import { useTheme } from "@/shared/hooks/useTheme";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={clsx(
        s["theme-switcher"],
        theme === "dark" ? s["theme-switcher_dark"] : s["theme-switcher_light"],
      )}
    >
      <div className={s["theme-switcher__dark-bg"]}></div>
      <div className={s["theme-switcher__light-bg"]}></div>
      <div className={s["theme-switcher__clouds"]}>
        <Image priority src={cloudsImg} alt="Облака" fill />
      </div>
      <div className={s["theme-switcher__stars"]}>
        <Image priority src={starsImg} alt="Звезды" fill />
      </div>
      <div className={s["theme-switcher__ground"]}>
        <Image priority src={groundImg} alt="Поверхность земли" fill />
      </div>
      <button
        className={s["theme-switcher__button"]}
        onClick={() => toggleTheme()}
      >
        <span className={s["theme-switcher__button-text"]}>Switch theme</span>
      </button>
    </div>
  );
};
