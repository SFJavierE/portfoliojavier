import { Technology } from '../../features/types/TypeTechnology';

type Status = 'done' | 'progress'

export interface Project {
    title: string;
    status: Status;
    technologies: Technology[]
    description: string;
    link: string
}
