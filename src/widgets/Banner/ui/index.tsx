import AnimatedCode from "@/features/AnimatedCode";
import s from "./Banner.module.scss";
import { WidthContainer } from "@/shared/ui/WidthContainer";

export const Banner = () => (
  <WidthContainer className={s.wrapper}>
    <h1 className={s.title}>
      <span>Привет! Я Дмитрий</span>
      <span>
        &lt;<span className={s.title__accent}>frontend</span>/&gt; разработчик
      </span>
    </h1>
    <div className={s["code-wrapper"]}>
      <div className={s.code}>
        <AnimatedCode />
      </div>
    </div>
  </WidthContainer>
);
