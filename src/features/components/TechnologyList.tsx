import { Technology } from '../../features/types/TypeTechnology';

interface ListTechnology {
    list: Technology[]
}

export default function TechnologyList ({list} : ListTechnology) {
    return (
        <div className="d-flex mt-3">
            {
                list.map((t : Technology) => (<div className="bg-primary p-2 me-2">
                        {t}
                    </div>))
            }
        </div>
    )
}