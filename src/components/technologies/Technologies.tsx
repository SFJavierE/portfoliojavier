import { Technology } from '../../features/types/TypeTechnology';

export default function Technologies () {
    const tFrontend : Technology[] = ['Javascript', 'React', 'Typescript', 'Angular', 'AngularJS', 'HTML', 'Css', 'Sass', 'TailwindCss', 'Bootstrap', 'ReactNative'];
    const tBackend: Technology[] = ['NodeJs', 'Express', 'Ruby on Rails', '.NET', 'C#', 'Postman'];
    const tDataBase: Technology[] = ['SQL', 'GraphQL', 'Hasura', 'Postgress', 'Firebase', 'AWS'];
    const tOthers: Technology[] = ['Confluence', 'Figma', 'Jira', 'Trello', 'Unity'];

    const technologiesList = (list: string[]) => (
        <div className="d-flex mt-3">
            {
                list.map((t) => technology(t))
            }
        </div>
    )

    const technology = (t: string) => (
        <div className="bg-primary p-2 mx-2">
            {t}
        </div>
    )  

    return(
        <div className="mb-4">
            <span className="fs-4">
                Technologies
            </span>
            { technologiesList(tFrontend) }
            { technologiesList(tBackend) }
            { technologiesList(tDataBase) }
            { technologiesList(tOthers) }
        </div>
    )
}