export interface AchievementDescription {
    title: string;
    description?: string;
}

export interface Achievement {
    placeExperiencieTitle: string;
    achievement: AchievementDescription[];
}