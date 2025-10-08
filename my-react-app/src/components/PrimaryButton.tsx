import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren } from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps extends PropsWithChildren {
  href: string;
  invert?: boolean;
}

const PrimaryButton = ({ href, invert = false, children }: PrimaryButtonProps) => {
  return (
    <a className={`primary-button ${invert ? "primary-button--invert" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRightIcon aria-hidden className="primary-button__icon" />
    </a>
  );
};

export default PrimaryButton;