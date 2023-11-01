import React, { useState } from 'react';
import TitleCollapseComponent from '../../features/components/TitleCollapseComponent';
import { Contact } from './Inteface';

export default function ContactComponent () {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false);
    const contactInfo: Contact[] = [
        {
            contactMedium: 'N° Celular',
            data: '(+54) 223-6696559'
        },
        {
            contactMedium: 'Email',
            data: 'sosafuch@gmail.com'
        },
        {
            contactMedium: 'Linkedin',
            data: 'https://www.linkedin.com/in/sosafuch/',
            isLink: true
        },
        {
            contactMedium: 'Github',
            data: 'https://github.com/Zoaxx1',
            isLink: true
        }
    ]

    const ContactInfo: React.FC<Contact> = ({contactMedium, data, isLink}) => (
        <div className='col text-center'>
            <hr />
            {
                isLink &&
                <a
                    className='text-decoration-none text-info'
                    href={data}
                >
                    {contactMedium}
                </a>
            }
            {
                !isLink &&
                <div>
                    <span>{contactMedium}: </span>
                    <span>{data}</span>
                </div>
            }
            <hr />
        </div>
    )


    return(
        <div>
            <TitleCollapseComponent
                title={'Contacto'}
                openCollapse={openCollapse}
                setOpen={setOpenCollapse}
                idCollapse='contact-collapse'
            >
                <div className='row'>
                    {
                        contactInfo.map((c) => (
                            <div key={c.contactMedium}>
                                <ContactInfo {...c}/>)
                            </div>
                            )
                        )
                    }
                </div>
            </TitleCollapseComponent>
        </div>
    )
}