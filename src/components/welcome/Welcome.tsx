import Text from './text_es.json';

export default function Welcome () {
    return (
        <div className="fs-5">
            <div className='mb-4 bg-secondary sticky-top opacity-50 p-2 d-flex align-items-center justify-content-center' style={{width: '100%'}}>
                <span className='text-warning'>
                    EN PROGRESO: todavía no está completo el portafolio pero la información esta lista para revisarse.
                </span>
            </div>
            <span>
                {Text._1}     
            </span>
            <br className='mb-3'/>
            <span>
                {Text._2}
            </span>
            <br className='mb-3'/>
            <span>
                {Text._3}
            </span>
            <br className='mb-3'/>
        </div>
    )
}

