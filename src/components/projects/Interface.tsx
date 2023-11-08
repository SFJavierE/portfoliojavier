import { Technology } from '../../features/types/TechnologyType';

type Status = 'done' | 'in progress' | 'finalizado' | 'en progreso'

export interface Project {
    title: string;
    status: Status;
    technologies: Technology[]
    description: string;
    link: string
}

export interface StatusComp {
    status: Status;
}
