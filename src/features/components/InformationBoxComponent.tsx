import { ReactNode } from 'react';

interface InformationBoxComponent {
    children: ReactNode;
}

export default function InformationBoxComponent ({children}: InformationBoxComponent) {
    return (
        <div className='border border-1 p-1 mb-4 border-info rounded-1'>
            <div className='border border-1 p-3 border-info rounded-1'>
                {children}
            </div>
        </div>
    )
}