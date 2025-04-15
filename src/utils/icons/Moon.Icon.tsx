import { ReactElement } from "react";
import { IconProps } from "../interfaces/Interfaces";

const MoonIcon = ({ className }: IconProps) : ReactElement => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M21 12.8A9 9 0 1 1 12.2 3a7 7 0 0 0 8.8 9.8z"/>
        <circle cx="5" cy="5" r="1" fill="currentColor"/>
        <circle cx="19" cy="3" r="0.8" fill="currentColor"/>
        <circle cx="12" cy="19" r="0.8" fill="currentColor"/>
    </svg>
)

export default MoonIcon;