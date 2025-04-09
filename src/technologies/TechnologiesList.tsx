import SVG, 
{
    AngularIcon,
    BootstrapIcon,
    JiraIcon,
    NETIcon,
    ReactIcon,
    RubyOnRailsIcon,
    TailwindIcon,
    TypescriptIcon,
    UnityIcon,
    UnrealEngineIcon
} from "../icons/Icons";
import { ReactElement } from 'react';

export const GetElementList = () : ReactElement[] => {
    const classNameIcons = "h-16 w-16 text-indigo-300/75 hover:text-indigo-900/75 transition-all duration-300";

    const technologies: ReactElement<{ className: string }>[] = [
        <UnityIcon key="Unity" className={classNameIcons} />,
        <UnrealEngineIcon key="UnrealEngine" className={classNameIcons} />,
        <TailwindIcon key="Tailwind" className={classNameIcons} />,
        <BootstrapIcon key="Bootstrap" className={classNameIcons} />,
        <ReactIcon key="React" className={classNameIcons} />,
        <TypescriptIcon key="Typescript" className={classNameIcons} />,
        <AngularIcon key="Angular" className={classNameIcons} />,
        <RubyOnRailsIcon key="RubyOnRails" className={classNameIcons} />,
        <NETIcon key=".Net" className={classNameIcons} />,
        <JiraIcon key="Jira" className={classNameIcons} />
    ];

    const CreateElements = () : ReactElement[] => {
        const elementsList : ReactElement[] = [];
        technologies.map((tech : ReactElement<{ className: string }>) => {
            elementsList.push(
                <SVG name={tech.key!} key={tech.key}>
                    {tech}
                </SVG>
            )
        })

        return elementsList;
    }

    return CreateElements();
}