import { Technology } from '../../features/types/TypeTechnology';

export interface Project {
    title: string;
    technologies: Technology[]
    description: string;
    link: string
}
