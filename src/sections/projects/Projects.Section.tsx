import { Projects as Ps } from '../../utils/lists/Lists'
import Card from '../../components/card/Card'
import TitleSection from '../../components/titleSection/TitleSection'

export default function Projects(){
    return(
        <div className="w-full">
            <TitleSection name={"Proyectos"} />
            <Card info={Ps} />
        </div>
    )
}