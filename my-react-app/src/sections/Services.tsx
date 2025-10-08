import { LightBulbIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";
import SectionHeading from "../components/SectionHeading";
import "./Services.css";

const SERVICES = [
  {
    icon: LightBulbIcon,
    title: "Brand Discovery",
    description: "ブランドの核となる価値を発掘し、言語化するリサーチとワークショップ。",
    tags: ["UXリサーチ", "ワークショップ", "ストーリーテリング"]
  },
  {
    icon: SparklesIcon,
    title: "Experience Design",
    description: "全てのタッチポイントを横断するインタラクションデザインとコンテンツ設計。",
    tags: ["デザインシステム", "プロトタイピング", "アクセシビリティ"]
  },
  {
    icon: RocketLaunchIcon,
    title: "Digital Launch",
    description: "最新のフロントエンド技術で、高速かつスケーラブルな体験を実装。",
    tags: ["React", "TypeScript", "Headless CMS"]
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <SectionHeading eyebrow="Capabilities" align="center">
        ビジョンを現実にするフルスタックなクリエイティブ支援
      </SectionHeading>
      <div className="services__grid">
        {SERVICES.map((service) => (
          <article key={service.title} className="services__card">
            <service.icon aria-hidden className="services__icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;