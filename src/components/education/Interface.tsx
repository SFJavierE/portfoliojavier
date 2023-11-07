export interface Education {
    title: string;
    time: Time;
    place: string;
    link?: string;
    description?: string;
}

export interface Time {
    start: Date,
    end: Date
}

export interface TimeDate {
    date: Date;
}