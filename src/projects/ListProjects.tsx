import { CardInfo } from "../interfaces/Interfaces";

export const listProjects : CardInfo = {
    title: "Proyectos",
    data: [
        {
            place: 'TheMageTower',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: "Roguelike de plataformas donde juegas como un aprendiz de mago en una misión desesperada: rescatar a tu maestro secuestrado. Aprende hechizos caóticos, mejora tus poderes cada vez que mueras y adéntrate en mazmorras que cambian en cada partida. ¿Lograrás dominar la magia... o sucumbirás una y otra vez?",
                    }
                ]
        },
        {
            place: 'SlimeSlash',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: "Juego en 2D donde controlas a un soldado que debe enfrentarse a un Slime Gigante. Tu objetivo: esquivar sus ataques y evitar que absorba suficiente energía para convertirse en una amenaza aún mayor.",
                    }
                ]
        },
        {
            place: 'LolAram',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: "Una replica del League of Legends, de una forma más clásica en el mapa de una sola línea ARAM.",
                }
            ]
        },
        {
            place: 'ZombieWave',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: "Juego mobile 3D con vista superior donde sobrevives a oleadas de zombies nivel tras nivel. Usa armas, tácticas y power-ups para resistir, mientras Firebase guarda tus puntajes en tiempo real para competir con otros jugadores.",
                    }
                ]
        },
        {
            place: 'DogsPictures',
            description: [
                {
                    skills: ['React', 'Tailwind', 'NodeJS', 'ExpressJs', 'Redis'],
                    text: "Este proyecto utiliza la API de Unsplash para mostrar imágenes en una galería organizada en columnas de 3 imágenes por fila.",
                    points: [
                        "Carga dinámica: Cada petición a la API trae 6 imágenes nuevas, que se añaden al hacer clic en el botón 'Ver más'.",
                        "Guardado de imágenes: Puedes guardar tus favoritas haciendo clic en el botón 'Guardar' (ubicado en la esquina superior izquierda de cada imagen).",
                        "Galería personal: Todas las imágenes guardadas se almacenan y pueden verse en la pestaña 'Mis imágenes'.",
                        "Búsqueda integrada: Un motor de búsqueda te permite encontrar imágenes específicas según tus intereses."
                    ]
                    }
                ]
        }
        ]
}