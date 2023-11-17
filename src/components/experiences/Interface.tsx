import Time from '../../features/interface/DateInterface';

export interface Company {
    name: string;
    jobs: Job[];
    time: Time;
    description: string;
    link?: string;
}

export interface Job {
    name: string;
    description: string;
}

export interface Description {
    title: Job;
    index: number;
    isMobile?: boolean;
}