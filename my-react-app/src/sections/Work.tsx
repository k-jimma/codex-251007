import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./Work.css";

type Metric = {
  label: string;
  value: string;
};

type CaseStudy = {
  title: string;
  description: string;
  metrics: Metric[];
  tags: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Aurora Finance",
    description:
      "フルリニューアルにより、投資初心者でも安心して資産管理ができるマルチデバイス体験を実現。",
    metrics: [
      { label: "Conversion", value: "+64%" },
      { label: "Release", value: "4 months" }
    ],
    tags: ["Design System", "Next.js", "Contentful"]
  },
  {
    title: "Atlas Mobility",
    description:
      "都市交通の複雑な検索体験を再構築し、リアルタイムデータを活用したスマートな移動提案を提供。",
    metrics: [
      { label: "NPS", value: "74" },
      { label: "Cities", value: "32" }
    ],
    tags: ["Service Blueprint", "React Native", "Data Viz"]
  },
  {
    title: "Sora Living",
    description:
      "IoT家電の操作アプリを再設計し、音声・ジェスチャー操作を組み合わせた直感的なスマートホーム体験を創出。",
    metrics: [
      { label: "Support calls", value: "-38%" },
      { label: "Active users", value: "+120K" }
    ],
    tags: ["Product Strategy", "Accessibility", "TypeScript"]
  }
];

const Work = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="work" className="work">
      <SectionHeading eyebrow="Work" align="center">
        成果に直結するプロダクトパートナーシップ
      </SectionHeading>
      <div className="work__grid">
        {CASE_STUDIES.map((caseStudy, index) => (
          <motion.article
            key={caseStudy.title}
            className="work__card"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, delay: prefersReducedMotion ? 0 : index * 0.1 }}
          >
            <header className="work__card-header">
              <h3>{caseStudy.title}</h3>
              <ul className="work__tags">
                {caseStudy.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </header>
            <p className="work__description">{caseStudy.description}</p>
            <dl className="work__metrics">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Work;