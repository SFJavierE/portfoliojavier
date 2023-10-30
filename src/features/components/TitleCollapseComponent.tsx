import { ReactNode } from 'react';
import { Collapse } from 'react-bootstrap';

interface TitleCollapse {
    title: string;
    setOpen: (openCollapse: boolean) => void;
    openCollapse: boolean;
    idCollapse: string;
    children: ReactNode;
}


export default function TitleCollapseComponent ({title, setOpen, openCollapse, idCollapse, children}: TitleCollapse) {
    const Border = () => <hr className='border border-2 border-info'/>

    return (
        <div
            onClick={() => setOpen(!openCollapse)}
            aria-controls={idCollapse}
            aria-expanded={openCollapse}
            className='text-info nav-link mb-2'
        >
            <div className='bg-primary rounded-1'>
                <div>
                    <Border />
                    <hr style={{marginTop: '-10px'}}/>
                </div>
                <span className="fs-4 ps-2">
                    {title}
                </span>
                <div>
                    <hr style={{marginBottom: '-10px'}}/>
                    <Border />
                </div>
            </div>
            <Collapse in={openCollapse}>
                <div id={idCollapse}>
                    {children}
                </div>
            </Collapse>
        </div>
    )
}