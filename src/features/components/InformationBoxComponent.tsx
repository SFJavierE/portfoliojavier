import { ReactNode } from 'react';

interface InformationBox {
    children: ReactNode;
}

export default function InformationBoxComponent ({children}: InformationBox) {
    return (
        <div className='border border-1 p-1 mb-4 border-light-blue rounded-1 mt-3'>
            <div className='border border-1 p-3 border-cold-gray rounded-1'>
                {children}
            </div>
        </div>
    )
}