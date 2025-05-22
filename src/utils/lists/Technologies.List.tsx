import 
{
    Angular,
    Bootstrap,
    Jira,
    Net,
    React,
    RubyOnRails,
    Tailwind,
    TypeScript,
    Unity,
    UnrealEngine,
    NodeJS
} from "../icons/Icons";
import { ChildrenSVG } from '../interfaces/Interfaces';

const technologiesList = () : ChildrenSVG[] => {
    const classNameIcons = " text-indigo-300/75";

    return [
        <Unity key="Unity" className={classNameIcons} />,
        <UnrealEngine key="UnrealEngine" className={classNameIcons} />,
        <Tailwind key="Tailwind" className={classNameIcons} />,
        <Bootstrap key="Bootstrap" className={classNameIcons} />,
        <React key="React" className={classNameIcons} />,
        <TypeScript key="Typescript" className={classNameIcons} />,
        <Angular key="Angular" className={classNameIcons} />,
        <RubyOnRails key="RubyOnRails" className={classNameIcons} />,
        <Net key=".Net" className={classNameIcons} />,
        <NodeJS key="NodeJs" className={classNameIcons} />,
        <Jira key="Jira" className={classNameIcons} />
    ];
}

export default technologiesList;