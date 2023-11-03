export interface AchievementDescription {
    title: string;
    description?: string;
}

export interface Achievement {
    placeExperiencieTitle: string;
    listAchievement: AchievementDescription[];
}

export interface AchievementDescriptionList {
    achievement: AchievementDescription;
    index: number;
}