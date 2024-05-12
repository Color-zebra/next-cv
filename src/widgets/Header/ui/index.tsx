"use client";

import Link from "next/link";
import s from "./Header.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { menuList } from "../model";
import ThemeToggler from "@/features/ThemeToggle";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  return (
    <header className={s.wrapper}>
      <nav className={s.content}>
        <Link href={"/"} className={s.logo}>
          &lt;<span className={s.logo__inner}>Logo</span>/&gt;
        </Link>
        <ul className={clsx(s.menu, isBurgerOpen && s.menu_open)}>
          {menuList.map(({ name, url }) => (
            <li className={s.menu__item} key={name}>
              <Link className={s.menu__link} href={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggler />
        <button
          className={clsx(s.burger, isBurgerOpen && s.burger_open)}
          onClick={() => setIsBurgerOpen((prev) => !prev)}
        >
          <div className={s.burger__line} />
          <div className={s.burger__line} />
          <div className={s.burger__line} />
          <span>Бургер-меню</span>
        </button>
      </nav>
    </header>
  );
};
