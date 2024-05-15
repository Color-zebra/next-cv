import { HTMLAttributes } from "react";
import s from "./GearsAnimation.module.scss";
import clsx from "clsx";
import { GearIcon } from "./GearIcon";

export const GearsAnimation = ({
  className,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, "children">) => (
  <div className={clsx(s.gears, className)} {...props}>
    <GearIcon className={clsx(s.gears__gear, s.gears__gear_1)} />
    <GearIcon className={clsx(s.gears__gear, s.gears__gear_2)} />
    <GearIcon className={clsx(s.gears__gear, s.gears__gear_3)} />
  </div>
);
