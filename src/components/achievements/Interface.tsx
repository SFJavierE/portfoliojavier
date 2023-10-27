export interface AchievementDescription {
    title: string;
    description?: string;
}

export interface Achievement {
    placeExperiencieTitle: string;
    listAchievement: AchievementDescription[];
}