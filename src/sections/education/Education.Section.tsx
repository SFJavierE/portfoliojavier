import { Educations } from '../../utils/lists/Lists'
import Card from '../../components/card/Card'
import TitleSection from '../../components/titleSection/TitleSection'

export default function Education(){
    return(
        <div className="w-full">
            <TitleSection name={"Educación"} />
            <div className='text-gray-200 mt-4 mb-1'>
                <p className='font-bold text-xl underline'>Mi Enfoque de Aprendizaje: La Pasión Autodidacta</p>
                <p className='text-md mt-2 pl-6'>
                    Mi trayectoria profesional se ha forjado principalmente a través de un enfoque autodidacta, una metodología que considero mi mayor fortaleza. Cuando una tecnología, como React o Unity, capta mi interés, me sumerjo por completo en ella hasta dominarla. Este proceso implica una combinación intensiva de estudio de la documentación oficial, la implementación de proyectos prácticos desde cero y la resolución activa de problemas reales que surgen en el camino.
                </p>
                <br />
                <p className='text-md pl-6'>
                Este método me ha permitido desarrollar una capacidad excepcional para adaptarme rápidamente a nuevos entornos y tecnologías, así como una profunda habilidad para la resolución de problemas de forma independiente. Si bien el 90% de mi aprendizaje proviene de esta práctica autónoma y la exploración constante, también he complementado mi formación con cursos específicos en instituciones cuando ha sido necesario para profundizar en temas puntuales. Para mí, la clave es simple: si algo me apasiona, le dedico el tiempo y el enfoque necesarios, sin depender únicamente de rutas preestablecidas. Esta curiosidad insaciable y mi compromiso con el aprendizaje continuo son los motores que me impulsan a crecer y a mantenerme siempre a la vanguardia tecnológica.
                </p>
            </div>
            <Card info={Educations} />
        </div>
    )
}