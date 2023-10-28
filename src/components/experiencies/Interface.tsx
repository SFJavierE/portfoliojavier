export interface Company {
    name: string;
    titles: Job[];
    wortTime: WorkingTime;
    description: string;
    link?: string;
}

export interface Job {
    name: string;
    description: string;
}

export interface WorkingTime {
    startDate: Date;
    endDate: Date;
}