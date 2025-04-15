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
    UnrealEngine
} from "../icons/Icons";
import { ChildrenSVG } from '../interfaces/Interfaces';

const technologiesList = () : ChildrenSVG[] => {
    const classNameIcons = "h-12 w-12  md:h-16 md:w-16 text-indigo-300/75 hover:text-indigo-900/75 transition-all duration-300";

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
        <Jira key="Jira" className={classNameIcons} />
    ];
}

export default technologiesList;