import { ReactElement } from "react"
import { IconProps } from "../interfaces/Interfaces"

const LinkedInIcon = ({className} : IconProps): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 40"
        className={className}
    >
        <text
            x="50"
            y="55"
            fontFamily="Arial, sans-serif"
            fontSize="100"
            fontWeight="bold"
            fill="currentColor"
            textAnchor="middle"
        >
            in
        </text>
    </svg>
)

export default LinkedInIcon;