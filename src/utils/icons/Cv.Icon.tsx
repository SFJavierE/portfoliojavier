import { ReactElement } from "react"
import { IconProps } from "../interfaces/Interfaces"

const CvIcon = ({className} : IconProps) : ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={className}
    >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <text x="8" y="15" fontFamily="Arial" fontSize="12" fill="currentColor">CV</text>
    </svg>
)

export default CvIcon;