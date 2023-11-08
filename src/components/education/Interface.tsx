import Time from '../../features/interface/DateInterface';

export interface Education {
    title: string;
    time: Time;
    place: string;
    link?: string;
    description?: string;
}