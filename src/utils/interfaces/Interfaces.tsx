import { ReactElement } from "react";

// --- General Types ---

/**
 * Defines months as a numeric type for better clarity.
 */
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Defines the basic structure of a date.
 */
export interface DateInfo {
    month: Month;
    year: number;
}

/**
 * Represents a start and end date range, or "Current" to indicate ongoing.
 */
export type DateRange = {
    firstDate: DateInfo;
    secondDate: DateInfo | 'Current';
};

/**
 * Properties for displaying a date, including whether it's the current date.
 */
export interface DatesDisplay {
    date: DateInfo;
    isCurrent?: boolean;
}

/**
 * Defines the different types of skills.
 */
export type SkillType =
    | 'ReactNative'
    | 'CSS'
    | 'Redis'
    | 'ExpressJs'
    | 'NodeJS'
    | 'Tailwind'
    | 'Scrum'
    | 'API'
    | 'Express'
    | 'GitHub'
    | 'Unity'
    | 'UnrealEngine'
    | 'C++'
    | 'React'
    | 'Typescript'
    | 'AngularJS'
    | 'RubyOnRails'
    | 'Hasura'
    | 'GraphQL'
    | 'Verse'
    | 'UEFN'
    | 'UnrealEngineForFortnite'
    | 'Git'
    | 'Jira'
    | 'NetCode'
    | 'C#'
    | 'Jest'
    | 'Js'
    | 'Figma';

/**
 * Defines the available action types for buttons.
 */
export type ActionType = 'GitHub' | 'LinkedIn' | 'Email' | 'CV' | 'Whatsapp' | 'CopyEmail';

// --- Card Content Interfaces ---

/**
 * Defines the structure of a position within a description.
 */
export interface Position {
    name: string;
    time: DateRange;
}

/**
 * Describes a specific point within a card (e.g., experience, project).
 */
export interface CardDescription {
    position?: Position;
    text: string;
    skills: SkillType[];
    points?: string[]; // Detailed points for the description
}

/**
 * Defines the structure of an individual card.
 */
export interface Card {
    place: string;
    dates?: DateRange;
    type?: 'Game' | 'Develop'; // Type of card (e.g., game, development)
    description: CardDescription[];
}

/**
 * Container for an array of cards.
 */
export interface CardInfo {
    data: Card[];
}

// --- UI Component Interfaces ---

/**
 * Properties for SVG icons.
 */
export interface IconProps {
    className: string;
}

/**
 * Type for a React SVG element.
 */
export type ChildrenSVG = ReactElement<{ className?: string }>;

/**
 * Defines the structure for a collection of SVGs.
 */
export interface SVGs {
    name: string;
    children: ChildrenSVG;
}

/**
 * Properties to control the borders of an element.
 */
export interface BordersEnables {
    topLeft: boolean;
    topRight: boolean;
    bottomLeft: boolean;
    bottomRight: boolean;
    borderSize: number;
    divSize: string;
}

/**
 * Properties for a section transition button.
 */
export interface ButtonTransitionProps {
    setChangeSection: React.Dispatch<React.SetStateAction<boolean>>;
    changeSection: boolean;
}

/**
 * References to different sections of the page.
 */
export interface Refs {
    homeRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
    jobsRef: React.RefObject<HTMLDivElement | null>;
    educationsRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    aboutMeRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Properties to pass a container class to a component.
 */
export interface ClassContainer {
    classContainer: string;
}

/**
 * Properties for a simple title component.
 */
export interface Title {
    name: string;
}

/**
 * Properties for action buttons (e.g., social media buttons).
 */
export interface ButtonActions {
    action: ActionType;
}

export interface Languages {
    value: Language
}

export type Language = 'ES' | 'EN'