import AnimatedCode from "@/features/AnimatedCode";
import s from "./Banner.module.scss";
import { WidthContainer } from "@/shared/ui/WidthContainer";

export const Banner = () => (
  <div className={s.wrapper}>
    <WidthContainer className={s.content}>
      <h1 className={s.title}>
        <span>Привет! Я Дмитрий</span>
        <span>
          <span className={s.title__accent}>&lt;frontend/&gt;</span> разработчик
        </span>
      </h1>
      <div className={s["code-wrapper"]}>
        <div className={s.code}>
          <AnimatedCode />
        </div>
      </div>
    </WidthContainer>
  </div>
);
