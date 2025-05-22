import { Technologies } from '../../utils/lists/Lists';
import { ChildrenSVG} from "../../utils/interfaces/Interfaces";

export default function Skills(){
    return(
        <div className='grid grid-cols-5 w-full gap-12'>
            {
                Technologies.map((tech : ChildrenSVG)=>
                    <div key={tech.key} className='flex flex-col items-middle place-self-center text-center text-gray-200 font-bold h-24 w-24 '>
                        {tech}
                        <p className='mt-2'>{tech.key}</p>
                    </div>
                )
            }
        </div>
    )
}