export interface AchievementDescription {
    title: string;
    description?: string;
}

export interface Achievement {
    place: string;
    achievements: AchievementDescription[];
}

export interface AchievementDescriptionComp {
    achievement: AchievementDescription;
    index: number;
    isMobile?: boolean;
}