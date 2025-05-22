import ButtonsPresentation from "../../components/buttons/presentation/ButtonsPresentation"

export default function AboutMe(){
    return(
        <div className="w-full text-gray-200">
            <div className="from-indigo-800 to-indigo-200/75 w-full py-3 pl-4 text-start text-3xl rounded-md bg-gradient-to-r font-bold">
                {"Sobre Mi"}
            </div>
            <div className="pl-6 mt-6 text-lg">
                <p>
                    Mi nombre es Javier y soy un desarrollador de 28 años, nacido y residente en Argentina. Desde siempre, la tecnología ha sido mi gran pasión, especialmente el mundo de los videojuegos. Hoy, esa pasión se ha expandido al descubrir cómo una simple línea de código puede transformar un programa, o la importancia de la atención al detalle para resolver desafíos. Esa meticulosidad y curiosidad por el impacto de cada elemento es lo que me impulsa en mi trabajo y en mi día a día, ya sea programando, cocinando, o disfrutando con mi perro Bodoque.
                </p>
                <br />
                <p>
                Me considero una persona apasionada y dedicada, siempre buscando mejorar y enfrentar los desafíos diarios con calma y una actitud positiva. Si buscan a alguien comprometido con el aprendizaje continuo y que disfruta de cada proyecto como una oportunidad de crecimiento, los invito a explorar mis redes para conocer más sobre mi trabajo y los proyectos futuros que estoy desarrollando. ¡Gracias por su atención!
                </p>
            </div>

            <div className="text-2xl font-bold flex justify-between text-end pl-6">
                <p className="mt-6">Javier Eduardo Sosa Fuch</p>
                <ButtonsPresentation classContainer="flex justify-end mt-6" />
            </div>
        </div>
    )
}