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
        <nav className="navbar navbar-expand-lg bg-cold-3 rounded-top-3 text-cold-2 fw-bold" style={{height: 'auto'}}>
            <div className='bg-penguin position-absolute rounded-5 bg-cold-4' style={{width: '60px', height: '60px', top: '25%'}}>
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