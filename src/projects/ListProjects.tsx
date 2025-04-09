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
        },
        {
            place: 'BankAppMe',
            description: [
                {
                    skills: ['ReactNative', 'CSS', 'NodeJS', 'ExpressJs'],
                    text: "Desarrollé una aplicación móvil de billetera virtual utilizando React Native en equipo. Aunque ningún integrante tenía experiencia previa con la tecnología, asumí el liderazgo del frontend, coordinando al grupo mediante videollamadas para resolver desafíos técnicos y guiar la implementación. El resultado fue una app funcional que permitía cargar saldo virtual y realizar transferencias entre usuarios, demostrando nuestra capacidad para aprender rápidamente y colaborar de manera efectiva."
                    }
                ]
        },
        {
            place: 'BackTo90sEcommerce',
            description: [
                {
                    skills: ['React', 'CSS', 'NodeJS', 'ExpressJs'],
                    text: "Ecommerce desarrollado como proyecto en Henry junto a tres compañeros. Su objetivo era exhibir productos icónicos de los años 90, mostrando sus precios originales de la época y evocando nostalgia. Realizamos una campaña de marketing creativa, lo que generó una buena recepción entre los alumnos durante la presentación en vivo ante el instructor."
                    }
                ]
        }
        ]
}