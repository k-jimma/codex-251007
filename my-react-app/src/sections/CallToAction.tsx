import PrimaryButton from "../components/PrimaryButton";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section id="contact" className="cta">
      <div className="cta__content">
        <h2>未来のプロダクトを、今一緒に形にしませんか？</h2>
        <p>
          30分のオンライン相談で、課題の整理から可能性の探索までお手伝いします。お気軽にお問い合わせください。
        </p>
      </div>
      <PrimaryButton href="mailto:hello@nebula.studio">無料相談を予約する</PrimaryButton>
    </section>
  );
};

export default CallToAction;