import { Technology } from '../../features/types/TypeTechnology';

interface ListTechnology {
    list: Technology[]
}

export default function TechnologyList ({list} : ListTechnology) {
    return (
        <div className="d-flex my-2">
            {
                list.map((t : Technology) => (
                    <div className="bg-primary px-2 py-1 me-2 rounded-1" key={t}>
                        {t}
                    </div>
                ))
            }
        </div>
    )
}