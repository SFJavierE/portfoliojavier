import { ReactNode } from 'react';

interface InformationBox {
    children: ReactNode;
}

export default function InformationBoxComponent ({children}: InformationBox) {
    return (
        <div className='border border-1 p-3 mb-4 border-light-blue rounded-1 mt-3'>
            {children}
        </div>
    )
}