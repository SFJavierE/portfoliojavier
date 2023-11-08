interface Title {
    title: string;
}

export const HrComponent = () => {
    return (
        <hr className='border border-2 border-primary' style={{marginTop: '-6px'}}/>       
    )
}

const TitleComponent : React.FC<Title> =  ({title}) => {
    return (
        <div className='mb-2'>
            <span className='fs-2 text-cold-3'>{title}</span>
            <hr className='border-cold-3' style={{marginTop: '-6px'}}/>
        </div>
    )
}

export default TitleComponent;