import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
}

const GradientSvgIcon: React.FC<IconProps> = ({ Icon }) => (
  <>
    <svg width="0" height="0">
      <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#34d399" offset="0%" />
        <stop stopColor="#06b6d4" offset="100%" />
      </linearGradient>
    </svg>
    <Icon
      style={{
        width: "4rem",
        height: "4rem",
        fill: "url(#svg-gradient)",
      }}
    />
  </>
);

export default GradientSvgIcon;