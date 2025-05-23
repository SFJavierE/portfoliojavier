import { Educations } from '../../utils/lists/Lists'
import Card from '../../components/card/Card'
import TitleSection from '../../components/titleSection/TitleSection'
import Translate from '../../utils/translates/educations/translate.json'

export default function Education(){
    return(
        <div className="w-full">
            <TitleSection name={"Educación"} />
            <div className='text-gray-200 mt-4 mb-1'>
                <p className='font-bold text-xl underline text-indigo-200'>
                    {Translate.ES.SELFTAUGHT.TITLE}
                </p>
                <p className='text-md mt-2 pl-6'>
                    {Translate.ES.SELFTAUGHT.FIRST}
                </p>
                <br />
                <p className='text-md pl-6'>
                    {Translate.ES.SELFTAUGHT.SECOND}
                </p>
            </div>
            <Card info={Educations} />
        </div>
    )
}