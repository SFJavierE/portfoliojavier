import { ReactNode } from 'react';
import { Collapse } from 'react-bootstrap';

interface TitleCollapse {
    title: string;
    setOpen: (openCollapse: boolean) => void;
    openCollapse: boolean;
    idCollapse: string;
    children: ReactNode;
}

interface MarginBorder {
    margin: string;
}


export default function TitleCollapseComponent ({title, setOpen, openCollapse, idCollapse, children}: TitleCollapse) {
    const Border = ({margin}: MarginBorder) => <hr style={{[margin]: '5px'}}/>

    return (
        <div
            onClick={() => setOpen(!openCollapse)}
            aria-controls={idCollapse}
            aria-expanded={openCollapse}
            className='nav-link mb-2'
        >
            <div className='bg-cold-bluegray rounded-1 text-cold-blue py-1'>
                <div>
                </div>
                    <Border margin='marginBottom'/>
                <span className="fs-4 ps-2">
                    {title}
                </span>
                <div>
                    <Border margin='marginTop'/>
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