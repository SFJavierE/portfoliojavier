import { Project } from './Interface';

export default function Projects () {

    const projects : Project[] = [
        {
            title: 'porfolio',
            technologies: ['React', 'Ts', 'TailwindCss'],
            description: '',
            link: ''
        },
        {
            title: 'mangaecommerceapi',
            technologies: ['NodeJs', 'Express'],
            description: '',
            link: ''
        },
        {
            title: 'SlimeSlash',
            technologies: ['C#', 'Unity', '.NET'],
            description: '',
            link: ''
        },
        {
            title: 'mangaecommerce',
            technologies: ['Ts', 'React', 'TailwindCss'],
            description: '',
            link: ''
        },
        {
            title: 'dogs',
            technologies: ['NodeJs', 'Express', 'React', 'TailwindCss'],
            description: '',
            link: ''
        },
        {
            title: 'BankAppMe',
            technologies: ['ReactNative', 'NodeJs', 'Express', 'AWS', 'Postman', 'Css'],
            description: '',
            link: ''
        },
        {
            title: 'BackToThe90s-E-commerce',
            technologies: ['React', 'Postgress', 'Express', 'NodeJs', 'Trello', 'Postman', 'Css'],
            description: '',
            link: ''
        },
        {
            title: 'MiniGame1_Tale_Game',
            technologies: ['.NET', 'C#', 'Unity'],
            description: '',
            link: ''
        },
        {
            title: 'zombieWave',
            technologies: ['.NET', 'C#', 'Unity', 'Firebase'],
            description: '',
            link: ''
        },
        {
            title: 'PacmanGame',
            technologies: ['C#', 'Unity', '.NET'],
            description: '',
            link: ''
        }
    ] 

    return (
        <div>
            <span className="fs-4">
                Projects
            </span>
        </div>
    )
}