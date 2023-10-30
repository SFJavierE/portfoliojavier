interface Title {
    title: string;
}


export default function TitleComponent ({title}: Title) {
    const Border = () => <hr className='border border-2 border-info'/>

    return (
        <div>
            <div>
                <Border />
                <hr style={{marginTop: '-10px'}}/>
            </div>
            <span className="fs-4">
                {title}
            </span>
            <div>
                <hr style={{marginBottom: '-10px'}}/>
                <Border />
            </div>
        </div>
    )
}