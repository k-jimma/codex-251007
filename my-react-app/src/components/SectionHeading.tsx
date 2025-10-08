import { PropsWithChildren } from "react";
import "./SectionHeading.css";

interface SectionHeadingProps extends PropsWithChildren {
  eyebrow: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, align = "left", children }: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{children}</h2>
    </div>
  );
};

export default SectionHeading;