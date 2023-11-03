import './style.css';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavbarLink, Contact, NavbarController } from './Interface';

export default function Navbar () {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false);

    const itemsList : string[] = ['Proyectos', 'Educación', 'Experiencia Profesional', 'Logros'];

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
        <div className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{text}</a>
        </div>
    )

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-top-3" style={{height: 'auto'}}>
            <div className='bg-penguin position-absolute border border-1 rounded-5' style={{width: '50px', height: '50px'}}>
            </div>
            <div className="container-fluid d-flex justify-content-around">
                { itemsList.map((item: string) => <NavbarLink text={item}/> ) }
            </div>
        </nav>
    )
}