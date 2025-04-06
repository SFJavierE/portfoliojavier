export interface CardInfo{
    title: string,
    data: Card[]
}

export interface Card{
    place: string,
    dates?: BusinessDays,
    description: CardDescription[]
}

export interface BusinessDays{
    firstDate: Dates,
    secondDate: Dates | 'Current'
}

export interface CardDescription{
    position?: Position,
    text: string
    skills: Skills[],
    points?: string[]
}

export interface Position{
    name: string,
    time: BusinessDays
}

export interface Dates{
    month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    year: number
}

export type Skills = 'Redis' | 'ExpressJs' | 'NodeJS' | 'Tailwind' | 'Scrum' | 'API' | 'Express' | 'GitHub' | 'Unity' | 'UnrealEngine' | 'C++' | 'React' | 'Typescript' | 'AngularJS' | 'RubyOnRails' | 'Hasura' | 'GraphQL' | 'ReactNative' | 'Verse' | 'UEFN' | 'UnrealEngineForFortnite' | 'Git' | 'Jira' | 'NetCode' | 'C#' | 'Jest' | 'Js' | 'Figma'

export interface MediaButtonProps{
    socialMedia: 'GitHub' | 'LinkedIn' | 'Email' | 'CV' | 'Whatsapp' | 'CopyEmail';
}