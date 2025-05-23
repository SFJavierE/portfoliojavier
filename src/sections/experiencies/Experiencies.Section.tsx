import { Experiencie } from '../../utils/lists/Lists'
import Card from '../../components/card/Card'
import TitleSection from '../../components/titleSection/TitleSection'

export default function Experiencies(){
    return(
        <div className="w-full">
            <TitleSection name={"Experiencia"} />
            <Card info={Experiencie} />
        </div>
    )
}