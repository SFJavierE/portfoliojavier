export interface Company {
    name: string;
    titles: Job[];
    workingTime: WorkingTime;
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

export interface ListTitles {
    title: Job,
    index: number
}

export interface WorkingTimeDate {
    date: Date;
}