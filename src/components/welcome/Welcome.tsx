import Text from './text_es.json';

export default function Welcome () {
    return (
        <div className="fs-5">
            <span className='text-cold-bluegray' style={{fontSize: '90px'}}>
                Bienvenidos.
            </span>
            <br />
            <span className='text-cold-light-blue pe-5'>
                {Text._1}     
            </span>
        </div>
    )
}

