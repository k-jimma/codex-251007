import { motion } from "framer-motion";
import PrimaryButton from "../components/PrimaryButton";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./Hero.css";

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeProps = (delay = 0, distance = 20): Record<string, unknown> =>
    prefersReducedMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 }
        }
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay }
        };

  return (
    <section className="hero">
      <div className="hero__background" aria-hidden>
        <div className="hero__gradient hero__gradient--one" />
        <div className="hero__gradient hero__gradient--two" />
        <div className="hero__grid" />
      </div>
      <header className="hero__content">
        <motion.span className="hero__eyebrow" {...fadeProps(0, 10)}>
          Nebula Studio
        </motion.span>
        <motion.h1 className="hero__title" {...fadeProps(0.15)}>
          想像を超えるデジタル体験をデザインする。
        </motion.h1>
        <motion.p className="hero__description" {...fadeProps(0.3)}>
          戦略からデザイン、開発、グロースまで。Nebula Studioは、未来のブランドとユーザーを結びつける
          Web体験をトータルでサポートします。
        </motion.p>
        <motion.div className="hero__cta" {...fadeProps(0.45)}>
          <PrimaryButton href="#contact">プロジェクトの相談をする</PrimaryButton>
          <PrimaryButton href="#work" invert>
            実績を見る
          </PrimaryButton>
        </motion.div>
        <motion.dl
          className="hero__stats"
          {...(prefersReducedMotion
            ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
            : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 } })}
        >
          <div>
            <dt>パートナー企業</dt>
            <dd>120+</dd>
          </div>
          <div>
            <dt>平均ROI</dt>
            <dd>380%</dd>
          </div>
          <div>
            <dt>グローバルアワード</dt>
            <dd>16</dd>
          </div>
        </motion.dl>
      </header>
    </section>
  );
};

export default Hero;