import './style.css';
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { NavbarLink, Contact } from './Interface';

export default function Navbar () {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false);

    const itemsList : string[] = ['Tecnologías', 'Proyectos', 'Experiencias', 'Logros'];

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

    const NavbarLink: React.FC<NavbarLink>= ({text}) => (
        <div>
            <a className='nav-link text-info' href="#">{text}</a>
            <hr className='text-light'/>
        </div>
    )

    const ContactInfoList: React.FC<Contact> = ({ contactMedium, data, isLink }) => (
        <div>
            <div className='text-info p-1 mb-2' style={{fontSize: '12px'}}>
                {isLink ? <a className='text-info text-decoration-none' href={data}>- {contactMedium}</a> : <span>- {contactMedium}</span>}
                <br />
                {!isLink && <span className='ps-2'>{data}</span>}
            </div>
        </div>
    )

    return (
        <nav className="navbar bg-primary px-2">
            <div className="container-navbar px-2">
                <div>
                    <span className='navar-brand text-info'>Menu</span>
                    <hr className='text-light'/>
                </div>
                {itemsList.map((item) => <NavbarLink text={item}/>)}
                <div>
                    <a
                        onClick={() => setOpenCollapse(!openCollapse)}
                        aria-controls="contact-info"
                        aria-expanded={openCollapse}
                        className='text-info nav-link mb-2'
                    >
                        Contacto
                    </a>
                    <Collapse in={openCollapse}>
                        <div id="contact-info">
                            {contactInfo.map((c) => <ContactInfoList {...c} />)}
                        </div>
                    </Collapse>
                    <hr className='text-light'/>
                </div>
            </div>
        </nav>
    )
}