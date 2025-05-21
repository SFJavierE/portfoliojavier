import { BordersEnables } from "../../utils/interfaces/Interfaces";

export default function BorderFrame({ topLeft, topRight, bottomLeft, bottomRight, borderSize, divSize } : BordersEnables) {
    const borderR : string = `border-r-${borderSize}`;
    const borderL : string = `border-l-${borderSize}`;
    const borderT : string = `border-t-${borderSize}`;
    const borderB : string = `border-b-${borderSize}`;
    const sizeDiv : string = `w-${divSize} h-${divSize}`;

    return(
        <div>
            {topLeft ? <div className={`absolute border-gray-200 ${borderL} border-t-4 ${sizeDiv} top-0 left-0`}/> : ""}
            {topRight ? <div className={`absolute border-gray-200 border-r-4 ${borderT} ${sizeDiv} top-0 right-0`}/> : ""}
            {bottomLeft ? <div className={`absolute border-gray-200 border-l-4 ${borderB} ${sizeDiv} bottom-0 left-0`}/> : ""}
            {bottomRight ? <div className={`absolute border-gray-200 ${borderR} border-b-4 ${sizeDiv} bottom-0 right-0`}/> : ""}
        </div>
    )
}