import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Nebula Studioは、ユーザー体験と事業価値を両立させるパートナーです。複雑な要件を分解し、チーム全体で納得できるアウトプットに導いてくれました。",
    name: "花井 美月",
    role: "プロダクトマネージャー / Altair Labs"
  },
  {
    quote:
      "ビジュアルとインタラクションの細部までこだわる姿勢に感銘を受けました。ブランドの世界観をここまで深く理解して再構築してくれたのは初めてです。",
    name: "鈴木 亮",
    role: "ブランドディレクター / Horizon Spirits"
  }
];

const Testimonials = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="testimonials">
      <SectionHeading eyebrow="Voices" align="center">
        共に未来を描いたパートナーの声
      </SectionHeading>
      <div className="testimonials__wrapper">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            className="testimonials__card"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: prefersReducedMotion ? 0 : index * 0.2, duration: prefersReducedMotion ? 0.01 : 0.6 }}
          >
            <p>“{testimonial.quote}”</p>
            <footer>
              <span>{testimonial.name}</span>
              <span>{testimonial.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;