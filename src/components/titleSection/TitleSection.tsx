import { Title } from '../../utils/interfaces/Interfaces'

export default function TitleSection({name} : Title){
    return(
        <div className="from-indigo-800 to-indigo-200/75 w-full py-3 pl-4 text-start text-3xl rounded-md bg-gradient-to-r text-gray-200 font-bold">
            {name}
        </div>
    )
}