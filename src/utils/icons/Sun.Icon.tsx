import { ReactElement } from "react";
import { IconProps } from "../interfaces/Interfaces";

const SunIcon = ({ className } : IconProps) : ReactElement => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
)

export default SunIcon;