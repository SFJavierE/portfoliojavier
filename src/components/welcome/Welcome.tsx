import Text from './text_es.json';

export default function Welcome () {
    return (
        <div>
            <div>
                <span className='text-cold-light-blue' style={{fontSize: '70px'}}>
                    Bienvenidos
                </span>
                <hr className='border border-info' style={{marginTop: '-10px'}}/>
            </div>
            <span className='text-cold-light-blue pe-5' style={{fontSize: '16px'}}>
                {Text._1}     
            </span>
        </div>
    )
}

