import { HTMLAttributes } from "react";
import s from "./WidthContainer.module.scss";
import clsx from "clsx";

export const WidthContainer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <section className={clsx(s.wrapper, className)} {...props}>
    {children}
  </section>
);
