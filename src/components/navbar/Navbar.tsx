import './style.css';
import React from 'react';
import { NavbarLink } from './Interface';

export default function Navbar () {
    const itemsList : string[] = ['Proyectos', 'Educación', 'Experiencia Profesional', 'Logros'];

    const NavbarLink: React.FC<NavbarLink>= ({text}) => (
        <div className="nav-item">
            <span className="nav-link active">{text}</span>
        </div>
    )

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-top-3" style={{height: 'auto'}}>
            <div className='bg-penguin position-absolute border border-1 rounded-5' style={{width: '50px', height: '50px'}}>
            </div>
            <div className="container-fluid d-flex justify-content-around">
                { itemsList.map((item: string) => 
                        <div key={item}>
                            <NavbarLink text={item}/>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}