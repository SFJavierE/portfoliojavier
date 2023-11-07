import Text from './text_es.json';

export default function Welcome () {
    return (
        <div>
            <div className='text-cold-3'>
                <span style={{fontSize: '70px'}}>
                    Bienvenidos
                </span>
                <hr className='border border-2 border-primary' style={{marginTop: '-10px'}}/>
            </div>
            <span className='pe-5' style={{fontSize: '16px'}}>
                {Text._1}     
            </span>
        </div>
    )
}

