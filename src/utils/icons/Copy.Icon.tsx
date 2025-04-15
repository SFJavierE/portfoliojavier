import { ReactElement } from "react"
import { IconProps } from "../interfaces/Interfaces"

const CopyIcon = ({className} : IconProps) : ReactElement => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M8 4v2h8V4M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>
        <rect x="8" y="2" width="8" height="4" rx="1"/>
        <path d="M8 10h8M8 14h6M8 18h4"/>
    </svg>
)

export default CopyIcon;