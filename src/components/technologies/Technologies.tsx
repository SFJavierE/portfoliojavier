export default function Technologies () {
    const tFrontend : string[] = ['Javascript', 'React', 'Typescript', 'Angular', 'AngularJS', 'HTML', 'CSS', 'Sass', 'TailwindCss', 'Bootstrap'];
    const tBackend: string[] = ['NodeJs', 'Express', 'Ruby on Rails', '.NET', 'C#', 'Postman'];
    const tDataBase: string[] = ['SQL', 'GraphQL', 'Hasura', 'Postgress', 'Firebase'];
    const tOthers: string[] = ['Confluence', 'Figma', 'Jira', 'Trello', 'Unity'];

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