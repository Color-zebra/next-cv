import { Banner } from "@/widgets/Banner/ui";
import s from "./page.module.scss";
import Contacts from "@/widgets/Contacts";
import About from "@/widgets/About";
import Skills from "@/widgets/Skills";

const Home = () => (
  <div className={s.wrapper}>
    <Banner />
    <Skills />
    <About />
    <Contacts />
  </div>
);

export default Home;
