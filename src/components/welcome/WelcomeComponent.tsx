const WelcomeComponent = () : React.ReactElement => {
    const message : string = "Mi nombre es Javier E. Sosa Fuch, soy desarrollador Fullstack con más de 3 años de experiencia profesional, y me enfoco en Técnologías como React, Angular, NodeJS, entre otros. Pero lo que siempre me caracterizó fue mi CREATIVIDAD que aplico en la creación de código, la resolución de problemas complejos y principalmente a la hora de aportar al equipo."
    return (
        <div>
            <div className='text-cold-3'>
                <span style={{fontSize: '70px'}}>
                    Bienvenidos
                </span>
                <hr className='border-cold-3' style={{marginTop: '-10px'}}/>
            </div>
            <span className='pe-5' style={{fontSize: '16px'}}>
                {message}     
            </span>
        </div>
    )
}

export default WelcomeComponent;