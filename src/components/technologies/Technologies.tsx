import { Technology } from '../../features/types/TypeTechnology';
import TechnologyList from '../../features/components/TechnologyList';
import TitleCollapseComponent from '../../features/components/TitleCollapseComponent';
import { useState } from 'react';

export default function Technologies () {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false);

    const tFrontend : Technology[] = ['Javascript', 'React', 'Typescript', 'Angular', 'AngularJS', 'HTML', 'Css', 'Sass', 'TailwindCss', 'Bootstrap', 'ReactNative'];
    const tBackend: Technology[] = ['NodeJs', 'Express', 'Ruby on Rails', '.NET', 'C#', 'Postman'];
    const tDataBase: Technology[] = ['SQL', 'GraphQL', 'Hasura', 'Postgress', 'Firebase', 'AWS'];
    const tOthers: Technology[] = ['Confluence', 'Figma', 'Jira', 'Trello', 'Unity'];

    return(
        <div className="mb-4">
            <TitleCollapseComponent
                title={'Tecnologías'}
                openCollapse={openCollapse}
                setOpen={setOpenCollapse}
                idCollapse='technologies-collapse'
                >
                <TechnologyList list={tFrontend} />
                <TechnologyList list={tBackend} />
                <TechnologyList list={tDataBase} />
                <TechnologyList list={tOthers} />
            </TitleCollapseComponent>
        </div>
    )
}