import SectionHeading from "../components/SectionHeading";
import "./Process.css";

const STEPS = [
  {
    title: "01. Insight",
    description:
      "データと定性的インタビューを組み合わせ、ユーザー行動とビジネス課題を立体的に捉えます。"
  },
  {
    title: "02. Concept",
    description:
      "ブランドトーンとカスタマージャーニーを踏まえたコンセプトを設計し、素早く検証します。"
  },
  {
    title: "03. Craft",
    description:
      "モーション・コピー・インタラクションまで精密にデザインし、開発と連携して具現化します。"
  },
  {
    title: "04. Launch",
    description:
      "継続的な改善と運用体制づくりを支援し、リリース後の成長を共に描きます。"
  }
];

const Process = () => {
  return (
    <section id="approach" className="process">
      <SectionHeading eyebrow="Approach">成果につながる共創型プロセス</SectionHeading>
      <ol className="process__list">
        {STEPS.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;